import { useEffect, useRef } from "react";
import styles from "./../styles/faq.module.css";
import Question from "./Question";
import { useDispatch } from "react-redux";
import { setElement } from "./../state management/scrollSlice";

export default function FAQ() {
    const Q = [
        {
            q: " How do I create an account on this website?",
            a: 'To create an account, click on the "Login / Register" button on the top right of the homepage. You\'ll be prompted to provide a username, email address, and password.',
        },
        {
            q: "How can I log in to my account?",
            a: 'To log in, click on the "Login / Register" button on the homepage. And in the opened page, enter your username and password, then click "Log In." button',
        },
        {
            q: "How can I search for books using the Google Book API?",
            a: "Use the search bar on the website's homepage. Enter keywords, book titles, authors, or other relevant information, and then click \"Search.\" You'll receive a list of book results based on your query.",
        },
        {
            q: "How can I add a book to my list?",
            a: 'To add a book to your list, you can click on the "Add Book" button or you can click on the book\'s title in the search results. On the book\'s details page, you\'ll find an "Add to My List" button. Click it to add the book to your reading list. ',
        },
        {
            q: "How do I remove a book from my reading list?",
            a: 'To remove a book from your list, you can immediately after add book to your list, remove it bu click on the "Remove Book" button. or go to your reading list, and next to each book, you\'ll find a "Remove Book" button. Click it to remove the book.',
        },
        {
            q: "Where can I find account settings?",
            a: 'Account settings can be accessed by clicking on your profile picture, located in the top right corner of the website. From there, select "Account Settings" to manage your account preferences. or in the header of the website, you can click on the settings button to go to account settings.',
        },
        {
            q: "How can I update my personal information?",
            a: 'In the account settings, you\'ll find an button "Personal Information." Click it to make changes to your profile details.',
        },
        {
            q: "Can I change my profile picture?",
            a: 'Yes, by clicking "Personal Information" button, you will find a button "Choose Image".by clicking on it, you can upload a picture for your profile.',
        },
        {
            q: "How do I log out of my account?",
            a: 'To log out, click on your profile picture and select "Log Out" from the dropdown menu. Or on the account settings you can find this button.',
        },
        {
            q: "How can I delete my account?",
            a: 'If you wish to delete your account, go to your account settings and find the "Delete Account" button. Follow the provided instructions to permanently delete your account.',
        },
    ];

    const faqRef = useRef();
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(setElement(faqRef.current));
    }, []);

    return (
        <div className={styles["outer-container"]}>
            <div ref={faqRef} className={styles.FAQContainer}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles["list-container"]}>
                    {Q.map((item, i) => (
                        <Question key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
