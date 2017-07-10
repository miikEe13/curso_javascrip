var a = 30;

function primeraFuncion() {

	var a = 20;
	console.log(a);
}


function segundaFuncion() {

	// var a = 20;
	console.log(a);
}

function terceraFuncion() {

	console.log(b);
}

//invocar funcion

primeraFuncion();

segundaFuncion();

terceraFuncion();

var b = 40;

function cuartaFuncion() {

}

var c = cuartaFuncion();

console.log(c);

//parametros

var apellido= "ramirez"; // variable esplicita

function imprimir (nombre, apellido) {
	console.log(nombre + " " + apellido);
}

imprimir("Angel", apellido); //variable anonima

imprimir("Angel");

imprimir();

function validar (nombre, apellido) {
	if(apellido === undefined)
		apellido = "Medel"
		console.log(nombre+" "+apellido);
}

validar("Sergio");


function validar2(nombre, apellido) {
	apellido = apellido || "angel";
		console.log(nombre+" "+apellido);
}

validar2("Miguel")
validar2("Miguel","ramirez");

//objeto anonimo

function imprimirObjeto(persona){
	console.log(persona);
	console.log(persona.name+" "+persona._apellido);
	persona.name="Nathan";
}


imprimirObjeto({
		name: "Sandy",
		_apellido: "Mulato"
	}
)

var obj = {
	name:  "Hans",
	_apellido: "ramirez Mulato"
}

imprimirObjeto(obj);

console.log(obj);

//Mandar funciones como parametros
//las funciones son objetos


function funcionParametro(fn) {
	fn();
}

//funcion anonima
funcionParametro(function(){
	console.log("Funcion anonima")	
});

var miFuncion = function(){
	console.log("miFuncion");
}

funcionParametro(miFuncion);

//orden de parametros
