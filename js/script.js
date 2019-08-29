var menuIcon = document.getElementById("i-menu");
var menuContainer = document.getElementById("show-container-menu");
var andoni = document.getElementById("andoni");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var project1 = document.getElementById("project-1");
var project2 = document.getElementById("project-2");
var project3 = document.getElementById("project-3");
var project4 = document.getElementById("project-4");

project1.ontouchmove = function() {
  var offset = $(this).offset();
  x = offset.touches[0].clientX;
  y = offset.touches[0].clientY;
  width = window.getComputedStyle(project1).width;

  if(x<(parseInt(width)/2)){
    project1.style.transform = "perspective(1000px) rotateY(10deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }else {
    project1.style.transform = "perspective(1000px) rotateY(-10deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }
}
project1.ontouchend = function(){
  project1.style.transform = "rotate(0) scale(1)";
  project1.style.boxShadow = "1px 1px 15px black";
}

project1.onmousemove = function() {
  var offset = $(this).offset();
  x = event.pageX - offset.left;
  y = event.pageY;
  width = window.getComputedStyle(project1).width;

  if(x<(parseInt(width)/2)){
    project1.style.transform = "perspective(1000px) rotateY(10deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }else {
    project1.style.transform = "perspective(1000px) rotateY(-10deg) scale(1.1)";
    project1.style.boxShadow = "0px 0px 15px black";
  }
}
project2.onmousemove = function() {
  var offset = $(this).offset();
  x = event.pageX - offset.left;
  y = event.pageY;
  width = window.getComputedStyle(project1).width;

  if(x<(parseInt(width)/2)){
    project2.style.transform = "perspective(1000px) rotateY(10deg) scale(1.1)";
    project2.style.boxShadow = "0px 0px 15px black";
  }else {
    project2.style.transform = "perspective(1000px) rotateY(-10deg) scale(1.1)";
    project2.style.boxShadow = "0px 0px 15px black";
  }
}
project3.onmousemove = function() {
  var offset = $(this).offset();
  x = event.pageX - offset.left;
  y = event.pageY;
  width = window.getComputedStyle(project1).width;

  if(x<(parseInt(width)/2)){
    project3.style.transform = "perspective(1000px) rotateY(10deg) scale(1.1)";
    project3.style.boxShadow = "0px 0px 15px black";
  }else {
    project3.style.transform = "perspective(1000px) rotateY(-10deg) scale(1.1)";
    project3.style.boxShadow = "0px 0px 15px black";
  }
}
project4.onmousemove = function() {
  var offset = $(this).offset();
  x = event.pageX - offset.left;
  y = event.pageY;
  width = window.getComputedStyle(project1).width;

  if(x<(parseInt(width)/2)){
    project4.style.transform = "perspective(1000px) rotateY(10deg) scale(1.1)";
    project4.style.boxShadow = "0px 0px 15px black";
  }else {
    project4.style.transform = "perspective(1000px) rotateY(-10deg) scale(1.1)";
    project4.style.boxShadow = "0px 0px 15px black";
  }
}

project1.onmouseout = function(){
  project1.style.transform = "rotate(0) scale(1)";
  project1.style.boxShadow = "1px 1px 15px black";
}
project2.onmouseout = function(){
  project2.style.transform = "rotate(0) scale(1)";
  project2.style.boxShadow = "1px 1px 15px black";
}
project3.onmouseout = function(){
  project3.style.transform = "rotate(0) scale(1)";
  project3.style.boxShadow = "1px 1px 15px black";
}
project4.onmouseout = function(){
  project4.style.transform = "rotate(0) scale(1)";
  project4.style.boxShadow = "1px 1px 15px black";
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
    andoni.style.marginTop = "2.5%";
    projects.style.marginTop = "2.5%";
    contact.style.marginTop = "2.5%";
    menuIcon.className = "fa fa-times";

  }
}
