var max = 50;

var min = 1;


// numero aleatorio
var numero_secreto = Math.random() * (max-min) + min;

numero_secreto = parseInt(numero_secreto);
console.log(numero_secreto);

var mensaje = "Ingresaa un numro para adivinar el numero magico";

while (true) {
	var numero_usuario =prompt(mensaje, "0")
	numero_usuario = parseInt(numero_usuario);

	if (numero_usuario === numero_secreto) {
		alert("Ganaste!! Adivinaste el numero numero secreto"); 
		break;
	} else if (numero_usuario === 0) {
		break;
	}else if (numero_usuario > numero_secreto) {
		mensaje = numero_secreto +" es mayor "
	} else if (numero_usuario < numero_secreto) {
		mensaje =  numero_usuario+" es menor"
	}
}

