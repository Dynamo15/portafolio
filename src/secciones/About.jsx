
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="about">
      <h2>{t.about.title}</h2>
      <p>{t.about.description}</p>
    </section>
  );
};

export default About;
