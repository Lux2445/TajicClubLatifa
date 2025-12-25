import { Link } from "react-router-dom";
import s1 from "../../assets/images.jpg";
import styles from "./firstPage.module.css";
import Particles from "@/components/Particles";
import ru from "@/i18n/ru.json";
import en from "@/i18n/en.json";

const texts = {
  ru,
  en,
};

type Props = {
  lang: "ru" | "en";
};

export default function FirstPage({ lang }: Props) {
  const t = texts[lang];

  return (
    <div>
      <Particles
        particleCount={150}
        particleSpread={5}
        speed={0.035}
        moveParticlesOnHover={true}
        alphaParticles={false}
      />
      <main>
        <section>
          <div className={styles.title}>
            <h1 className={styles.typetext}>{t.firstPage.title}</h1>
          </div>
          <Link to="/menu">{t.firstPage.getStarted}</Link>
        </section>
      </main>
      <div className={styles.features}>
        <div>
          <h2>{t.firstPage.tagline}</h2>
          <p>{t.firstPage.intro}</p>
        </div>
        <img src={s1} alt="" />
      </div>
      <div className={styles.features}>
        <img src={s1} alt="" />
        <div>
          <h2>{t.firstPage.features.personalizedLearning}</h2>
          <p>{t.firstPage.features.personalizedLearningDesc} </p>
        </div>
      </div>
      <span>
        <h2 className={styles.learn}>
          {t.firstPage.features.learnAnytimeAnywhere}
        </h2>
      </span>
      <div className={styles.l1}>
        <div>
          <h2>{t.firstPage.about.title}</h2>
          <p>{t.firstPage.about.desc}</p>
          <h2>{t.firstPage.howItWorks.title}</h2>
          <p className={styles.keep}>{t.firstPage.howItWorks.desc}</p>
        </div>
      </div>
      <Link to="/reasons" className={styles.more}>
        {t.firstPage.learnMore}
      </Link>
    </div>
  );
}
