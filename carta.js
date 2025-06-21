const contenedor = document.querySelector("#AbrirContenedor");
const ElementoSuperior = document.querySelector(".superior");
const ElementoMensaje = document.querySelector(".mensaje");
const IconoCorazon = document.querySelector(".bx");
const h1 = document.querySelector("h1");
const p = document.querySelector(".psorpresa");

let abierto = false;

contenedor.addEventListener("click", () => {
  if (!abierto) {
    // Abrir Carta
    ElementoSuperior.classList.add("abrir-superior");

    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    IconoCorazon.classList.add("bx-rotada");

    setTimeout(() => {
      ElementoSuperior.style.zIndex = -1;
      ElementoMensaje.classList.add("abrir-mensaje");
    }, 700);

    abierto = true;
  } else {
    // Cerrar Carta
    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(() => {
      h1.style.transform = "translateY(0px)";
      p.style.transform = "translateY(0px)";

      ElementoSuperior.style.zIndex = 0;
      ElementoSuperior.classList.remove("abrir-superior");

      IconoCorazon.classList.remove("bx-rotada");
    }, 700);

    abierto = false;
  }
});
