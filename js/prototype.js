console.log("Prototype");

function Tutor (nombre, apellido) {
	this.nombre = nombre;
	this.saludar = function() {
		console.log("Hola a todos soy: " + this.nombre)
	}
	if (typeof apellido !== "undefined") {
		this.nombre_completo = nombre + " "+ apellido;
	}
}

var miguel = new Tutor("Angel","Ramírez");

console.log(miguel.prototype);
console.log(miguel.__proto__.__proto__);

//miguel.edad = 18;
console.log(miguel.edad);

Tutor.prototype.edad = 26

var nathan = new Tutor("Hans");

nathan.tutorial = function() {
	console.log("Bienvenidos");
}

nathan.tutorial();

console.log(nathan.edad);
console.log(miguel.edad);