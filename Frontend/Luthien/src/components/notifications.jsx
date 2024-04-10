import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import styles from './../styles/notofication-style.module.css'


export default function closableToast(message) {
    return toast((t) => (
        <span className= {styles.container}>
            <p>{message}</p>
            <button className={styles['close-btn']} onClick={() => toast.dismiss(t.id)}>
                <IoMdClose />
            </button>
        </span>
    ));
}
