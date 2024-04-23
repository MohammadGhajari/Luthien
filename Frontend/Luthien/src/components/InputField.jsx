import { useState } from "react";
import styles from "./../styles/input-field.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function InputField({
    placeholder = "Name",
    top,
    left,
    width = 20,
}) {
    const [inputValue, setInputValue] = useState(
        placeholder === "Passengers" ? "1 Adult, 1 Room" : ""
    );

    const randomID = Math.random();

    return (
        <div className={styles.container} style={{ width: `${width}rem` }}>
            <label
                className={`${styles["input-label"]} ${
                    inputValue ? styles["has-value"] : ""
                }`}
                style={{ top: `${top}%`, left: `${left}%` }}
                htmlFor={randomID}
            >
                {placeholder}
            </label>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                className={styles["input-field"]}
                type="text"
                defaultValue={
                    placeholder === "Passengers" ? "1 Adult, 1 Room" : ""
                }
                id={randomID}
                required={true}
            />

            {placeholder === "Travelers" && (
                <div className={styles["passenger-modal"]}>
                    <div className={styles["inner-container"]}>
                        <div className={styles["room-sample"]}>
                            <div className={styles["title-delete"]}>
                                <h3>First Room</h3>
                                <button>
                                    <MdOutlineDeleteForever />
                                </button>
                            </div>
                            <div className={styles["adult-container"]}>
                                <span>
                                    Adults <span>(Ages 18 or above)</span>
                                </span>
                                <div className={styles["adult-btn-conatiner"]}>
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["adult-container"]}>
                                <span>
                                    Children <span>(Ages 0-17)</span>
                                </span>
                                <div className={styles["adult-btn-conatiner"]}>
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button>
                            <FaPlus /> <span>Add Room</span>
                        </button>
                    </div>

                    <div className={styles["confirm-btn-container"]}>
                        <button>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
}
