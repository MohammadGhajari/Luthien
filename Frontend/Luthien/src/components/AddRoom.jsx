import styles from "./../styles/input-field.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function AddRoom({ i, room, rooms, setRooms }) {
    function handleAddAdults() {
        rooms[i].adults = room.adults + 1;
        setRooms([...rooms]);
    }
    function handleDelAdults() {
        rooms[i].adults = room.adults == 1 ? 1 : room.adults - 1;
        setRooms([...rooms]);
    }
    function handleAddChildren() {
        rooms[i].children = room.children + 1;
        setRooms([...rooms]);
    }
    function handleDelChildren() {
        rooms[i].children = room.children == 0 ? 0 : room.children - 1;
        setRooms([...rooms]);
    }
    function handleDeleteRoom(e) {
        if (rooms.length > 1) {
            rooms = rooms.filter((item, index) => index !== i);
            setRooms([...rooms]);
        }
    }

    return (
        <div className={styles["room-sample"]}>
            <div className={styles["title-delete"]}>
                <h3>Room {i + 1}</h3>
                <button onClick={handleDeleteRoom}>
                    <MdOutlineDeleteForever />
                </button>
            </div>
            <div className={styles["adult-container"]}>
                <span>
                    Adults <span>(Ages 18 or above)</span>
                </span>
                <div className={styles["adult-btn-conatiner"]}>
                    <button onClick={handleDelAdults}>
                        <FaMinus />
                    </button>
                    <span>{room.adults}</span>
                    <button onClick={handleAddAdults}>
                        <FaPlus />
                    </button>
                </div>
            </div>
            <div className={styles["adult-container"]}>
                <span>
                    Children <span>(Ages 0-17)</span>
                </span>
                <div className={styles["adult-btn-conatiner"]}>
                    <button onClick={handleDelChildren}>
                        <FaMinus />
                    </button>
                    <span>{room.children}</span>
                    <button onClick={handleAddChildren}>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    );
}
