import getData from './getData.js'


getData()




// other components

// menu for mobile
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuItems = document.querySelectorAll('#items');


openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add("mobileMenuVisible")
  
    document.body.style.overflow = 'hidden'
})


closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobileMenuVisible')
    document.body.style.overflow = 'visible'
})


mobileMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
          mobileMenu.classList.remove('mobileMenuVisible')

        document.body.style.overflow = 'visible'
    })
})



// cursor
const cursorRounded = document.getElementById("rounded");
const moveCursor = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;
    cursorRounded.style.transform = `translate3d(${mouseX - 7}px,${mouseY -12}px,0)`;
}

window.addEventListener('mousemove', moveCursor)







