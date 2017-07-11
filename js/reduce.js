console.log("Reduce ES5");

var letras = ["h","o","l","a"];

console.log(letras.join(""));

var palabra = letras.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
	return valor_anterior_retornado + valor_actual;
});

console.log(palabra);

// h
// ho
// hol
// hola

var numeros = [20,1,23,1,5];

var suma = numeros.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
	return valor_anterior_retornado + valor_actual;
}, 5);

console.log(suma);

var sum = 0;

for (var i = 0; i < numeros.length; i++) {
	sum += numeros[i];
}

console.log(sum);