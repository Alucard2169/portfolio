import addExperience from "./experienceComponent.js";
import addProject from "./projectComponent.js";
import skillsComponent from "./skillsComponent.js";


const getData = async () => {
    const res = await fetch("../data.json");
    const fullData = await res.json();


    const experience = fullData[0];
    const projects = fullData[1];
    const skills = fullData[2]

    addExperience(experience)

    addProject(projects)

    skillsComponent(skills)

}

export default getData;
