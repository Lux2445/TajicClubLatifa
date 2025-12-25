import type { VocabularyWord } from "../../types/menuPage-types";
import styles from "./menu.module.css";

type Props = {
  word: VocabularyWord;
};

export function WordCard({ word }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.tj}>{word.tj}</div>
      <div className={styles.ru}>{word.ru}</div>
      <div className={styles.tr}>{word.tr}</div>
    </div>
  );
}
