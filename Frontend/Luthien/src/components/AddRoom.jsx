import styles from "./../styles/input-field.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "./../state management/searchRoomSlice";
import { Tooltip } from "react-tippy";
import CustomTooltip from "./CustomTooltip";

export default function AddRoom({ i }) {
  const { rooms } = useSelector((state) => state.searchRoom);
  const dispatch = useDispatch();
  const room = rooms[i];

  function handleAddAdults() {
    const clonedRooms = [...rooms];
    const newRoom = {
      adults: clonedRooms[i].adults + 1,
      children: clonedRooms[i].children,
    };
    clonedRooms[i] = newRoom;
    dispatch(setRooms([...clonedRooms]));
  }
  function handleDelAdults() {
    const clonedRooms = [...rooms];
    const newRoom = {
      adults: clonedRooms[i].adults !== 1 ? clonedRooms[i].adults - 1 : 1,
      children: clonedRooms[i].children,
    };
    clonedRooms[i] = newRoom;
    dispatch(setRooms([...clonedRooms]));
  }
  function handleAddChildren() {
    const clonedRooms = [...rooms];
    const newRoom = {
      adults: clonedRooms[i].adults,
      children: clonedRooms[i].children + 1,
    };
    clonedRooms[i] = newRoom;
    dispatch(setRooms([...clonedRooms]));
  }
  function handleDelChildren() {
    const clonedRooms = [...rooms];
    const newRoom = {
      adults: clonedRooms[i].adults,
      children: clonedRooms[i].children === 0 ? 0 : clonedRooms[i].children - 1,
    };
    clonedRooms[i] = newRoom;
    dispatch(setRooms([...clonedRooms]));
  }

  function handleDeleteRoom(e) {
    if (rooms.length > 1) {
      // const clonetRooms = [...rooms];
      const clonetRooms = rooms.filter((item, index) => index !== i);
      dispatch(setRooms([...clonetRooms]));
    }
  }

  return (
    <div className={styles["room-sample"]}>
      <div className={styles["title-delete"]}>
        <h3>Room {i + 1}</h3>
        <CustomTooltip cTitle={"Delete room"}>
          <button type="button" onClick={handleDeleteRoom}>
            <MdOutlineDeleteForever />
          </button>
        </CustomTooltip>
      </div>
      <div className={styles["adult-container"]}>
        <span>
          Adults <span>(Ages 18 or above)</span>
        </span>
        <div className={styles["adult-btn-conatiner"]}>
          <CustomTooltip cTitle={"Delete adult"}>
            <button type="button" onClick={handleDelAdults}>
              <FaMinus />
            </button>
          </CustomTooltip>
          {/* <Tooltip
            title="Delete adult"
            position="top"
            trigger="mouseenter"
            delay={500}
            hideDelay={100}
            animation={"shift"}
            arrow={true}
            arrowSize={"small"}
            distance={5}
            size="regular"
          >
            <button type="button" onClick={handleDelAdults}>
              <FaMinus />
            </button>
          </Tooltip> */}

          <span>{room.adults}</span>

          <CustomTooltip cTitle={"Add adult"}>
            <button type="button" onClick={handleAddAdults}>
              <FaPlus />
            </button>
          </CustomTooltip>
          {/* 
          <Tooltip
            title="Add adult"
            position="top"
            trigger="mouseenter"
            delay={500}
            hideDelay={100}
            animation={"shift"}
            arrow={true}
            arrowSize={"small"}
            distance={5}
            size="regular"
          >
            <button type="button" onClick={handleAddAdults}>
              <FaPlus />
            </button>
          </Tooltip> */}
        </div>
      </div>
      <div className={styles["adult-container"]}>
        <span>
          Children <span>(Ages 0-17)</span>
        </span>
        <div className={styles["adult-btn-conatiner"]}>
          <CustomTooltip cTitle={"Delete child"}>
            <button type="button" onClick={handleDelChildren}>
              <FaMinus />
            </button>
          </CustomTooltip>

          <span>{room.children}</span>
          <CustomTooltip cTitle={"Add child"}>
            <button type="button" onClick={handleAddChildren}>
              <FaPlus />
            </button>
          </CustomTooltip>
        </div>
      </div>
    </div>
  );
}
