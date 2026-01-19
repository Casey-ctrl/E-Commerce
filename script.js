document.addEventListener("DomContentLoaded",()=>{
  const hambuger = document.querySelector(".hamburger");
const noHamBurger = document.querySelector("#close");
const navBar = document.querySelector("#navbar");
if(hambuger && navBar) {
  hambuger.addEventListener("click",()=>{
    navBar.classList.add("active");
  });
 
}
if(noHamBurger && navBar) {
    noHamBurger.addEventListener("click", ()=>{
      navBar.classList.remove("active");
    });
  }
  // IMG SLIDER
   var mainImg = document.getElementById("MainImg");
    var smallImg = document.getElementsByClassName("small-img");
    
   
      for(let i = 0; i < smallImg.length; i++){
        smallImg[i].onclick = ()=>{
          mainImg.src = smallImg[i].src;
        }
      }
});
