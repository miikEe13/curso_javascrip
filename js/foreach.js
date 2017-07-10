console.log("-------For each---------");

var n = [2,4,6,8];

n.forEach(function(elemento, index, arreglo){
	console.log(elemento);
	console.log(index);
	console.log(arreglo);
})

n.forEach(function(elemento, index, arreglo){
	arreglo[index]=Math.pow(elemento, 2)
})

console.log(n);