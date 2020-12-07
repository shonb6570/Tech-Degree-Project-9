
// landing page video play/pause function

window.onload = function() {
  //gather .video elements in a variable
  var vids = document.getElementsByClassName('video');
  //create an array to loop through 
  Array.from(vids).forEach((item) => {
    var nextVid = item.attributes['data-next'].value;
    item.addEventListener("ended", () => {
      //playVideo(nextVid);
      // play next video
      var nextVidId = document.getElementById(nextVid);
      console.log("next video start", nextVidId);
      nextVidId.muted = true;
      nextVidId.play();
      nextVidId.classList.add("video");
      nextVidId.classList.remove('paused');
      // pause current video
      item.classList.remove("video");
      item.classList.add("paused");
      console.log("previous vid paused", item);
    });
  });
};     



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
    
 // quote element
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
// const rightAnimation = "move-right 1.5s ease-in-out forwards";
// const leftAnimation = "move-left 1.5s ease-in-out forwards";
// const rightAnimation2 = "move-right-two 1.5s ease-in-out forwards";
// const leftAnimation2 = "move-left-two 1.5s ease-in-out forwards";
// const moveRightBG = "move-right-mountains 1.5s ease-in-out forwards";
// const moveLeftBG = "move-left-mountains 1.5s ease-in-out forwards";
// const moveUpBG = "move-up-project-title 1s ease-in-out forwards";
// const moveDownBG = "move-down-project-title 1s ease-in-out forwards";
// const appear = "appear 1s ease-in-out forwards";
// const hide = "hide .1s ease-in-out forwards";



//IntersectionObserver loads element animations when in view

let animationElement1;
let animationElement2;
let animationElement3;
let animationElement4;
let animationElement5;
let animationElement6;
let animationElement7;
let animationElement8;

let prevRatio = 0.0;

window.addEventListener("load", (event) => {
    
  animationElement1 = document.getElementById("graphicDesignSection");
  animationElement2 = document.getElementById("about");
  animationElement3 = document.getElementById("projectTitleWrapper");
  animationElement4 = document.getElementById("animateProjectContainer1");
  animationElement5 = document.getElementById("animateProjectContainer2");
  animationElement6 = document.getElementById("animateProjectContainer3");
  animationElement7 = document.getElementById("animateProjectContainer4");
  animationElement8 = document.getElementById("animateProjectContainer5");

  createObserver();
}, false);


function createObserver() {
    let observer;
  
    let options = {
      root: null,
      //margin of space above and below item before item is observed(before callback animation is fired)
      rootMargin: "300px",
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
    observer.observe(animationElement8);
  }


  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      let animateIn = entry.target.dataset.in;
      let animateOut = entry.target.dataset.out;
      if (entry.intersectionRatio === 1) {
        entry.target.firstElementChild.style.animation = animateIn;
      } else {
        entry.target.firstElementChild.style.animation = animateOut;
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }

  $('.auto-play').slick({
    mobileFirst:true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          }      
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          }      
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          }      
      }
  ]
 });
