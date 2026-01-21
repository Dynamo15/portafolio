import profile from "../data/profile.json";

function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <h3>{profile.name}</h3>
      <p>{profile.role}</p>
      <p>{profile.description}</p>
      <span>{profile.location}</span>
    </section>
  );
}

export default About;
