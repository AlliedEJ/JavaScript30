function playSound (e) {
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`) //Use template literal to pull the keyCode from the event. Example of using querySelector to find an audio element with a an associated data-.
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)  
    if(!sound) return;
    sound.currentTime = 0; //Allow for quick succession pushes of the keys
    sound.play();
    key.classList.add(`playing`);
    // setTimeout(()=>{
    //   key.classList.remove(`playing`);
    // }, 200);
  }
function removeTransition (e) {
    if(e.propertyName !== `transform`) return;
    console.log(e);
    console.log(this);
    this.classList.remove(`playing`);
  }
const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
window.addEventListener(`keydown`, playSound);