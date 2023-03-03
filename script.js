console.log("Script fonctionne");

function runOnScroll() {
    console.log("Coucou")
    if (document.body.scrollTop > 50) {
     let nav = document.getElementsByID("navbar")[0];
      nav.style.background = "black";
      }
 }; 
window.addEventListener("scroll", runOnScroll);