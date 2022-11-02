// experience 

const experienceSection = document.getElementById('experience');

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


export default addExperience;