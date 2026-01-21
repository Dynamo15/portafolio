import projects from "../data/projects.json";

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>

      {projects.map(project => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul>
            {project.tech.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <a href={project.url} target="_blank">
            Ver proyecto
          </a>
        </article>
      ))}
    </section>
  );
}

export default Projects
