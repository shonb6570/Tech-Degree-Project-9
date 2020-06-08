// variables

const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");

const phrase = document.getElementById('phrase');

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

function playVideo(videoID){
    const videoElement = document.getElementById(videoID);
    videoElement.play();
    videoElement.classList.remove("paused"); 
}

function pause(id) {
    id.classList.remove("video");
    id.classList.add("paused");
}

function play(id) {
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