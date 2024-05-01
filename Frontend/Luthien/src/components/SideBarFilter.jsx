import styles from "./../styles/sidebar-filter.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function SideBarFilter() {
    return (
        <div className={styles.container}>
            <p>Results: 10</p>
            <section className={styles.accordion}>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-1" id="cb2" />
                    <label for="cb2" class={styles["tab__label"]}>
                        Hotel Stars
                    </label>
                    <div class={styles["tab__content"]}>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-2" id="cb3" />
                    <label for="cb3" class={styles["tab__label"]}>
                        Search hotels name
                    </label>
                    <div class={styles["tab__content"]}>
                        <button>hello</button>
                        <button>hello</button>
                        <button>hello</button>
                        <button>hello</button>
                        <button>hello</button>
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb4" />
                    <label for="cb4" class={styles["tab__label"]}>
                        Price range
                    </label>
                    <div class={styles["tab__content"]}>
                        <button>hello</button>
                        <button>hello</button>
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb5" />
                    <label for="cb5" class={styles["tab__label"]}>
                        Hotel facilities
                    </label>
                    <div class={styles["tab__content"]}>
                        <button>hello</button>
                        <button>hello</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
