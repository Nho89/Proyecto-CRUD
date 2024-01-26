// Primero vamos a pedirle que me traiga los datos (Creamos una funcion asincrona para llamar a los datos)

//await sirve para pedirle al codigo que epere un momento (sirve para que espere a que le lleguen los datos)

async function getProducts() {

    const result = await fetch('http://localhost:3000/products'); //accede a la base de datos
    const data = await result.json(); //convierte los datos en json

    return(data)
}

//Ahora creamos otra funcion que nos lo imprima en pantalla. 
let plantsSection = document.getElementById("plantsList"); //Creamos una variable que accede al elemento section del HTML

//Ahora queremos que recorra el array de objetos (plantas)
async function printPlants() {
    const products = await getProducts();
    
    products.map(product => {plantsSection.innerHTML +=
        `<h3></h3>`
    })

}