import Skills from "../data/skills.json";

function skills() {
    return(
        <section id = "skills">
            <h2>Hbailidades</h2>

            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default skills;