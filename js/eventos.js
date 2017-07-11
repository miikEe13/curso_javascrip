console.log("eventos");

function onclic() {
	alert(":3");
}

function mouseover() {
	alert("mous hover")
}

function mouseout() {
	alert("mouseout out");
}

/* listener*/

function listener() {
	alert("esto fue dispado por el botoon");
}

function anotherClick() {
	alert("esto fue disparado por el DIV")		;
}


//budling desde adentro haci afuera

//desde el capture

document.getElementById("mi_div").addEventListener("click",anotherClick,false)

document.getElementById("listener").addEventListener("click",listener,true);
