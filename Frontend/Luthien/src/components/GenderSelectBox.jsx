import styles from "./../styles/country-selectbox.module.css";
export default function GenderSelectBox({ defaultValue }) {
  return (
    <select defaultValue={defaultValue} className={styles["select"]}>
      <option className={styles["option"]}>I'm a man</option>
      <option className={styles["option"]}>I'm a woman</option>
      <option className={styles["option"]}>I prefer not to say</option>
    </select>
  );
}
