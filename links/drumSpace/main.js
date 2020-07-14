const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");
const keys = document.querySelectorAll(".key");

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; //stops the function from running on keys which have no assigned audio.
    audio.currentTime = 0; //resets sound back to start every time button is pushed (allows multiple, fast plays of audio)
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it is not a transform
    this.classList.remove("playing");
};

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);    

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