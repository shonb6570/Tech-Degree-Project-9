// Global Variables

            // video elements
const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");

            // quote element
const phrase = document.getElementById('phrase');
            // nav brand
const navBrand = document.getElementById("nav-brand");

            // projects section elements
const aboutTitle = document.getElementById('aboutTitle');
const projects = document.getElementById('projects');
const projectTitleWrapper = document.getElementById('projectTitleWrapper');
const mountains = document.getElementById('mountains');

            // individual project elements
// const awesomeCo = document.querySelectorAll(".awesomeCo");
// const drumSpace = document.querySelectorAll(".drumSpace");
// const dataAnalytics = document.querySelectorAll(".dataAnalytics");
// const styleGuide = document.querySelectorAll(".styleGuide");
// const fsc2020 = document.querySelectorAll(".fsc2020");



const graphicDesignHeadline = document.getElementById("graphicDesignHeadline");




/**
 * Window onload play order for embedded videos
 */
// window.onload = function(){ 
//     vid1.addEventListener("ended", function(){ 
//         playVideo("vid2"); 
//         pause(vid1); // add display "none" to video div after end
//         play(vid2); // make the next video div visible
//     });
    
    
//     vid2.addEventListener("ended", function(){ 
//         playVideo("vid3"); 
//         pause(vid2);
//         play(vid3);
//     });
//     vid3.addEventListener("ended", function(){ 
//         playVideo("vid1"); 
//         pause(vid3);
//         play(vid1);
//     });    
// }
/**
 * Plays video based on ID of a video element
 */

// const playVideo = (videoID) => {
//     const videoElement = document.getElementById(videoID);
//     videoElement.muted = true;
//     videoElement.play();
//     videoElement.classList.remove("paused"); 
// }

// const pause = (id) => {
//     id.classList.remove("video");
//     id.classList.add("paused");
// }

// const play = (id) => {
//     id.classList.remove("paused");
//     id.classList.add("video");
// }

//Quotes (for landing/main page)

const quotes = [
    ['"The best things in life aren\'t things" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Linda Godeau'],
    ['"The unexamined life is not worth living" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Socrates'],
    ['"Live as if you were to die tomorrow. Learn as if you were to live forever" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Mahatma Gandhi'],
    ['"Doing nothing often leads to the very best of something" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Winnie the Pooh'],
    ['"Everything always seems impossible until it\'s done" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Nelson Mandela'],
    ['"The most beautiful experience we can have is the mysterious" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Albert Einstein'],
    ['"He who is not courageous enough to take risks will accomplish nothing in life" <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Muhammad Ali']
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
const appear = "appear 1s ease-in-out forwards";
const hide = "hide .1s ease-in-out forwards";

// const distance = window.scrollY;


// slide function takes the current scroll value (position on page) and the element targeted, 
// and adds an animation

// const animate = (scrollValue, element, animationOne, animationTwo) => {
//     const distance = window.scrollY;
//     if(distance >= scrollValue){
//             element.style.animation = animationOne;
//         } else {
//             element.style.animation = animationTwo;
//     }
// }

// const animate2 = (scrollValue, el, animationOne, animationTwo) => {
//     const distance = window.scrollY;
//     if(distance >= scrollValue){
//         el.forEach(element => {
//             element.style.animation = animationOne;
//         }); 
//     } else {
//         el.forEach(element => {
//             element.style.animation = animationTwo;
//         }); 
//     }
// }


//IntersectionObserver loads element animations when in view

let animationElement1;
let animationElement2;
let animationElement3;
let animationElement4;
let animationElement5;
let animationElement6;
let animationElement7;

let prevRatio = 0.0;

window.addEventListener("load", (event) => {
    
  animationElement1 = document.getElementById("graphicDesignSection");
  animationElement2 = document.getElementById("about");
  animationElement3 = document.getElementById("animateProjectContainer1");
  animationElement4 = document.getElementById("animateProjectContainer2");
  animationElement5 = document.getElementById("animateProjectContainer3");
  animationElement6 = document.getElementById("animateProjectContainer4");
  animationElement7 = document.getElementById("animateProjectContainer5");

  createObserver();
}, false);


function createObserver() {
    let observer;
  
    let options = {
      root: null,
      //margin of space above and below item before item is observed(before callback animation is fired)
      rootMargin: "400px 50px",
      threshold: [1]
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(animationElement1);
    observer.observe(animationElement2);
    observer.observe(animationElement3);
    observer.observe(animationElement4);
    observer.observe(animationElement5);
    observer.observe(animationElement6);
    observer.observe(animationElement7);
  }


  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        entry.target.firstElementChild.style.animation = leftAnimation2;
      } else {
        entry.target.firstElementChild.style.animation = rightAnimation2;
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }























//parallax slide animation for elements on page

// window.addEventListener("scroll", function() {

//     const mobile = 575;
//     const desktop = 1100;
//     animate(201, aboutTitle, leftAnimation2, rightAnimation2);
//     animate(950, navBrand, appear, hide);
//     animate(1700, graphicDesignHeadline, leftAnimation2, rightAnimation2);

    // slide in projects on scroll
    // if (window.innerWidth <= mobile) {

        // graphicDesignSectionContainer.style.display = "none";

        // animate(2700, projects, moveUpBG, moveDownBG);
        // animate(2700, mountains, moveRightBG, moveLeftBG);    
        // animate2(2900, awesomeCo, leftAnimation2, rightAnimation2);
        // animate2(3200, drumSpace, leftAnimation2, rightAnimation2);
        // animate2(3950, dataAnalytics, leftAnimation2, rightAnimation2);
        // animate2(4350, styleGuide, leftAnimation2, rightAnimation2);
        // animate2(4550, fsc2020, leftAnimation2, rightAnimation2);

//    } else if (window.innerWidth > mobile && window.innerWidth < desktop ) {

        // graphicDesignSectionContainer.style.display = "block";


//         animate(2700, projects, moveUpBG, moveDownBG);
//         animate(2700, mountains, moveRightBG, moveLeftBG);    
//         animate2(2900, awesomeCo, leftAnimation2, rightAnimation2);
//         animate2(3200, drumSpace, leftAnimation2, rightAnimation2);
//         animate2(3950, dataAnalytics, leftAnimation2, rightAnimation2);
//         animate2(4350, styleGuide, leftAnimation2, rightAnimation2);
//         animate2(4550, fsc2020, leftAnimation2, rightAnimation2);

//     } else {
//         animate(2700, projects, moveUpBG, moveDownBG);
//         animate(2700, mountains, moveRightBG, moveLeftBG);    
//         animate2(2900, awesomeCo, leftAnimation2, rightAnimation2);
//         animate2(3200, drumSpace, leftAnimation2, rightAnimation2);
//         animate2(3950, dataAnalytics, leftAnimation2, rightAnimation2);
//         animate2(4350, styleGuide, leftAnimation2, rightAnimation2);
//         animate2(4550, fsc2020, leftAnimation2, rightAnimation2);


//     } 
// });




