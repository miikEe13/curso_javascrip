/* operadores licos 
|| or
&& and

*/
var numero_uno = 30;
var numero_dos = "30";
if((numero_uno == numero_dos)) {
console.log("la condiciion fue verdadera");
   }

var contador = 0;

while(contador < 10) {
    //contador = contador + 1;
  	contador ++;
    console.log(contador);
}

var contador_par =0;
while(contador_par < 10) {
     contador_par ++;
	if (contador_par % 2 == 0) {
    console.log("numero par ="+contador_par);
	}
}

// for (inicializacion;condicion;incrmento)
console.log("ciclo for");
for (var i = 20; i < 30; i++) {
	console.log(i)
}

var arreglo =["hola", "mundo"];

for (var i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i]);
}

for (var i = 0 ; i < 10; i++) {
	if (i > 3) {
		break;
	}
	console.log(i);
}


for (var i = 0 ; i < 10; i++) {
	if (i % 2 !== 0 ) {
		continue;
	}
	console.log(i);
}