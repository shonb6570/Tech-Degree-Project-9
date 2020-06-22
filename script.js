// variables

const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");
const vid4 = document.getElementById("vid4");

const phrase = document.getElementById('phrase');

const aboutTitle = document.getElementById('aboutTitle');

const projects = document.getElementById('projects');
const projectTitleWrapper = document.getElementById('projectTitleWrapper');
const mountains = document.getElementById('mountains');

const awesomeCo = document.querySelectorAll(".awesomeCo");
const copyOverlay = document.querySelectorAll(".copyOverlayLeft");
const drumSpace = document.querySelectorAll(".drumSpace");


/**
 * Window onload play order for embedded videos
 */
window.onload = function(){ 
    vid1.addEventListener("ended", function(){ 
        playVideo("vid2"); 
        pause(vid1); // add display "none" to video div after end
        play(vid2); // make the next video div visible
    });
    
    
    vid2.addEventListener("ended", function(){ 
        playVideo("vid3"); 
        pause(vid2);
        play(vid3);
    });
    vid3.addEventListener("ended", function(){ 
        playVideo("vid1"); 
        pause(vid3);
        play(vid1);
    });    
}
/**
 * Plays video based on ID of a video element
 */

const playVideo = (videoID) => {
    const videoElement = document.getElementById(videoID);
    videoElement.play();
    videoElement.classList.remove("paused"); 
}

const pause = (id) => {
    id.classList.remove("video");
    id.classList.add("paused");
}

const play = (id) => {
    id.classList.remove("paused");
    id.classList.add("video");
}

//Quotes (for landing/main page)

const quotes = [
    ['"I think therefore I am" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - René Descartes'],
    ['"The unexamined life is not worth living" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Socrates'],
    ['"If you are going through hell, keep going" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Winston Churchill'],
    ['"Doing nothing often leads to the very best of something" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Winnie the Pooh'],
    ['"Never have so many been manipulated so much by so few" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Aldous Huxley'],
    ['"The most beautiful experience we can have is the mysterious" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Albert Einstein'],
    ['"The most beautiful experience we can have is the mysterious" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Albert Einstein']
    ];
    
    
    //Generate random quote function
    
    const generateQuote = () => {
        //create random number between 1 - 7 for quote selection
        let randNum = Math.floor( Math.random() * (quotes.length) );
        //select quote container span
        const quoteContainer = document.querySelector('#phrase span');
        quoteContainer.innerHTML = quotes[randNum];
    }; 

    generateQuote();


// Slide-in function for projects
// if the scroll position on page is near the AwesomeCo example gif, activate keyframe animation to slide in
// else, slide off screen if scroll position is above the project

const rightAnimation = "move-right 1.5s ease-in-out forwards";
const leftAnimation = "move-left 1.5s ease-in-out forwards";
const rightAnimation2 = "move-right-two 1.5s ease-in-out forwards";
const leftAnimation2 = "move-left-two 1.5s ease-in-out forwards";
const moveRightBG = "move-right-mountains 1.5s ease-in-out forwards";
const moveUpBG = "move-up-project-title 1s ease-in-out forwards";

const distance = window.scrollY;


// slide function takes the current scroll value (position on page) and the element targeted, 
// and adds an animation

// const slide = (scrollValue, el, animationName) => {
//     if(distance >= scrollValue){
//         el.forEach(element => {
//             element.style.animation = animationName;
//         });
//     }
// }


const moveRight = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
        el.forEach(element => {
            element.style.animation = rightAnimation;
        });
    }
}

const moveRightTwo = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance <= scrollValue){
        el.forEach(element => {
            element.style.animation = rightAnimation2;
        });
    }
}

const moveLeft = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance <= scrollValue){
        el.forEach(element => {
            element.style.animation = leftAnimation;
        });
    }
}

const moveLeftTwo = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
        el.forEach(element => {
            element.style.animation = leftAnimation2;
        });
    }
}

const moveLeftBGElement = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
            el.style.animation = leftAnimation2;
    }
}

const moveRightBGElement = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance <= scrollValue){
            el.style.animation = rightAnimation2;
    }
}

const moveRightMountains = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
            el.style.animation = moveRightBG;
    }
}

const moveUpProjectTitle = (scrollValue, el) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
            el.style.animation = moveUpBG;
    }
}


//parallax animation for "Projects" heading and Mountains SVG

window.addEventListener("scroll", function() {
    // const distance = window.scrollY;
    // console.log(distance);
    // if(distance < 1115){
    //     projects.style.transform = `translateY(${distance *
    //     -.7}px)`;
    //     projectTitleWrapper.style.transform = `translateY(${distance * -1}px)`;
    // }
    // else if(distance < 1200){
    //     mountains.style.transform = `translateX(${distance *
    //     -1.5}px)`;
    // }
// slide in projects on scroll
    moveUpProjectTitle(801, projects);
    moveRightMountains(801, mountains);
    moveLeftBGElement(801, aboutTitle);
    moveRightBGElement(800, aboutTitle);   
    moveRight(2361, awesomeCo);
    moveLeft(2360, awesomeCo);
    moveLeftTwo(2851, drumSpace);
    moveRightTwo(2850, drumSpace);
});

