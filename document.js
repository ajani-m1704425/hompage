let drop1 = document.querySelector(".profile_displayname_abbr");
let drop2 = document.querySelector(".profile_icon");
let menu = document.querySelector(".mobile_navicon");
const mainNav = document.querySelector(".inside_main_nav");
let circle_cancel = document.querySelector(".circle_closed");
const dropdown = document.querySelector(".profile_dropdown_container");
menu.addEventListener('click',showmenu);
drop1.addEventListener("click", showdropdown);
drop2.addEventListener("click", showdropdown);
circle_cancel.addEventListener("click", showdropdown);


function showdropdown(){
     if (dropdown.style.display == "none"){
        dropdown.style.display = "block"
    }
    else{
        dropdown.style.display = "none"
    }
}

function showmenu(){
    if (mainNav.style.display == "none"){
        mainNav.style.display = "block"
    }
    else{
        mainNav.style.display = "none"
    }

}


