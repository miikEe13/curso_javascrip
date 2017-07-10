console.log("Getters & Setters");

var curso = {
	titulo: "curso Javascript",
	videos: 19,
	tutor: "uriel",
	getTutor: function() {
		return this.tutor.toUpperCase();
	},
	setTutor: function(tutor){
		if (tutor === "" || (typeof  tutor === "undefined")) {
			return;
		}
		this.tutor = tutor;
	},
};


curso.setTutor("miguel");
console.log(curso.getTutor());


var matieria = {
	titulo: "curso php",
	videos: 19,
	tutor_value: "jose",
	get tutor() {
		return this.tutor_value.toUpperCase();
	},
	set tutor(tutor_value) {
		if (tutor_value === "" || (typeof  tutor_value === "undefined")) {
			return;
		}
		this.tutor_value = tutor_value;
	}
};

matieria.tutor = "";
console.log(matieria.tutor)