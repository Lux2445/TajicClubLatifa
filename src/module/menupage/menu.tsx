import styles from "./menu.module.css";
import type { Lesson } from "../../types/menuPage-types";
import { WordCard } from "./WordCard";
import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bg from "@/assets/parallax1.jpg";

import ru from "@/i18n/ru.json";
import en from "@/i18n/en.json";

const texts = {
  ru,
  en,
};
type Props = {
  lang: "ru" | "en";
};
export default function Menu({ lang }: Props) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  useEffect(() => {
    fetch("/lesson1.json")
      .then((res) => res.json())
      .then((data: Lesson) => {
        setLesson(data);
      });
  }, []);

  if (!lesson) {
    return <p>Загрузка...</p>;
  }

  const t = texts[lang];

  return (
    <div id="menu" className={styles.container}>
      <Parallax pages={1}>
        <ParallaxLayer
          offset={0}
          factor={2}
          speed={0.2}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer offset={0} speed={0.6}>
          <h1>{t.menuPage.lesson.title}</h1>
          <p>{t.menuPage.lesson.goal}</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <section className={styles.cards}>
            {" "}
            {lesson.vocabulary.map((word) => (
              <WordCard key={word.id} word={word} />
            ))}
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
