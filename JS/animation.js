const landingImage = document.querySelector(".landing .landing__image"),
    landingInfo = document.querySelector(".landing .landing__info"),
    galleryBoxes = document.querySelectorAll(".gallery .gallery__boxes .box"),
    articlesBoxes = document.querySelectorAll(".articles .articles__boxes .box"),
    sections = document.querySelectorAll(".section"),
    articles = document.querySelector(".articles"),
    skills = document.querySelector(".our-skills"),
    features = document.querySelector(".features"),
    statesSection = document.querySelector(".our-states"),
    states = document.querySelectorAll(".our-states .box h1.number"),
    skillsProgress = document.querySelectorAll(".our-skills .progress > div ");

// Create Timer

let date = new Date("Dec 31, 2022 23:59:49").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let def = date - dateNow;
    let days = Math.floor(def / (1000 * 60 * 60 * 24));
    let hours = Math.floor((def % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((def % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((def % (1000 * 60)) / 1000);
    document.querySelector(".latest-events .days .number").innerHTML = `${days}`;
    document.querySelector(
        ".latest-events .hours .number"
    ).innerHTML = `${hours}`;
    document.querySelector(".latest-events .minutes .number").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".latest-events .seconds .number").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

//Create States Goal And Set Skills Progress
let started = false;
const startCount = (e) => {
    let goal = e.dataset.gol;
    let count = setInterval(() => {
        e.innerHTML++;
        if (e.innerHTML === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};
window.onscroll = () => {
    if (statesSection.offsetTop >= window.scrollY) {
        if (!started) {
            states.forEach((ele) => startCount(ele));
        }
        started = true;
    }
    if (skills.offsetTop <= window.scrollY) {
        skillsProgress.forEach((item) => {
            item.style.width = item.dataset.progress;
        });
    }
};

//Gsap Animations
//landing
gsap.fromTo(landingImage, 2, { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
gsap.fromTo(landingInfo, 2, { opacity: 0, x: -300 }, { opacity: 1, x: 0 });