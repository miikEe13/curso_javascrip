console.log("Declarar objetos con funciones");

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

miguel.saludar();

console.log(miguel.nombre_completo)

var sergio = new Tutor("miguel");

sergio.saludar();