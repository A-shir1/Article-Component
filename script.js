var shareButt = document.querySelector(".share");
var display =  document.querySelectorAll("#select");

shareButt.addEventListener("click", function(){
    for(var i = 0; i <= display.length; i++)
        display[i].classList.toggle("disp");
});

