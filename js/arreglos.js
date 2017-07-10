//undefined =ausencia de valor en js

console.log("Arreglos");

var arreglo = new Array();

var array = [1,"hola mundo",{},[1,2,3]];

console.log(array[1]);

console.log(array.length);

//agrega al final
array.push(8);

array.unshift("agrega al princpio del arreglo");

//remueve el primer elemennto del arreglo
array.shift()

//remueve el ultimo elemnento del arreglo
array.pop();

console.log(array);
console.log("--------------");
for (var i = 0; i<array.length; i++){
	console.log(array[i]);
 }

console.log("--------------");
 for (var i = array.length; i >= 0; i--) {
 	console.log(array[i]);
 }
console.log("--------------");

var j = array.length;
for (; j >= 0; j--){
	console.log(array[j]);
}