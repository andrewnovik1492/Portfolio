const arrow = document.querySelector('.box-arrow');
const asideBlock = document.querySelector('.intro-section__contacts');
const moonSvg = document.querySelector('.dark');
const sunSvg = document.querySelector('.light');
const buttonTheme = document.querySelector('.header__info button')

let currentTheme = 'light'

document.addEventListener('DOMContentLoaded', () => {
    moonSvg.style.display = 'none';
    showProgressBar()
})
arrow.addEventListener('click', showInfo)

function showInfo () {
        if (asideBlock.classList.contains('active')) {
            asideBlock.classList.remove('active')
        } else {asideBlock.classList.add('active')}
    }

buttonTheme.addEventListener('click', () => {
    console.log(currentTheme)
    if(currentTheme == 'light') {
        changeTheme()
        sunSvg.style.display = 'none';
        moonSvg.style.display = 'block';
        currentTheme = 'dark';
    } else {
        changeTheme()
        currentTheme = 'light';
        moonSvg.style.display = 'none';
        sunSvg.style.display = 'block'; 
    }
} )

function showProgressBar() {
    const progressBarList = document.querySelectorAll('.progress-block');
    progressBarList.forEach((item, index) => {
        const transition = `opacity 0.6s ${index*0.3}s ease`;
        item.style.transition = transition;
        item.style.opacity = 1;
    } )

}

function changeTheme() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((item) => {
        item.classList.toggle('blackTheme')
    })
}