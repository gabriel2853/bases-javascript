

//variables primitivos son los datos que no se pueden dividir en partes más pequeñas
//string, number, boolean, null, undefined, symbol y bigint

//variables no primitivos son los datos que se pueden dividir en partes más pequeñas
//array, object, function, date, regex y set

// let nombre = "Gabriel"; //string
// console.log( nombre); 

// nombre = 'Gabriel Estrada';
// console.log( nombre); 

// nombre = 'Destino Final';
// console.log( nombre);

// console.log(typeof nombre); //string

// nombre[0] = 'G'; //nose puede cambiar el valor de una cadena de texto
// console.log(nombre); //Gabriel Estrada  
//los primitivos son inmutables, no se pueden cambiar
//los primitivos son copiados por valor, no por referencia


let edad = 25; //number
console.log( edad);
edad = 30;
console.log(typeof edad); //number
edad[ 0] = 2; //nose puede cambiar el valor de un numero
console.log( edad); //30

let personaje = {
    nombre: "Gabriel",
    edad: 25,
    habilidades: ["JavaScript", "Python", "Java"],
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
}

personaje.nombre = "Gabriel Estrada"; //se puede cambiar el valor de un objeto
console.log('nombre',personaje.nombre); //Gabriel Estrada
console.log('edad',personaje,edad);

