console.log("Script fonctionne");

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.style.left = "0";
  document.body.classList.add("lock_scroll");
}

function closeNav() {
  sidenav.style.left = "";
  document.body.classList.remove("lock_scroll")
}

const slide = [
  "assets/images/vibro-slider-1.jpg",
  "assets/images/vibro-slider-3.jpg",
  "assets/images/vibro-slider-4.jpg",
  "assets/images/vibro-slider-5.jpg",
];

const produit = ["Produit1", "Produit2", "Produit3", "Produit4"];

const descr = [
  "présentation produits1, matière1, moteur1, vitesse1, rechargeable1 ,origine1",
  "présentation produits2, matière2, moteur2, vitesse2, rechargeable2, origine2",
  "présentation produits3, matière3, moteur3, vitesse3, rechargeable3, origine3",
  "présentation produits4, matière4, moteur4, vitesse4, rechargeable4, origine4",
];

const price = ["Prix1", "Prix2", "Prix3", "Prix4"];

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];

  if (numero < 0) numero = produit.length - 1;
  if (numero > produit.length - 1) numero = 0;
  document.getElementById("produit").innerHTML = produit[numero];

  if (numero < 0) numero = descr.length - 1;
  if (numero > descr.length - 1) numero = 0;
  document.getElementById("descr").innerHTML = descr[numero];

  if (numero < 0) numero = descr.length - 1;
  if (numero > descr.length - 1) numero = 0;
  document.getElementById("descr").innerHTML = descr[numero];

  if (numero < 0) numero = price.length - 1;
  if (numero > price.length - 1) numero = 0;
  document.getElementById("price").innerHTML = price[numero];
}

