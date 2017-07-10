/*console.log(a);
console.log(b);

var a = 1;
var b = "miguel";

console.log(a);
console.warn(a);
console.error(a);
console.info(a);

console.log(a+a);
----------------------------
UNDEFINED
console.log(undefined === null);
console.log(undefined == null)
------------------------
JAVA SCRIP NO ES ASINCRONO
function imprimir () {
	for (var i = 0; i < 8000; i++) {
		console.log("Imprimio");
	}
}

function presionoClick() {
	console.log("Click en boton");
}

imprimir();
------------------------------
El orden en que se llama los scripts importa

var nombre = "hola Miguel de app :D"; 
var apellido; 

*/
/*Sobreescritura dinamica de variablee */
/*
var num = 10;
var str = "texto";
var bol = true; 
var num = undefined;
var nul = null;

console.log(num);

num = str;

console.log(num);

bol = 10;

console.log(bol);
*/
/*variables en objeto*/
/*
var obj = {
	numero: 10,
	texto: "Nuevo texto",

	objHijo: {
		numero: 2,
		texto2: "nuevo" 
	}
}

console.log(obj);
*/
/*Pase por valor*/

/*var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);*/

//Pase por Referencia--> son afectadas ambas variables, ambas apuntan al mismo lado*/
/*
var c = {
	nombre: "Hans"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Nathan";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);

*/

// notacion punto

var persona = {
	nombre: "Miguel Angel",
	apellido: "Ramirez Medel",
	edad: 25,
	direccion: {
		pais: "mexico",
		ciudad: "Ciudad de mexico",
		edificio: {
			nombre: "edificio principal",
			telefono: "2222-3333"
		}
	}
}

console.log(persona.direccion.pais);

persona.direccion.zipcode = 15520;

console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.nombre);

var edificio = persona.direccion.edificio;

console.log(edificio);

edificio.nopiso = "8vo piso";

console.log(persona);

// notación corchete

console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);

var campo = "edad";
console.log(persona[campo]);

var campo = "edad2";

console.log(persona[campo]);
console.log(persona.edad2);