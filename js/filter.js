console.log("Filter");

var numeros = [10,2,3,5,9,20,22,16];

var pares = [];

for (var i = numeros.length ; i >= 0; i--) {
	var n = numeros[i];
	if (n % 2 == 0){
		pares.push(n)
	}
}

console.log(pares);

console.log("----------Ahora con Filter-----------");

var numeros_pares = numeros.filter(function(numero){
	return numero % 2 === 0;
});

console.log(numeros_pares);