import { useState } from "react";
import styles from "./../styles/input-field.module.css";

export default function HotelierInputFields({
  placeholder = "Name",
  top,
  left,
  width = "20rem",
  height,
  color = "white",
  value,
  setValue,
  type = "text",
  required = true,
  onblur,
}) {
  const randomID = Math.random();
  const [inValue, setInValue] = useState("");

  function handleChange(e) {
    setInValue(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div
      className={styles.container}
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
    >
      <label
        className={`${styles["input-label"]} ${
          inValue || value ? styles["has-value"] : ""
        }`}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: color,
        }}
        htmlFor={randomID}
      >
        {placeholder}
      </label>
      <input
        required={required}
        onChange={handleChange}
        className={styles["input-field"]}
        type={type}
        id={randomID}
        style={{ backgroundColor: color }}
        value={value}
        onBlur={onblur}
      />
    </div>
  );
}
