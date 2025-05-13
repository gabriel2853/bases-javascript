
//funciones  y funciones flecha

function saludar(){
  console.log("hola");
//   const numeros = [1,2,3];
//   console.log(numeros);
//   return numeros;
}

saludar();

var saludar = 1;
console.log(saludar);


const saludar2 = function(){
    console.log("Hola desde saludar2");
    
}

saludar2();


//funciones flecha

const saludar3 = () => {
    console.log("Hola desde saludar3");
}

saludar3(); 


const saludar4 = () => console.log("Hola desde saludar4");
saludar4();

function sumar(a,b){
    console.log(a+b);
}

//sumar(1,2);

const sumar2 = (a,b) => console.log(a+b);
sumar2(1,2);
