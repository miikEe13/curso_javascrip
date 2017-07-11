console.log("Funciones")


function suma(a, b){
	//codigo a ejecutar
	var b = b || 0; 
	return a+b;
}

console.log(suma(2,3));

var resultado = suma(10, 7);

console.log(resultado);



var funcion_suma = suma(8);

res = ejecutar(funcion_suma);

function ejecutar (funcion) {
	return funcion;
}

console.log(res);