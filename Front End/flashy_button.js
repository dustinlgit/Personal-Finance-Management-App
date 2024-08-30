const flashy_button = document.getElementById(link-to-button);

function toggleFlash(){
    flashy_button.classList.toggle("flash");
}

setInterval(toggleFlash, 500);