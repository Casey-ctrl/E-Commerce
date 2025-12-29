const hambuger = document.getElementsByClassName("hamburger")[0];
const noHamBurger = document.getElementById("close");
const navBar = document.getElementById("navbar");
if(hambuger) {
  hambuger.addEventListener("click",()=>{
    navBar.classList.add("active");
  });
 
}
if(noHamBurger) {
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
  