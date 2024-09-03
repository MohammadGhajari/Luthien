# Luthien - Hotel Reservation Website

Luthien is a comprehensive hotel reservation platform that allows users to explore, filter, and book hotel rooms. The website supports three roles: **Admin**, **User**, and **Hotelier**. Each role has specific functionalities tailored to meet the needs of the individual, whether it's booking rooms, managing a hotel listing, or overseeing the entire system.

[Live Website](https://luthien-tinuviel.netlify.app)

## Table of Contents

- [Features](#features)
  - [User Features](#user-features)
  - [Hotelier Features](#hotelier-features)
  - [Admin Features](#admin-features)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)

---

## Features

### User Features

- **Account Creation & Login**: Users can create an account and log in to the website.
- **Hotel Browsing & Search**: Users can search for hotels by city and filter them by:
  - Hotel Stars
  - Hotel Name
  - Price Range
  - Amenities
- **Hotel Details Page**: Users can view detailed information for each hotel:
  - Overview of the hotel
  - List of amenities
  - Hotel location shown on a map using React Leaflet
  - Hotel rooms with photos
  - Hotel accessibility and policies
  - User reviews and ratings
- **Hotel Reviews**: Users can add reviews to hotels they've stayed at.
- **Trending Destinations**: The landing page showcases trending destinations, as well as foreign and domestic hotels.
- **Dashboard**: Each user has a personal dashboard with the following sections:
  1. **Personal Details**: View and update personal information like name, email, phone, birthdate, nationality, gender, and address.
  2. **Activity Log**: Track activities such as:
     - Deposits to wallet
     - Password changes
     - Profile updates
     - Room reservations
     - Favorite hotels
  3. **Wallet**: Users can deposit balance into their wallets.
  4. **Security**: Change password, log out, or delete the account.
  5. **Reserved Rooms**: View and manage reserved rooms, with the option to cancel bookings.
- **Favorites**: Users can add hotels to a favorites list for easy access later.
- **Become a Hotelier**: Regular users can apply to become hoteliers by filling out a form to add their hotel to the platform.

### Hotelier Features

- **Add & Manage Hotels**: Hoteliers can add their hotels and manage the details, rooms, and policies.
- **View Bookings**: Hoteliers can manage room availability and view bookings.

### Admin Features

- **Full System Management**: Admins have access to oversee all users, hoteliers, and hotels within the platform. They can manage content, resolve conflicts, and ensure the smooth operation of the website.

---

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **Redux**: Used for state management across the application.
- **React-Icons**: For incorporating icons into the UI.
- **AOS (Animate on Scroll)**: Adds animations to elements when they are scrolled into view.
- **Axios**: For making HTTP requests to the backend.
- **React Leaflet**: For embedding maps into the application.
- **React-Tippy**: For tooltips throughout the UI.
- **React-Toastify**: For displaying notifications and toasts.
- **Recharts**: For displaying charts and visual data.
- **Validator**: Used for validating user input.
- **CSS Modules**: Scoped styling for the application components.

### Backend

- **Node.js & Express**: Used for building the RESTful API.
- **bcrypt**: For hashing user passwords securely.
- **Compression, CORS, Helmet, HPP, XSS**: Used for enhancing security and performance.
- **Cookie Parser**: For parsing cookies in requests.
- **Express-Rate-Limit**: To limit the rate of incoming requests and avoid abuse.
- **Multer**: Used for uploading photos (e.g., hotel images).
- **JWT (JSON Web Tokens)**: For authenticating and authorizing users securely.
- **MongoDB (Mongoose)**: As the database for storing user, hotel, and reservation data.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)
- MongoDB instance

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/luthien-hotel-reservation.git
   cd luthien-hotel-reservation
   ```
2. **Backend setup**:

- Navigate to the backend folder:

  ```bash
  cd backend
  ```

- Install dependencies:
  ```bash
  npm install
  ```
- Start the backend server:
  ```bash
  npm run start:dev
  ```

3. **Frontend setup**:

- Navigate to the frontend folder:

  ```bash
  cd frontend
  ```

- Install dependencies:
  ```bash
  npm install
  ```
- Start the React development server:
  ```bash
  npm run dev
  ```

---

## API Documentation

The API is documented using Postman. You can find the detailed documentation [here](#https://luthien-tinuviel.netlify.app/).

---

## Folder Structur

The folder structure of the project is organized as follows:

```bash
luthien-hotel-reservation/
├── backend/
│   ├── dev-data/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── public/
│   ├── utils/
│   ├── package.json
│   ├── app.js
│   └── server.js
│
├── frontend/
│   Luthien/
│      ├── src/
│      │   ├── components/
│      │   ├── pages/
│      │   ├── services/
│      │   ├── state management/
│      │   ├── util/
│      │   ├── styles/
│      │   ├── App.jsx
│      │   └── main.jsx
│      └── public/
└── README.md

```

- backend/: Contains all the server-side code, including the configuration, routes, controllers, and models.
- frontend/: Contains the React code for the client-side, with organized folders for components, pages, Redux-related files, and styles.

## Contributing

We welcome contributions to enhance the functionality and performance of Luthien. If you want to contribute, please follow these steps:

1. **Fork the project.**:
2. **Create a new branch for your feature or bugfix.**:
3. **Commit your changes and push the branch.**:
4. **Create a Pull Request and explain your changes.**:

Enjoy using Luthien! Feel free to reach out if you encounter any issues or have suggestions for improvement.😉
