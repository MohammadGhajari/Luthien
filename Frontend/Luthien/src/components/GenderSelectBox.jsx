import styles from "./../styles/country-selectbox.module.css";
export default function GenderSelectBox({ defaultValue, setValue }) {
  return (
    <select
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultValue}
      className={styles["select"]}
    >
      <option className={styles["option"]}>I'm a man</option>
      <option className={styles["option"]}>I'm a woman</option>
      <option className={styles["option"]}>I prefer not to say</option>
    </select>
  );
}
