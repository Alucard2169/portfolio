const experienceSection = document.getElementById('experience');
const projectSection = document.getElementById('project');
const allProjectButton = document.getElementById('moreProjects')
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuItems = document.querySelectorAll('#items');

openMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
  
    document.body.style.overflow = 'hidden'
})


closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = 'visible'
})


mobileMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.style.display = 'none';

        document.body.style.overflow = 'visible'
    })
})





const addExperience = (id,head,link,time,para) => {
    const experColumn = document.createElement('div');
    const experHead = document.createElement('h4');
    const experLinkIcon = document.createElement('i');
    const experLink = document.createElement('a');
    const experTime = document.createElement('span');
    const experPara = document.createElement('p');
    const linkIcon = document.createElement('img');
 



    experColumn.setAttribute('id',id)
    experLink.textContent = head;
    experLink.href = link;
    experLink.setAttribute('target', '_blank');
    experTime.textContent = time;
    experPara.textContent = para;
    linkIcon.classList.add('link');
    linkIcon.src = './assets/icons/link_icon.svg';

    experHead.appendChild(linkIcon)


    experColumn.classList.add('exper');
    experHead.classList.add('Head');
    experTime.classList.add('Time');
    experPara.classList.add('About');


    experLink.appendChild(experLinkIcon)
    experHead.appendChild(experLink);
    experColumn.appendChild(experHead);
    experColumn.appendChild(experTime);
    experColumn.appendChild(experPara)


    experienceSection.appendChild(experColumn)

}

const addProject = (id,image,nameProject,githubLink,live,about,technologies) => {
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

}




const getData = async () => {
    const res = await fetch("../data.json");
    const fullData = await res.json();
    const experience = fullData[0];


    experience.forEach((exp) => {
       const { id, companyName, link, time, about} = exp;

        addExperience(id,companyName,link,time,about)
    })

}

getData()



let preview = true;

const getProjects = async (preview) => {
    const mode = preview;
    const res = await fetch("../data.json");
    const fullData = await res.json();

    const previewProjects = fullData[1];
    const allProjects = fullData[2];

    if (mode === true) {
         previewProjects.forEach((pro) => {
        const { id, image, nameProject, githubLink, live, about, technologies } = pro;

        addProject(id,image,nameProject,githubLink,live,about,technologies)
    })
    }
    else {
        allProjects.forEach((pro) => {
        const { id, image, nameProject, githubLink, live, about, technologies } = pro;

        addProject(id,image,nameProject,githubLink,live,about,technologies)
    })
    }
}

getProjects(preview)

allProjectButton.addEventListener('click', () => {
    projectSection.innerHTML = ''
    preview = false;
    getProjects(preview)
    allProjectButton.style.display = 'none'
})




// cursor
const cursorRounded = document.getElementById("rounded");
const moveCursor = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;
    cursorRounded.style.transform = `translate3d(${mouseX - 7}px,${mouseY -12}px,0)`;
}

window.addEventListener('mousemove', moveCursor)


// navbar color change

const destopNav = document.getElementById('desktopNav')
window.addEventListener('scroll', (e) => {

    if (scrollY > 570) {
        destopNav.classList.add('light')
    }
    else {
        destopNav.classList.remove('light')
    }
})


