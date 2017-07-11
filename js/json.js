console.log("Json");

//JSON => Javascript object Notation

//Diccionarios / Hashes

var a = [1,2,3,4];

var curso = {
	titulo: "curso Javascript",
	videos: 19,
	tutor: "uriel",
	introduccion: function() {
		console.log("Bienvenido al curso "+this.titulo+ " que tiene "+this.videos+" videos");
	}
};

console.log(curso["titulo"]);
console.log(curso["videos"]);
console.log(curso["tutor"]);

console.log("hashes como forma de declar objetos tambien se puede acceder por punto");

console.log(curso.titulo);
console.log(curso.videos);
console.log(curso.tutor);
console.log(curso.introduccion());