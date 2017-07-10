console.log("MAP ES5");

var n = [1,5,6,8];

//n.map(callback);

var cuadrados = [];

for (var i = n.length - 1; i >= 0; i--) {
	var numero = n[i];
	cuadrados.push(Math.pow(numero, 2));
}

console.log(cuadrados);

console.log("------- ahora con MAP -----");

cuadrado = n.map(function(elemento){
	return elemento * elemento;
});

console.log(cuadrado);