// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creo el array
let amigos = []
//Creo la funcion ( uso el nombre ya dado )
function agregarAmigo() {
    // Capturo el valor del campo de entrada
    const amigoInput = document.getElementById("amigo"); 
    const amigoName = amigoInput.value.trim(); // Esto elimina espacios en blanco
  
    // Validador de la entrada
    if (amigoName === "") {
      alert("Por favor, inserte un nombre."); 
      return; 
    }
    // Agrego al array
    amigos.push(amigoName); 
  
    // Limpiar el campo de entrada
    amigoInput.value = ""; 
  }

function mostrarAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("amigos"); 
    // También puedes usar: const listaAmigos = document.querySelector("#listaAmigos");
  
    // Limpiar la lista existente
    listaAmigos.innerHTML = ""; 
  
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
      // Crear elemento de lista
      const li = document.createElement("li"); 
      li.textContent = amigos[i]; 
  
      // Agregar elemento a la lista
      listaAmigos.appendChild(li); 
    }
  }

function sortearAmigo() {
    // Valido que existan datos ingresados
    if (amigos.length === 0) {
      alert("Agrega amigos a la lista para poder sortear.");
      return;
    }
  
    //Indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Aqui el numero sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Amigo secreto: ${amigoSorteado}`;
  }