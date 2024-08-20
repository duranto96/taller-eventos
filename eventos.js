// Obtener el elemento div por su ID
const miDiv = document.getElementById("miDiv");

// Agregar el manejador de eventos para el click
miDiv.addEventListener("click", function () {
  alert("Hola! Soy el div");
});

// Solución para que no se ejecute el onclick
const miBtn = document.getElementById("miBtn");
miBtn.addEventListener("click", function (event) {
  // Detener la propagación para que no se ejecute el onclick
  event.stopPropagation();
});
