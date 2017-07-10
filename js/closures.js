console.log("******Closures**********");


(function(){
	document.getElementById('btn').addEventListener("click", function(){
		console.log("hizo click");
	});

	setTimeout(function(){
		console.log("hola mundo");
	},5000)

	setTimeout(function(){
		console.log(hola_mundo("Miguel"));
	},2000)
})
//declarar una funcion que se llame a si misa
();

function hola_mundo(nombre) {
	function construct(){
		nombre = "angel"
		return "hola "+nombre;
	}
	return construct();
}