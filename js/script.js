var menuIcon = document.getElementById("i-menu");
var menuContainer = document.getElementById("show-container-menu");
var andoni = document.getElementById("andoni");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var project1 = document.getElementById("project-1");

project1.onmousemove = function() {
  var offset = $(this).offset();
  projectMove(offset);
}

function projectMove(offset){
  x = event.pageX;
  y = event.pageY;
  if(x<(514)){
    project1.style.transform = "perspective(1000px) rotateY("+(15-x*0.01)+"deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }else {
    project1.style.transform = "perspective(1000px) rotateY(-"+x*0.02+"deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }
}

project1.onmouseout = function(){
  project1.style.transform = "rotate(0) scale(1)";
  project1.style.boxShadow = "1px 1px 15px black";
}
window.onresize = function(){
  if(document.body.clientWidth > 650 && menuContainer.style.height > "0px"){
    menuContainer.style.transitionDuration = "0";
    menuContainer.style.height = "0";
    menuContainer.style.fontSize = "0";
    andoni.style.marginTop = "0";
    projects.style.marginTop = "0";
    contact.style.marginTop = "0";
    menuIcon.className = "fa fa-bars";
  }
}
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
    andoni.style.marginTop = "2%";
    projects.style.marginTop = "2%";
    contact.style.marginTop = "2%";
    menuIcon.className = "fa fa-times";
  }
}
