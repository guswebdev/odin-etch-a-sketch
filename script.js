const d = document;

class Grilla {
  tamaño = 16;
  width;
  height;

  get tamaño() {
    return this.tamaño;
  }
  set tamaño(nuevoTamaño) {
    this.tamaño = nuevoTamaño;
  }
  get width() {
    return this.width;
  }
  set width(nuevoWidth) {
    this.tamaño = nuevoWidth;
  }
  get height() {
    return this.height;
  }
  set tamaño(nuevoHeight) {
    this.tamaño = nuevoHeight;
  }
}
class Display {
  $cuadricula = d.querySelector("[data-cuadricula]");
  $btnGrilla = d.querySelector("[data-generar-grilla]");
  $mensajeTamaño = d.querySelector("[data-tamaño]");
  $inputTamaño = d.getElementById("tamanio");
  $templateCelda = d.getElementById("template-grilla").content;
  $fragment = d.createDocumentFragment();

  crearCuadricula() {
    for (let i = 0; i < grilla.tamaño * grilla.tamaño; i++) {
      let clone = this.$templateCelda.cloneNode(true);
      this.$fragment.appendChild(clone);
    }
    this.$cuadricula.appendChild(this.$fragment);
    this.actualizarDatos(this.$mensajeTamaño, grilla.tamaño);
  }

  limpiarCuadricula() {
    this.$cuadricula.innerHTML = "";
  }

  actualizarDatos(nodo, dato) {
    nodo.textContent = "";
    nodo.textContent = dato;
  }

  mostrarMensajeValidacion() {
    const $mensajeValidacion = d.createElement("span");
    $mensajeValidacion.textContent = "Valor Incorrecto, Intente de nuevo";
    this.$inputTamaño.parentElement.appendChild($mensajeValidacion);
  }
}
class Controlador {
  guardarDimensionesGrilla() {
    grilla.width = getComputedStyle(display.$cuadricula).width;
    grilla.height = getComputedStyle(display.$cuadricula).height;
  }

  crearAreaCuadricula() {
    display.$cuadricula.style.gridTemplateColumns = `repeat(auto-fill, minmax(${
      grilla.width.slice(0, -2) / grilla.tamaño
    }px, 1fr))`;

    display.$cuadricula.style.gridTemplateRows = `repeat(auto-fill, minmax(${
      grilla.width.slice(0, -2) / grilla.tamaño
    }px, 1fr))`;
  }

  domContentLoaded() {
    controlador.guardarDimensionesGrilla();
    controlador.crearAreaCuadricula();
    display.crearCuadricula();
  }

  click(e) {
    if (e.target === display.$btnGrilla) {
      //Crear una validacion para numero entre 1 y 100
      if (display.$inputTamaño.value > 0 && display.$inputTamaño.value <= 100) {
        grilla.tamaño = display.$inputTamaño.value;
        display.limpiarCuadricula();
        controlador.crearAreaCuadricula();
        display.crearCuadricula();
      } else {
        console.log("ES UN NUMERO INCORRECTO");
        display.mostrarMensajeValidacion();
      }
    }
  }

  mouseover(e) {
    /*
    if (e.target.classList.contains("grilla")) {
      e.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )})`;
    }
    */
  }
}

const grilla = new Grilla();
const display = new Display();
const controlador = new Controlador();

d.addEventListener("DOMContentLoaded", controlador.domContentLoaded);
d.addEventListener("click", controlador.click);
d.addEventListener("mouseover", controlador.mouseover);
