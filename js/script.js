var menuIcon = document.getElementById("i-menu");
var menuContainer = document.getElementById("show-container-menu");

menuIcon.onclick = function(){
  if(menuContainer.style.height > "0px"){
    menuContainer.style.height = "0";
    menuContainer.style.fontSize = "0";
    menuIcon.className = "fa fa-bars";
  }else{
    menuContainer.style.height = "200px";
    menuContainer.style.fontSize = "30px";
    menuIcon.className = "fa fa-times";
  }
}
