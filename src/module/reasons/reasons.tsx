// import Header from "@/components/Header";
import { Link } from "react-router-dom";
import styles from "./reasons.module.css";
import p0 from "../../assets/icons/card-game.png";
import p1 from "../../assets/icons/radio.png";
import p2 from "../../assets/icons/next-level.png";
import p3 from "../../assets/icons/community.png";
import p4 from "../../assets/icons/happiness.png";
import p5 from "../../assets/icons/listen.png";
import p6 from "../../assets/icons/evaluation.png";
import p7 from "../../assets/icons/online-lesson.png";
import Particles from "@/components/Particles";
import ru from "@/i18n/ru.json";
import en from "@/i18n/en.json";

type DataProps = {
  title: string;
  desc: string;
};
const texts = {
  ru,
  en,
};

type Props = {
  lang: "ru" | "en";
};

function Data({ title, desc }: DataProps) {
  return (
    <li>
      <p>
        <h3>{title}</h3>
        {desc}
      </p>
    </li>
  );
}
const icons = [p0, p1, p2, p3, p4, p5, p6, p7];

export default function Reasons({ lang }: Props) {
  const t = texts[lang].reasonsPage;
  return (
    <div id="#reasons">
      <Particles
        particleCount={150}
        particleSpread={5}
        speed={0.035}
        moveParticlesOnHover={true}
        alphaParticles={false}
      />
      <h1>{t.title}</h1>
      <p className={styles.all}>{t.subtitle}</p>
      <div className={styles.box}>
        {t.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={icons[index]} alt="" />
            <Data title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
      <Link to="/" className={styles.more}>
        {t.back}
      </Link>
    </div>
  );
}
