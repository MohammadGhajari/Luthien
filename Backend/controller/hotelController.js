const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require('./handleFactory');
const Hotel = require('./../model/hotelModel');
const catchAsync = require('./../utils/catAsync');
const Room = require('./../model/roomModel');
const APIFeatures = require('./../utils/apiFeatures');
const multer = require('multer');
const { restart } = require('nodemon');
const { ResumeToken } = require('mongodb');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'cover') {
        cb(null, 'public/hotels/covers');
      } else if (file.fieldname === 'photos') {
        cb(null, 'public/hotels/photos');
      }
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      const prefix = file.fieldname === 'cover' ? 'cover' : 'photos';
      cb(null, `${prefix}-${Date.now()}.${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError('Not an image! Please upload only images', 400), false);
    }
  },
});

exports.uploadFiles = upload.fields([
  { name: 'cover', maxCount: 1 },
  { name: 'photos', maxCount: 5 },
]);

exports.getAllHotels = getAll(Hotel);
exports.getHotel = getOne(Hotel);
exports.createHotel = createOne(Hotel);
exports.deleteHotel = deleteOne(Hotel);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.updateHotel = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const filteredBody = filterObj(
    req.body,
    'name',
    'owner',
    'rooms',
    'stars',
    'description',
    'city',
    'address',
    'location',
    'phone',
    'cover',
    'photos',
    'country',
    'amenities',
    'importantVicinityPlaces',
  );

  if (req.files) {
    const baseUrl = process.env.BACKEND_DOMAIN || `http://127.0.0.10:${process.env.PORT || 8000}`;
    if (req.files.cover) {
      filteredBody.cover = `${baseUrl}/hotels/covers/${req.files.cover[0].filename}`;
    }
    if (req.files.photos) {
      const photosArray = req.files.photos.map(
        (photo) => `${baseUrl}/hotels/photos/${photo.filename}`,
      );
      filteredBody.photos = photosArray;
    }
  }

  const updatedHotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    },
  );
  // next();
  res.status(200).json({
    status: 'success',
    data: {
      hotel: updatedHotel,
    },
  });
});

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.find({ hotel: req.params.id });

  res.status(200).json({
    stasus: 'success',
    results: rooms.length,
    data: {
      data: rooms,
    },
  });
});

exports.getTrending = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'ratingsAverage';
  next();
};

function checkCapacity(capacity, req) {
  capacity.sort((a, b) => a - b);
  req.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < capacity.length && j < req.length) {
    if (capacity[i] >= req[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j === req.length;
}

function toCamelCase(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Normalize string by removing spaces and converting to lowercase
 */
function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/\s+/g, '')
    .trim();
}

/**
 * Calculate similarity percentage between two strings using Levenshtein distance
 * Returns a percentage (0-100) where 100 means exact match
 */
function calculateSimilarity(str1, str2) {
  const s1 = normalizeString(str1);
  const s2 = normalizeString(str2);

  if (s1 === s2) return 100;
  if (s1.length === 0 || s2.length === 0) return 0;

  // Check if one string contains the other (partial match)
  if (s1.includes(s2) || s2.includes(s1)) {
    const longer = Math.max(s1.length, s2.length);
    const shorter = Math.min(s1.length, s2.length);
    return (shorter / longer) * 100;
  }

  // Calculate Levenshtein distance
  const matrix = [];
  const len1 = s1.length;
  const len2 = s2.length;

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
        );
      }
    }
  }

  const distance = matrix[len1][len2];
  const maxLen = Math.max(len1, len2);
  const similarity = ((maxLen - distance) / maxLen) * 100;

  return Math.round(similarity * 100) / 100; // Round to 2 decimal places
}

exports.handleSearchQuery = catchAsync(async (req, res, next) => {
  const searchCity = req.body.city;
  if (!searchCity) {
    return res.status(400).json({
      status: 'error',
      message: 'City parameter is required',
    });
  }

  // Fetch all hotels (we'll filter by similarity)
  const allHotels = await Hotel.find({});

  // Filter hotels by city similarity (> 90%)
  const matchedHotels = allHotels.filter((hotel) => {
    const similarity = calculateSimilarity(searchCity, hotel.city);
    return similarity > 90;
  });

  console.log(`Found ${matchedHotels.length} hotels matching "${searchCity}"`);

  // Filter by capacity
  const reqCapacity = req.body.rooms.map((item) => item.adults);
  const result = [];
  for (let i = 0; i < matchedHotels.length; i++) {
    const roomCapacity = [];
    matchedHotels[i].rooms.map((item) => roomCapacity.push(item.capacity));

    if (checkCapacity(roomCapacity, reqCapacity)) {
      result.push(matchedHotels[i]);
    }
  }

  // Filter by availability (date and isFull)
  const result2 = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].rooms.length; j++) {
      if (
        !result[i].rooms[j].isFull &&
        (result[i].rooms[j].startDate > req.body.endDate ||
          result[i].rooms[j].endDate < req.body.startDate)
      ) {
        result2.push(result[i]);
        break;
      }
    }
  }

  const hotels = result2;

  res.status(200).json({
    status: 'success',
    results: hotels.length,
    data: hotels,
  });
});
