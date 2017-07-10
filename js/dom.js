


console.log("hola mundo");

var div;

div = document.getElementById("mi-div");

console.log(div);

div.classList.add("mi-clase");

var clase = document.getElementsByClassName("mi-clase");

console.log(clase);

var tag = document.getElementsByTagName("div");

console.log(tag);
//solo devuelve el primero aunque alla varios
var querySelector = document.querySelector(".hello");

console.log(querySelector);
//devuelve todos
var all = document.querySelectorAll("h1");

console.log(all);

function $(selector) {
	return document.querySelectorAll(selector);
}

var jquery = $("#selector");

console.log(jquery);