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
}) {
  const randomID = Math.random();

  function handleChange(e) {
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
          value ? styles["has-value"] : ""
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
        onChange={handleChange}
        className={styles["input-field"]}
        type="text"
        id={randomID}
        style={{ backgroundColor: color }}
        value={value}
      />
    </div>
  );
}
