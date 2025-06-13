function changeBackgroundColor(button, color) {
    
    document.body.style.backgroundColor = color;

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => btn.style.border = "none");

    button.style.border = "3px solid black";
}
