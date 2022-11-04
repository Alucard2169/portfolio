const skillSection = document.getElementById('skillSection')


const skillsComponent = (skills) => {
    skills.forEach((skill) => {
        const skillText = document.createElement('span');
        skillText.classList.add('skill');

        skillText.textContent = `<> ${skill} </>`
        skillSection.appendChild(skillText)
    })
}

export default skillsComponent;