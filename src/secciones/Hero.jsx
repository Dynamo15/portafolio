import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useContext(LanguageContext);

  return(
    <section id = "hero">
      <h1>{t.hero.title}</h1>
      <p>{t.herosubtitle}</p>
      <button>{t.hero.cta}</button>
    </section>
  );
};


export default Hero;

