// para añadir elementos al array 
nom.push("Luna Acosta");

//Borrar el ultimo elemento
nom.pop();

// agregar mas al inicio
nom.unshift("Luna");

//borrar el primer elemento del array
nom.shift();

//para ver el indice de un elemento dentro de un array
nom.indexOf("Flores");

// array con atributos
var info = [
  { nomb: "Yasmin", edad: 12 },
  { nomb: "Jordy", edad: 50 },
  { nomb: "Ana", edad: 35 },
];

// volver a mostrar los elementos del array
info.forEach(function (dato) {
  console.log(dato.nomb);
});

// Crear una alerta en pantalla
window.alert("Hola Mundo");

// funcion declarativa
function funcionDeclarativa(nomb) {
  console.log(`Hola buenas tardes, ${nomb}, esta es una funcion declarativa`);
}

// funcion de flecha
const funcionFlecha = (nomb) => {
  console.log(`Hola buenas tardes, ${nomb}, esta es una funcion flecha`);
};

// Crea funcion de expresion
const funcionExpresion = function (nomb) {
  console.log(`Hola buenas tardes, ${nomb}, esta es una funcion expresion`);
};

// Variable de alcanze global es un array con nom
var nom = ["Yasmin", "Jordy", "Ana"];

// mostrar los elementos del array nomb , con las funciones dada en los ejemplo anteriores para mostrar sus valores 
for (var i = 0; i < nom.length; i++) {
  fDeclarativa(nom[i]);
  fFlecha(nom[i]);
  fExpresion(nom[i]);
}


// se crea un variable de forma global el cual muestra un paramento el cual es la edad 
// verifiva la edad si es mayor a 48
var result = info.filter(function (dato) {
  return dato.edad > 48;
});

// se crea una variabl global para verficar los datos del array y muestras los nombres 
var resultado = info.map(function (dato) {
  return dato.nomb;
});

// Variable con alcanze global la cual contiene un objeto con nom y una funcion como elemento la cual puede imprimir el nomb y concatena el apellido
var alumno = {
  nomb: "Kevin",
  apell: "Acosta",

  mostrarDatos: function () {
    console.log(`${this.nomb}, ${this.apell}`);
  },
};

// Funcion la cual recibe 2 parametros los cuales son nomb y edad
// se crea una funcion el cual pasa dos parametros los cuales son la edad y nombre 
function Alumno(nombreA, edadB) {
  (this.nomb = nombreA), (this.edad = edadB);
}

// Variable con alcanze global y contiene un array vacio
var alumnos = [];

// Ciclo el cual se ejecuta 2 veces y solicita nomb y edad lo recibe mediante un promp y posteriormente lo guarda en el array con la funcion creada anteriormente
for (let i = 0; i < 2; i++) {
  var nomb = prompt("Escriba su nombre");
  var edad = prompt("Escriba su edad");
  alumnos.push(new Alumno(nomb, edad));
}

// Ciclo el cual recorre todos los elementos del array y a su vez imprime el valor de cada uno de ellos
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}