console.log("Popup script loaded");
document.getElementById('beepButton').addEventListener('click', function() {
    console.log("Button presses")
    var audio = new Audio('beep.mp3'); // Make sure you have a file named beep.mp3 in the same directory as your popup.html
    audio.play();
  });