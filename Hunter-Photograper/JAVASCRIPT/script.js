// menu-icon
function menu_open(x) {
   var a = document.getElementById("menu-list");
   if(a.style.display === "block"){
    a.style.display = "none";
   }else{
    a.style.display = "block";
   }
    x.classList.toggle("change");
  }
 
//  logo-text-hide
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("logo-text").style.display = "none";
    document.getElementById("nav-centre-text").style.display = "none";
  }else{
    document.getElementById("logo-text").style.display = "block";
    document.getElementById("nav-centre-text").style.display = "block";
  }
}

// protfolio-img hide or show
function img_hide_show(){
  const nodeList = document.querySelectorAll(".display-none");
    for (let i = 0; i < nodeList.length; i++) {
      if(nodeList[i].style.display === "block"){
        nodeList[i].style.display = "none";
      }else{
        nodeList[i].style.display = "block";
      }
    }
  }
function img_hide_show02(){
  const nodeList = document.querySelectorAll(".display-none-02");
    for (let i = 0; i < nodeList.length; i++) {
      if(nodeList[i].style.display === "block"){
        nodeList[i].style.display = "none";
      }else{
        nodeList[i].style.display = "block";
      }
    }
  }
function img_hide_show03(){
  const nodeList = document.querySelectorAll(".display-none-03");
    for (let i = 0; i < nodeList.length; i++) {
      if(nodeList[i].style.display === "block"){
        nodeList[i].style.display = "none";
      }else{
        nodeList[i].style.display = "block";
      }
    }
  }

  // testimonial
 
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  
  