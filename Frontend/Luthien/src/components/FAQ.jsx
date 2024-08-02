import { useEffect, useRef } from "react";
import styles from "./../styles/faq.module.css";
import Question from "./Question";
import AOS from "aos";

export default function FAQ() {
  const Q = [
    {
      q: "How do I create an account on Luthien?",
      a: 'To create an account, click on the "Login / Register" button at the top right of the homepage. You\'ll be prompted to provide your username, email address, and password.',
    },
    {
      q: "How can I log in to my account?",
      a: 'To log in, click on the "Login / Register" button on the homepage. Enter your email and password, then click "Log In."',
    },
    {
      q: "How do I search for hotels?",
      a: "Use the search bar on the homepage. Enter the city name, and you'll see a list of hotels in that city. You can filter the results by hotel stars, name, price range, and amenities.",
    },
    {
      q: "How can I reserve a room?",
      a: 'To reserve a room, select a hotel and view its details. Choose a room from the list of available rooms, and click "Reserve."',
    },
    {
      q: "Can I add reviews for hotels?",
      a: 'Yes, you can add reviews for hotels. Visit the hotel\'s page and scroll down to the reviews section. Click on "Add Review" to submit your feedback.',
    },
    {
      q: "What is the 'Become a Hotelier' feature?",
      a: 'If you want to list your own hotel on Luthien, you can become a hotelier. Click the "Become a Hotelier" button, fill out the form with your hotel\'s information, and submit it for approval.',
    },
    {
      q: "How can I update my personal information?",
      a: 'Go to your dashboard and select "Personal Details." Here you can update your name, email, phone number, birthdate, nationality, gender, and address.',
    },
    {
      q: "How do I deposit money into my wallet?",
      a: 'Go to your dashboard and select "Wallet." Click on "Deposit" and follow the instructions to add funds to your wallet.',
    },
    {
      q: "How can I change my password?",
      a: 'In your dashboard, select "Security." Here, you can change your password by entering your current password and the new one.',
    },
    {
      q: "How do I log out of my account?",
      a: 'To log out, go to your dashboard, select "Security," and click "Log Out."',
    },
    {
      q: "How can I delete my account?",
      a: 'If you wish to delete your account, go to your dashboard, select "Security," and click "Delete Account." Follow the instructions to permanently delete your account.',
    },
    {
      q: "How do I see my favorite hotels?",
      a: 'Go to your "Favorite" page in the dashboard. Here you can view and manage the hotels you have added to your favorites.',
    },
    {
      q: "How can I view my reservation history?",
      a: 'In your dashboard, select "Reserved Rooms." Here you can see all the rooms you have reserved and have the option to cancel bookings if needed.',
    },
    {
      q: "What should I do if I encounter a problem?",
      a: 'If you encounter any issues, please contact our customer support through the "@m_ghajari" in telegram. We are here to help you with any problems you might face.',
    },
    {
      q: "How can I add a hotel to my favorites?",
      a: 'To add a hotel to your favorites, go to the hotel\'s page and click on the "Add to Favorites" button.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className={styles["outer-container"]}>
      <h1 data-aos={"fade"} data-aos-duration={"200"}>
        Frequently Asked Questions
      </h1>
      <div className={styles["list-container"]}>
        {Q.map((item, i) => (
          <Question key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
