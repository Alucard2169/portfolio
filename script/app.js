const nameHead = document.getElementById("name");
const navbar = document.getElementById('nav')
const skills = document.querySelectorAll('img')


//name
document.body.addEventListener('scroll', () => {
    console.log(document.body.scrollTop)
    if (document.body.scrollTop > 20) {
        nameHead.classList.remove('animate__fadeInUp');
        nameHead.classList.add('animate__bounceOutLeft');
    }
    else {
        nameHead.classList.remove('animate__bounceOutLeft')
        nameHead.classList.add('animate__bounceInRight')
    }
});


// navbar
document.body.addEventListener("scroll", () => {
    if (document.body.scrollTop > 650) {
        navbar.classList.add('pattern-cross-dots-md')
    }
    else {
        navbar.classList.remove('pattern-cross-dots-md')
    }
})


// skills
document.body.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300) {
        skills.forEach((skill) => {
            skill.classList.remove('animate__lightSpeedOutLeft')
            skill.classList.add('animate__lightSpeedInLeft')
        })
    }
    else {
        skills.forEach(skill => {
            skill.classList.remove('animate__lightSpeedInLeft')
            skill.classList.add('animate__lightSpeedOutLeft')
        })
    }
})



const addProject = (id,imgSrc,projectName,repoLink,liveLink) => {

const project = document.createElement('div');
const Pname = document.createElement('h3');
const imageContainer = document.createElement('div');
const imageCont = document.createElement('div');
const image = document.createElement('img');
const linkCont = document.createElement('div');
const link1 = document.createElement('a');
const link2 = document.createElement('a');

link1.textContent = "Repository";
link2.textContent = "Live Site"

project.classList.add('project');
Pname.classList.add('projectName');
Pname.classList.add('pattern-dots-sm');
imageContainer.classList.add('imageContainer');
imageContainer.classList.add('pattern-dots-md');
imageCont.classList.add('image');
image.classList.add('projectImage');
linkCont.classList.add('links');
link1.classList.add('repo');
link2.classList.add('live');
    
imageContainer.appendChild(imageCont);
imageCont.appendChild(image);
linkCont.appendChild(link1);
linkCont.appendChild(link2);

project.appendChild(Pname);
project.appendChild(imageContainer);
project.appendChild(linkCont);

    project.setAttribute('id',id)
    image.src = imgSrc;
    link1.href = repoLink;
    link2.href = liveLink;
    Pname.textContent = projectName;

    link1.setAttribute('target', '_blank')
    link2.setAttribute('target','_blank')

const projects = document.getElementById('allProjects');
projects.appendChild(project)
}


const collectData = async () => {
    try {
        const res = await fetch('../projects.json');
        const data = await res.json();
        console.log(data)

        data.forEach((project) => {
            const {id,image, nameProject, githubLink, live } = project;
            addProject(id,image,nameProject,githubLink,live)
        })
    }
    catch (err) {
        console.log(err)
}
}
    
collectData()


