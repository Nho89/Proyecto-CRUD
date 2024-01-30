const formulary = document.getElementById("plantForm");

function validar() {
  const nombreInput = document.getElementById('plantName');
  const biomeInput = document.getElementById('plantBiome');
  const durationInput = document.getElementById('plantDuration');
  const soloNumeros = /^[0-9]+$/;

  if (nombreInput.value === "") {
    alert("Nombre no puede estar vacio");
    return false;
  }
  else if (biomeInput.value === "") {
    alert("Biome no puede estar vacio");
    return false;
  }
  else if (durationInput.value === "") {
    alert("Duration no puede estar vacio");
    return false;
  }
  else {
    return true;
  }
}


// Función asincrona para obtener los datos de las plantas.

async function getPlants() {
  const result = await fetch("http://localhost:3000/products");
  const plants = await result.json();
  return plants;
}

// Función para manejar el envío del formulario
function enviarForm(event) {

  const name = document.getElementById("plantName").value;
  
  const biome = document.getElementById("plantBiome").value;
  const duration = document.getElementById("plantDuration").value;

  const plant = { name, biome, duration };

  // Envía una solicitud HTTP POST, para crear una nueva planta
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plant),
  })
    .then((result) => result.json())//maneja la respuesta del servidor después de realizar una solicitud POST al servidor.
    .then((createdPlant) => {
      plants.push(createdPlant);//utilizando el método push añade los datos de la nueva planta al array pants.
      
      // Vuelve a mostrar los datos de las plantas en la tabla
      printPlants();
    });
}

// Función para mostrar los datos de las plantas en la tabla, se van añadiendo debajo de las cabeceras como hijos.
function printPlants() {
  getPlants().then((plants) => {
    const tableBody = document.querySelector(".table tbody");
    tableBody.innerHTML = "";

    plants.map((plant) => {
      const row = document.createElement("tr");

      const namePlant = document.createElement("td");
      namePlant.textContent = plant.name;
      row.appendChild(namePlant);

      const biomePlant = document.createElement("td");
      biomePlant.textContent = plant.biome;
      row.appendChild(biomePlant);

      const durationPlant = document.createElement("td");
      durationPlant.textContent = plant.duration;
      row.appendChild(durationPlant);

      const actionPlant = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editPlant(plant));
      actionPlant.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deletePlant(plant.id));
      actionPlant.appendChild(deleteButton);

      row.appendChild(actionPlant);
      tableBody.appendChild(row);
    });
  });
}

// Función para editar una planta
async function editPlant(plant) {
  const newName = document.getElementById("plantName").value;
  const newBiome = document.getElementById("plantBiome").value;
  const newDuration = document.getElementById("plantDuration").value;

  plant.name = newName;
  plant.biome = newBiome;
  plant.duration = newDuration;

  await fetch(`http://localhost:3000/products/${plant.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plant),
  })

  const plants = await getPlants();

  printPlants(plants);
}

// Función para eliminar una planta, envía una petición Delete del CRUD al servidor con el id  de la planta a borrar.
async function deletePlant(id) {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });

  // Después de eliminar la planta, actualiza la lista.
  printPlants();
}



// cuando el usuario envía el formulario, se ejecutará la función enviarForm
const form = document.getElementById("plantForm");
form.addEventListener("submit", enviarForm);

printPlants();
