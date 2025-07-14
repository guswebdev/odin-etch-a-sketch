const d = document;
let tamaño = "";
const $cuadricula = d.querySelector("[data-cuadricula]");
const $btnGrilla = d.querySelector("[data-generar-grilla]");

let crearCuadricula = (tamaño = 16) => {
  for (let i = 0; i < tamaño * tamaño; i++) {
    let grilla = d.createElement("div");
    grilla.className = "grilla";
    let divisionGrilla = 512 / tamaño;
    grilla.style.flexBasis = `${divisionGrilla}px`;
    $cuadricula.appendChild(grilla);
  }
};

let generarGrilla = () => {
  let tamañoCorrecto = true;

  while (tamañoCorrecto) {
    tamaño = prompt("Ingrese el tamaño de la grilla (1-100): ");
    if (tamaño > 0 && tamaño <= 100) {
      tamañoCorrecto = false;
    }
  }

  console.log(tamaño);
  $cuadricula.innerHTML = "";
  crearCuadricula(tamaño);
};

let mouseover = (e) => {
  if (e.target.classList.contains("grilla")) {
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  }
};

let click = (e) => {
  if (e.target.classList.contains("btn-grilla")) {
    generarGrilla();
  }
};

let app = () => {
  console.log($cuadricula);
  for (let i = 0; i < 16 * 16; i++) {
    let grilla = d.createElement("div");
    grilla.className = "grilla";
    $cuadricula.appendChild(grilla);
  }

  d.addEventListener("mouseover", mouseover);
  d.addEventListener("click", click);
};

d.addEventListener("DOMContentLoaded", app);
