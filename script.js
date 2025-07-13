const d = document;
const $cuadricula = d.querySelector("[data-cuadricula]");

let mouseover = (e) => {
  if (e.target.classList.contains("grilla")) {
    e.target.classList.add("bg-hover");
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
};

d.addEventListener("DOMContentLoaded", app);
