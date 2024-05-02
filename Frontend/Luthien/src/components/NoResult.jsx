import styles from "./../styles/no-result.module.css";
import { TfiFaceSad } from "react-icons/tfi";

export default function NoResult() {
    return (
        <div className={styles.container}>
            <span>
                <TfiFaceSad />
            </span>
            <span> No results</span>
        </div>
    );
}
