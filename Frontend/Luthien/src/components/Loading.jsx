import styles from "./../styles/loading.module.css";

export default function Loading() {
    return (
        <div className={styles["outer-container"]}>
            <div className={styles["loader"]}></div>
        </div>
    );
}
