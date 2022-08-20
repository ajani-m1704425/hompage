let drop1 = document.querySelector(".profile_displayname_abbr");
let drop2 = document.querySelector(".profile_icon");
let circle_cancel = document.querySelector(".circle_closed");
const dropdown = document.querySelector(".profile_dropdown_container");
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