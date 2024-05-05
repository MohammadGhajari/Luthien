function checkFilters(filters) {
    let status = true;

    const filtersKeys = Object.keys(filters);
    filtersKeys.forEach((key) => {
        if (key !== "hotelName" && filters[key]) status = false;
    });

    return status;
}

export function filter(raw, filters) {
    let filtered = [];
    if (checkFilters(filters)) {
        filtered = raw;
    } else {
        raw.forEach((hotel) => {
            if (filters.threeStar && hotel.stars <= 3) {
                filtered.push(hotel);
            }
            if (filters.fourStar && hotel.stars === 4) {
                filtered.push(hotel);
            }
            if (filters.fiveStar && hotel.stars === 5) {
                filtered.push(hotel);
            }
            if (
                filters.swimmingPool &&
                hotel.amenities.includes("swimming pool")
            )
                filtered.push(hotel);
            if (filters.teaMaker && hotel.amenities.includes("tea maker"))
                filtered.push(hotel);
            if (filters.prayerRoom && hotel.amenities.includes("prayer room"))
                filtered.push(hotel);
            if (
                filters.askInsideRoom &&
                hotel.amenities.includes("ask inside room")
            )
                filtered.push(hotel);
            if (filters.freeWifi && hotel.amenities.includes("free wifi"))
                filtered.push(hotel);
            if (filters.gym && hotel.amenities.includes("gym"))
                filtered.push(hotel);
            if (filters.pet && hotel.amenities.includes("pet"))
                filtered.push(hotel);
            if (filters.game && hotel.amenities.includes("game"))
                filtered.push(hotel);
            if (filters.shopping && hotel.amenities.includes("shopping"))
                filtered.push(hotel);
            if (filters.parking && hotel.amenities.includes("parking"))
                filtered.push(hotel);
            if (filters.elevator && hotel.amenities.includes("elevator"))
                filtered.push(hotel);
            if (filters.breakfast && hotel.amenities.includes("breakfast"))
                filtered.push(hotel);
            if (filters.restaurant && hotel.amenities.includes("restaurant"))
                filtered.push(hotel);
            if (
                filters.allHoursServices &&
                hotel.amenities.includes("all hours services")
            )
                filtered.push(hotel);
            if (
                filters.fireExtinguishing &&
                hotel.amenities.includes("fire extinguishing")
            )
                filtered.push(hotel);
            if (filters.wallCloset && hotel.amenities.includes("wall closet"))
                filtered.push(hotel);
            if (filters.helpBox && hotel.amenities.includes("help box"))
                filtered.push(hotel);
            if (
                filters.partyServices &&
                hotel.amenities.includes("party services")
            )
                filtered.push(hotel);
            if (filters.taxi && hotel.amenities.includes("taxi"))
                filtered.push(hotel);
            if (filters.ATM && hotel.amenities.includes("ATM"))
                filtered.push(hotel);
            if (filters.library && hotel.amenities.includes("library"))
                filtered.push(hotel);
        });
    }

    return filtered;
}
