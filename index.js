let menu = document.querySelector(".mobile_navicon");
let mainNav = document.querySelector(".inside_main_nav")
menu.addEventListener('click',showmenu);


function showmenu(){
    if (mainNav.style.display == "none"){
        mainNav.style.display = "block"
    }
    else{
        mainNav.style.display = "none"
    }

}