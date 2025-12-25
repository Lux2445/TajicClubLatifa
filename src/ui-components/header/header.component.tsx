import logo from "../../assets/logo.png";
import styles from "./header.module.css";

type Props = {
  lang: "ru" | "en";
  onChangeLang: (lang: "ru" | "en") => void;
};

export default function Header({ lang, onChangeLang }: Props) {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <span>
        <h2>Tajikclub</h2>
      </span>
      <div className={styles.lang}>
        <button
          onClick={() => onChangeLang("ru")}
          className={lang === "ru" ? styles.active : ""}
        >
          RU
        </button>

        <button
          onClick={() => onChangeLang("en")}
          className={lang === "en" ? styles.active : ""}
        >
          EN
        </button>
      </div>
    </div>
  );
}
