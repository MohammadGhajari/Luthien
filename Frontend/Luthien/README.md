# Luthien Hotel Reservation System

Luthien is a comprehensive hotel reservation system that enables users to browse and book hotel rooms, manage their reservations, and become hoteliers. The system supports three roles: admin, user, and hotelier.

## Features

### User Role
- **Account Management**: Create an account, login, and manage personal details.
- **Hotel Browsing**: Search for hotels by city, filter by stars, name, price range, and amenities.
- **Hotel Details**: View hotel overview, amenities, location on React Leaflet map, room photos, accessibility, policies, and reviews.
- **Booking**: Reserve rooms and manage reservations.
- **Reviews**: Add reviews for hotels.
- **Dashboard**: Access personal details, activity log, wallet, security settings, and reserved rooms.
- **Favorites**: Add and manage favorite hotels.
- **Become a Hotelier**: Fill out a form to add a hotel and become a hotelier.

### Hotelier Role
- **Hotel Management**: Add and manage hotels and room details.
- **Booking Management**: View and manage reservations.

### Admin Role
- **User Management**: Manage user accounts and permissions.
- **Hotel Management**: Oversee hotel listings and reviews.

## Technologies Used

### Frontend
- **React.js**: Main frontend library.
- **React Icons**: For website icons.
- **Redux**: For state management.
- **AOS**: For animations.
- **Axios**: For data fetching from the backend.
- **React Leaflet**: For maps.
- **React Tippy**: For tooltips.
- **React Toastify**: For toasts.
- **Recharts**: For charts.
- **Validator**: For validating user information.
- **CSS Modules**: For styling.

### Backend
- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **Bcrypt**: For hashing user passwords.
- **Compression, CORS, Helmet, HPP, XSS**: For security.
- **Cookie Parser**: For handling cookies.
- **Express Rate Limit**: For rate limiting.
- **Multer**: For uploading photos.
- **JWT**: For tokens.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/luthien.git
    cd luthien
    ```

2. **Backend Setup**:
    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Create a `.env` file and add your environment variables:
        ```env
        PORT=5000
        DATABASE_URL=your_database_url
        JWT_SECRET=your_jwt_secret
        ```
    - Start the backend server:
        ```bash
        npm start
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
        ```bash
        cd ../frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Create a `.env` file and add your environment variables:
        ```env
        REACT_APP_API_URL=http://localhost:5000
        ```
    - Start the frontend server:
        ```bash
        npm start
        ```

## Usage

- Navigate to `http://localhost:3000` in your browser to access the frontend.
- The backend will be running on `http://localhost:5000`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the developers of the libraries and frameworks used in this project.

---

Feel free to customize this README file according to your project's specifics and preferences.
