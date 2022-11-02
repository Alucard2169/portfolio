import addExperience from "./experienceComponent.js";
import addProject from "./projectComponent.js";


const getData = async () => {
    const res = await fetch("../data.json");
    const fullData = await res.json();


    const experience = fullData[0];
    const allProjects = fullData[1];


    experience.forEach((exp) => {
       const { id, companyName, link, time, about} = exp;

        addExperience(id,companyName,link,time,about)
    })

     allProjects.forEach((pro) => {
        const { id, image, nameProject, githubLink, live, about, technologies } = pro;

        addProject(id,image,nameProject,githubLink,live,about,technologies)
    })


}

export default getData;