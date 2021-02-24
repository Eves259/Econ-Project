var sound = document.getElementById("Groover");  //This sets the variable 'sound' equal to the id labeled 'Groover'

function play() { //This plays music and is used in the activateSound function to do so.
    sound.play();
}

function pause() { //This pauses music and is used in the activateSoundfunction to do this.
    sound.pause();
}

function activateSound() { //This function is linked to a button. When the button is pressed it plays music and when it is pressed again it pauses the music. It uses the play and pause functions to do this.
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}