const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a)  Las pizzas que tengan un id impar.
const imprimirPizzasIdImpar = ()=>{
  pizzas.forEach(pizza =>{
    if(pizza.id % 2 != 0){
      // console.log(pizza);

      console.log(`\nPizza: \nID: ${pizza.id}\nNombre: ${pizza.nombre} \nPrecio: ${pizza.precio} \nCon los siguientes ingredientes:`);
      
      pizza.ingredientes.forEach(ingrediente =>{
        console.log(`--> ${ingrediente} \n`);
      })


    }
  })
}

console.log("\nImprimo pizzas que tengan un ID impar\n");
imprimirPizzasIdImpar()


// b) Responder: ¿Hay alguna pizza que valga menos de $600?
const buscarPizzaByPrice = (precio)=>{
  let contar = 0
  let resultado = false

  pizzas.forEach(pizza =>{
    if(pizza.precio < precio){
      resultado = true
      contar ++
    }
  })

  contar > 0 && resultado == true
    ? console.log(`Se encontraron ${contar} pizzas que valgan menos de $ ${precio}`)
    : console.log(`No se encontraron pizzas que valgan menos de $ ${precio}`)
}

console.log("\nBusco pizzas mas baratas de $600\n");
buscarPizzaByPrice(600)


// c) El nombre de cada pizza con su respectivo precio.
const imprimirPizzasPrecio = (precio)=>{
  pizzas.forEach(pizza =>{
    console.log(`La ${pizza.nombre} vale $ ${pizza.precio}`);
  })
}

console.log("\nImprimo el nombre de las pizzas con sus precio\n");
imprimirPizzasPrecio()


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
const imprimirIngredientesPizzas = ()=>{
  pizzas.forEach(pizza =>{
    console.log(`\nLa ${pizza.nombre} tiene estos ingredientes:\n`);
    
    pizza.ingredientes.forEach(ingrediente =>{
      console.log(`--> ${ingrediente} \n`);
    })
  })
}

console.log("\nImprimo los ingredientes de cada pizzas\n");
imprimirIngredientesPizzas()