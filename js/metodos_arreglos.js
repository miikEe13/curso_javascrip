console.log("Metodos para arreglos");

var arreglo = [2,5,1,10,20,25,44,80];

arreglo.sort();

console.log(arreglo);

ar = ["c","b","z","h","a"];

ar.sort();

console.log(ar);

console.log("sort ordena alfabeticamente");

function ordenacion(a,b){
	if (a > b) {
		return 1;
	} else if (b > a ) {
		return -1;
	} else if (a == b) {
		return 0;
	}
}
console.log("---Agregamos una funcion para ordenar ---");
var array = [9,8,90,550,100,1,3,9,100];
array.sort(ordenacion);
console.log(array)

function order(a, b) {
	return a -b;
}

console.log("-------------------");
var a =[10,80,90,0,1];

a.sort(order);

console.log(a);

a.reverse();

console.log(a);
console.log("-------convertir cadena a arreglo------------");

var b = "a,b,c,2";
console.log(b);

console.log(b.split(","));

console.log("-------convertir arreglo a cadena------------");
var c = ["m","i","g","u","e"];
console.log(c);

d = c.join("");
console.log(d);