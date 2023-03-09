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
  "assets/images/Lelo-Soraya-Wave-1.webp",
  "assets/images/ROMP-Beat-1.webp",
  "assets/images/Vibromasseur-4.webp",
  "assets/images/Vibromasseur-7.webp",
];

const produit = ["Soraya", "Romp", "Svakom", "Cruise"];

const descr = [
  "Son design, sa motorisation et ses mouvements sont bien pensés en termes d'efficacité...",
  "Sa matière douce et saine, sa facilité d'utilisation et les sensations de plaisirs offertes...",
  "Sa matière très douce, son design incurvé avec sa tête plate et surtout sa grande puissance...",
  "Sa stimulation double est efficace, et plus particulièrement la partie succion qui nous a donné...",
];

const price = ["259€", "25€", "65€", "157€"];

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

