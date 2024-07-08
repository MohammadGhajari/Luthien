import { useState, useEffect } from "react";
import styles from "./../styles/checkbox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "./../helper/filter";
import { setFilteredResults } from "./../state management/searchRoomSlice";

export default function CheckBox({ label, svg = <></>, setValue }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { rawResults } = useSelector((state) => state.searchRoom);
  const filterObj = useSelector((state) => state.filter);

  function handleClick() {
    dispatch(setValue(!checked));

    setChecked((checked) => !checked);
  }
  useEffect(() => {
    const res = filter(rawResults, filterObj);
    dispatch(setFilteredResults(res));
  }, [filterObj]);

  return (
    <label className={styles["container-label"]} htmlFor="check">
      <span>
        <span>{svg}</span>
        <span>{label}</span>
      </span>
      <div
        onClick={handleClick}
        id="check"
        className={
          styles["check-box-container"] +
          " " +
          `${checked ? styles["complete-status"] : ""}`
        }
      >
        <div
          className={
            styles["check-status"] +
            " " +
            `${checked ? styles["check-complete-status"] : ""}`
          }
        ></div>
      </div>
    </label>
  );
}
