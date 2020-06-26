// Global Variables

            // video elements
const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");

            // quote element
const phrase = document.getElementById('phrase');

            // projects section elements
const aboutTitle = document.getElementById('aboutTitle');
const projects = document.getElementById('projects');
const projectTitleWrapper = document.getElementById('projectTitleWrapper');
const mountains = document.getElementById('mountains');

            // individual project elements
const awesomeCo = document.querySelectorAll(".awesomeCo");
const drumSpace = document.querySelectorAll(".drumSpace");
const dataAnalytics = document.querySelectorAll(".dataAnalytics");
const styleGuide = document.querySelectorAll(".styleGuide");


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
    
    
    /**
     * Generates random quote based on a random number in the quotes array 
     */
    const generateQuote = () => {
        //create random number between 1 - 7 for quote selection
        let randNum = Math.floor( Math.random() * (quotes.length) );
        //select quote container span
        const quoteContainer = document.querySelector('#phrase span');
        // set html content of quote container
        quoteContainer.innerHTML = quotes[randNum];
    }; 

    generateQuote();


// Slide-in function for projects
// if the scroll position on page is near element, activate keyframe animation to slide in frame
// else, slide off screen

            // animation options
const rightAnimation = "move-right 1.5s ease-in-out forwards";
const leftAnimation = "move-left 1.5s ease-in-out forwards";
const rightAnimation2 = "move-right-two 1.5s ease-in-out forwards";
const leftAnimation2 = "move-left-two 1.5s ease-in-out forwards";
const moveRightBG = "move-right-mountains 1.5s ease-in-out forwards";
const moveLeftBG = "move-left-mountains 1.5s ease-in-out forwards";
const moveUpBG = "move-up-project-title 1s ease-in-out forwards";
const moveDownBG = "move-down-project-title 1s ease-in-out forwards";

// const distance = window.scrollY;


// slide function takes the current scroll value (position on page) and the element targeted, 
// and adds an animation

slide = (scrollValue, element, animationOne, animationTwo) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
            element.style.animation = animationOne;
        } else {
            element.style.animation = animationTwo;
    }
}

const slide2 = (scrollValue, el, animationOne, animationTwo) => {
    const distance = window.scrollY;
    if(distance >= scrollValue){
        el.forEach(element => {
            element.style.animation = animationOne;
        }); 
    } else {
        el.forEach(element => {
            element.style.animation = animationTwo;
        }); 
    }
}




//parallax slide animation for elements on page

window.addEventListener("scroll", function() {

    const mobile = 575;
    const tabletOrLarger = 900;

    // slide in projects on scroll
    if (window.innerWidth <= mobile) {
        slide(201, aboutTitle, leftAnimation2, rightAnimation2);
        slide(2100, projects, moveUpBG, moveDownBG);
        slide(2100, mountains, moveRightBG, moveLeftBG);    
        slide2(2600, awesomeCo, rightAnimation, leftAnimation);
        slide2(3250, drumSpace, leftAnimation2, rightAnimation2);
        slide2(3650, dataAnalytics, rightAnimation, leftAnimation);
        slide2(4050, styleGuide, leftAnimation2, rightAnimation2);
    } else if (window.innerWidth >= tabletOrLarger) {
        slide(201, aboutTitle, leftAnimation2, rightAnimation2);
        slide(2200, projects, moveUpBG, moveDownBG);
        slide(2200, mountains, moveRightBG, moveLeftBG);    
        slide2(2300, awesomeCo, rightAnimation, leftAnimation);
        slide2(2900, drumSpace, leftAnimation2, rightAnimation2);
        slide2(3200, dataAnalytics, rightAnimation, leftAnimation);
        slide2(3650, styleGuide, leftAnimation2, rightAnimation2);
    } 
});

