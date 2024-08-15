import styles from "./../styles/about-us.module.css";
export default function AboutUs() {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <header className={styles["about-header"]}>
          <h1>About Luthien</h1>
        </header>
        <section className={styles["about-section"]}>
          <div className={styles["about-container"]}>
            <h2>Our Journey</h2>
            <p>
              Luthien began as a small idea: to simplify the process of booking
              hotels and empower travelers with the tools to make informed
              decisions. We noticed a gap in the market where users often
              struggled with finding accurate information, secure booking
              options, and genuine reviews. This sparked our journey to create a
              platform that addresses these challenges head-on.
            </p>
            <p>
              Founded by a team of passionate travel enthusiasts and technology
              experts, Luthien has grown into a comprehensive hotel reservation
              platform that serves users around the world. Our commitment to
              quality and innovation drives us to continually improve our
              services and expand our offerings.
            </p>

            <h2>Our Mission and Vision</h2>
            <p>
              At Luthien, our mission is to transform the way people book hotels
              by providing a platform that is user-friendly, reliable, and rich
              with information. We envision a world where every traveler,
              regardless of their budget or destination, can easily find and
              book accommodations that meet their needs and exceed their
              expectations.
            </p>
            <p>
              We believe in the power of transparency and trust. That's why we
              strive to offer detailed descriptions, high-quality photos, and
              genuine user reviews for every hotel listed on our platform. Our
              vision is to become the go-to resource for travelers seeking not
              just a place to stay, but a home away from home.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Vast Selection of Hotels:</strong> Explore a wide range
                of hotels, from luxury resorts to budget-friendly inns, across
                domestic and international destinations.
              </li>
              <li>
                <strong>Detailed Hotel Information:</strong> Get comprehensive
                details about each hotel, including amenities, room types,
                location, accessibility options, and policies.
              </li>
              <li>
                <strong>Interactive Map:</strong> Use our integrated React
                Leaflet map to explore hotel locations, nearby attractions, and
                transportation options.
              </li>
              <li>
                <strong>Genuine Reviews:</strong> Read reviews from real users
                to get insights into their experiences before making a booking
                decision.
              </li>
              <li>
                <strong>Personalized Dashboard:</strong> Manage your bookings,
                preferences, and personal details all in one place. Whether
                you're updating your profile or checking your reservation
                history, our user-friendly dashboard makes it easy.
              </li>
              <li>
                <strong>Hotelier Opportunities:</strong> If you're a hotel
                owner, Luthien provides a platform to showcase your property to
                a global audience. With our simple and straightforward hotelier
                registration process, you can list your hotel and reach
                potential guests in no time.
              </li>
            </ul>

            <h2>Our Commitment to Security</h2>
            <p>
              We understand the importance of security when it comes to online
              bookings. That's why we've implemented top-notch security measures
              to protect your personal information and payment details. From
              using bcrypt to securely hash passwords, to deploying JWT for safe
              token management, we've got your back. Our platform also
              incorporates security best practices like express-rate-limit, XSS
              protection, and more to ensure your data is always safe.
            </p>

            <h2>Our Core Values</h2>
            <p>
              <strong>Customer First:</strong> Our users are at the heart of
              everything we do. We are dedicated to providing a seamless
              experience, whether you're booking a room, managing your profile,
              or exploring new destinations.
            </p>
            <p>
              <strong>Innovation:</strong> We are constantly exploring new
              technologies and features to enhance our platform. From
              integrating the latest in mapping technologies to using advanced
              analytics, we strive to stay ahead of the curve.
            </p>
            <p>
              <strong>Transparency:</strong> We believe in honesty and openness.
              We work hard to provide accurate and up-to-date information so
              that our users can make informed decisions without any hidden
              surprises.
            </p>
            <p>
              <strong>Community:</strong> Luthien is more than just a platform;
              it's a community of travelers, hoteliers, and innovators. We value
              the contributions of our users and hoteliers, and we are committed
              to fostering a collaborative and supportive environment.
            </p>

            <h2>Looking Ahead</h2>
            <p>
              As we continue to grow, our focus remains on enhancing our
              platform and expanding our reach. We are excited about the future
              and the new features we are planning to introduce. Whether it's
              offering more personalized recommendations or expanding our hotel
              network, we are dedicated to making Luthien the best hotel
              reservation platform available.
            </p>
            <p>
              We invite you to join us on this journey. Explore, discover, and
              experience the world with Luthien.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
