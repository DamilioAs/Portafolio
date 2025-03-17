window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
  (navigator.userAgent || navigator.vendor || window.opera).toLowerCase()
));

document.body.style.backgroundColor = "black";  

if (window.isDevice) {
  console.log("Estás en un dispositivo móvil");
  document.body.style.fontSize = "18px"; 
} else {
  console.log("Estás en una computadora");
  document.body.style.fontSize = "24px"; // Ajusta el tamaño del texto para PC
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 3 + 2; // Tamaño entre 2px y 5px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 90}vw`;
  star.style.top = `${Math.random() * 90}vh`;

  document.body.appendChild(star);

  setTimeout(() => {
      star.remove();
  }, 3000); // Desaparece después de 3 segundos
}

setInterval(createStar, 200); // Crea una nueva estrella cada 200ms

document.addEventListener("DOMContentLoaded", function () {
  function animarNombre() {
      const nombre = document.querySelector(".nombre");
      const texto = nombre.dataset.texto; 
      nombre.innerHTML = ""; 

      let i = 0;
      while (i < texto.length) {
          let span = document.createElement("span");
          span.textContent = texto[i];
          span.classList.add("letra");
          span.style.animationDelay = `${i * 0.1}s`;
          nombre.appendChild(span);
          i++;
      }

      setTimeout(animarNombre, 3000);
  }

  document.querySelector(".nombre").dataset.texto = document.querySelector(".nombre").textContent;
  animarNombre();
});




document.addEventListener("DOMContentLoaded", function () {
  function animarDescripcion() {
    const descripcion = document.querySelector(".descrip h4");
    const texto = descripcion.dataset.texto; // Obtiene el texto original almacenado
    descripcion.innerHTML = ""; // Limpia el contenido para comenzar la animación

    let i = 0;
    while (i < texto.length) {
      let span = document.createElement("span");
      span.textContent = texto[i];
      span.classList.add("letra");
      // Ajusta el delay según necesites (aquí se usa 0.05s por carácter)
      span.style.animationDelay = `${i * 0.05}s`;
      descripcion.appendChild(span);
      i++;
    }

    // Vuelve a reiniciar la animación cada 5 segundos (puedes ajustar este tiempo)
    setTimeout(animarDescripcion, 15000);
  }

  // Guarda el texto original en un atributo data para usarlo en la animación
  const descripcionEl = document.querySelector(".descrip h4");
  descripcionEl.dataset.texto = descripcionEl.textContent;
  animarDescripcion();
});


document.addEventListener("DOMContentLoaded", function() {
  const slideshow = document.getElementById("slideshow");
  const images = ["fotos/imagen1.jpg", "fotos/imagen2.jpg", "fotos/imagen3.jpg"];
  let index = 0;
  
  setInterval(() => {
      index = (index + 1) % images.length;
      slideshow.src = images[index];
  }, 5000);
});
