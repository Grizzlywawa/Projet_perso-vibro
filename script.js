console.log("Script fonctionne");

function runOnScroll() {
    console.log("Coucou")
    if (document.body.scrollTop > 50) {
     let nav = document.getElementsByID("navbar")[0];
      nav.style.background = "black";
      }
 }; 
window.addEventListener("scroll", runOnScroll);


const slide = ["assets/images/vibro-slider-1.jpg", "assets/images/vibro-slider-3.jpg", "assets/images/vibro-slider-4.jpg", "assets/images/vibro-slider-5.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}