window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      revealSecondHTML();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();
};

function reveal() {
  document.querySelector(".merrywrap").style.backgroundColor = "transparent";
}

function revealSecondHTML() {
  // Obtener la ruta del archivo HTML que quieres cargar
  const htmlFilePath = "./flores.html";
  const cssFilePath = "./styleFlower.css";

  // Crear un elemento link para cargar los estilos CSS
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFilePath;

  // Escuchar el evento load para saber cuándo se han cargado los estilos
  linkElement.onload = function () {
    // Usar fetch para obtener el contenido del archivo HTML
    fetch(htmlFilePath)
      .then((response) => response.text())
      .then((html) => {
        // Reemplazar el contenido del body con el HTML del archivo cargado
        document.body.innerHTML = html;
      });

    // Eliminar el container para mostrar el nuevo
    document.body.classList.remove("container");
  };

  // Agregar el elemento link al head del documento
  document.head.appendChild(linkElement);
}
