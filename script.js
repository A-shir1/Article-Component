var shareButt = document.querySelector(".share");
var displaylg = document.querySelectorAll(".selectlg");
var displaysm = document.querySelectorAll(".selectsm");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 705px)')

// Check if the media query is true
if (mediaQuery.matches) {
    shareButt.addEventListener("click", function(){
        for(var i = 0; i <= displaysm.length; i++)
            displaysm[i].classList.toggle("disp");
    });
}
else{
    shareButt.addEventListener("click", function(){
        for(var i = 0; i <= displaylg   .length; i++)
            displaylg[i].classList.toggle("disp");
    });
}


