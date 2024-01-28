// Primero vamos a pedirle que me traiga los datos (Creamos una funcion asincrona para llamar a los datos)

// await sirve para pedirle al código que espere un momento (sirve para que espere a que le lleguen los datos)

async function getProducts() {
    const result = await fetch("http://localhost:3000/products"); // accede a la base de datos
    const data = await result.json(); // convierte los datos en json
    return data;
  }
  
  // Ahora creamos otra función que nos lo imprima en pantalla.
  let plantsSection = document.getElementById("plantsList"); // Creamos una variable que accede al elemento section del HTML
  
  // Ahora queremos que recorra el array de objetos (plantas)
  async function printPlants() {
    const products = await getProducts();
  
    products.map((product) => {
      const productElement = document.createElement("tr");
      productElement.innerHTML = `
        <td>${product.name}</td>
        <td>${product.biome}</td>
        <td>${product.duration}</td>
      `;
      plantsSection.appendChild(productElement);
    });
  }
  
  const plantForm = document.getElementById("plantForm");
  plantForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const plantName = document.getElementById("plantName").value;
    const plantBiome = document.getElementById("plantBiome").value;
    const plantDuration = document.getElementById("plantDuration").value;
  
    const newProduct = {
      name: plantName,
      biome: plantBiome,
      duration: plantDuration,
    };
  
    const result = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (result.ok) {
      const newProductResponse = await result.json();
      const newProductElement = document.createElement("tr");
      newProductElement.innerHTML = `
        <td>${newProductResponse.name}</td>
        <td>${newProductResponse.biome}</td>
        <td>${newProductResponse.duration}</td>
      `;
    } else {
      alert("Error adding plant");
    }
  });
  document.getElementById('plantForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const plantName = document.getElementById('plantName').value;
    const plantBiome = document.getElementById('plantBiome').value;
    const plantDuration = document.getElementById('plantDuration').value;

    const table = document.querySelector('table.table');
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell();
    const biomeCell = newRow.insertCell();
    const durationCell = newRow.insertCell();
    const idCell = newRow.insertCell();

    nameCell.textContent = plantName;
    biomeCell.textContent = plantBiome;
    durationCell.textContent = plantDuration + ' años';
    idCell.textContent = generateId(); // Genera un ID único para cada planta
});
  // Crear una función para eliminar objetos

async function deletePlant(plantId) {
    const result = await fetch(`http://localhost:3000/products/${plantId}`, {
        method: "DELETE",
    });

    if (result.ok) {
        alert("Plant deleted successfully");
        const plantElement = document.getElementById(`plant_${plantId}`);
        plantElement.remove();
    } else {
        alert("Error deleting plant");
    }
    console.log(plantId)
}
