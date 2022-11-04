const projectSection = document.getElementById('project');

const addProject = (projects) => {
   
    projects.forEach((project) => {

        const { id, image, nameProject, githubLink, live, about, technologies } = project;

    const projectCard = document.createElement('div');
    const imageContainer = document.createElement('div');
    const projectImage = document.createElement('img');
    const projectName = document.createElement('h2');
    const projectAbout = document.createElement('p');
    const projectTechHead = document.createElement('span');
    const projectLinkCont = document.createElement('div');
    const pgithubLink = document.createElement('a');
    const liveLink = document.createElement('a');
    const projectTechCont = document.createElement('div');
    const info = document.createElement('div');
    const lower = document.createElement('div');


    pgithubLink.classList.add('link');
    liveLink.classList.add('link');
    projectAbout.classList.add('aboutProject');
    projectCard.classList.add('project');
    imageContainer.classList.add('imageContainer');
    projectImage.classList.add('projectImage');
    projectName.classList.add('projectName');
    projectTechHead.classList.add('techHead');
    projectTechCont.classList.add('techUsed')
    projectLinkCont.classList.add('projectLinks');
    info.classList.add('info')
    lower.classList.add("lower")

    info.appendChild(projectName)
    info.appendChild(projectAbout)
    lower.append(projectTechHead)
    lower.appendChild(projectTechCont)
    lower.appendChild(projectLinkCont)
    
    projectCard.setAttribute('id',id)
    projectTechHead.textContent = "Skills Used";
    projectImage.src = image;
    projectImage.alt = nameProject;
    projectName.textContent = nameProject;
    projectAbout.textContent = about;
    pgithubLink.href = githubLink;
    liveLink.href = live;

    pgithubLink.setAttribute('target',"_blank")
    liveLink.setAttribute('target',"_blank")

    pgithubLink.textContent = 'Repository'
    liveLink.textContent = 'Live'

    technologies.forEach((tech) => {
        const projectTech = document.createElement('span');
        projectTech.classList.add('tech');
        projectTech.textContent = `<${tech}/>`;
        projectTechCont.appendChild(projectTech)
    })


    imageContainer.appendChild(projectImage);
    projectCard.appendChild(imageContainer);
    projectCard.appendChild(info)
    projectLinkCont.appendChild(pgithubLink);
    projectLinkCont.appendChild(liveLink)
    projectCard.appendChild(lower)
    projectSection.appendChild(projectCard)
    })

}


export default addProject;
