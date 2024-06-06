import styles from "./../styles/question.module.css";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FcQuestions } from "react-icons/fc";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

export default function Question({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <li data-aos={"fade-right"} className={styles["question-item"]}>
      <p
        className={styles["question"]}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <FcQuestions />
        <span>{item.q}</span>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </p>
      <p
        className={
          styles["answer"] + " " + (isOpen ? styles["open-answer"] : "")
        }
        isopen={isOpen + ""}
      >
        {item.a}
      </p>
    </li>
  );
}
