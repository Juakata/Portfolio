var menuIcon = document.getElementById("i-menu");
var menuContainer = document.getElementById("show-container-menu");
var andoni = document.getElementById("andoni");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");

menuIcon.onclick = function(){
  if(menuContainer.style.height > "0px"){
    menuContainer.style.height = "0";
    menuContainer.style.fontSize = "0";
    andoni.style.marginTop = "0";
    projects.style.marginTop = "0";
    contact.style.marginTop = "0";
    menuIcon.className = "fa fa-bars";
  }else{
    menuContainer.style.height = "140px";
    menuContainer.style.fontSize = "25px";
    andoni.style.marginTop = "1.5%";
    projects.style.marginTop = "1.5%";
    contact.style.marginTop = "1.5%";
    menuIcon.className = "fa fa-times";
  }
}
