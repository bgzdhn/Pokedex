var elbutton = document.getElementById("btn");
var elbutton2 = document.getElementById("btn2");

var elH2 = document.getElementById("name");
var elP = document.getElementById("num");
var elXp = document.getElementById("xp");
var elHeight = document.getElementById("height");
var elWeight = document.getElementById("weight");

var elH22 = document.getElementById("name2");
var elP2 = document.getElementById("num2");
var elXp2 = document.getElementById("xp2");
var elHeight2 = document.getElementById("height2");
var elWeight2 = document.getElementById("weight2");

elbutton.addEventListener("click", function(){
	var api = "https://pokeapi.co/api/v2/pokemon"
	var id = document.getElementById("poke").value;

	$.getJSON(api + "/" + id, function(data){
		elH2.innerHTML = "Name: " + data.name;
		elP.innerHTML = "#" + data.id;
		elXp.innerHTML = "Base Experience: " + data.base_experience;
		elHeight.innerHTML = "Height: " + data.height;
		elWeight.innerHTML = "Weight: " + data.weight;
	});
});

elbutton2.addEventListener("click", function(){
	var api = "https://pokeapi.co/api/v2/pokemon"
	var id = document.getElementById("poke2").value;

	$.getJSON(api + "/" + id, function(data){
		elH22.innerHTML = "Name: " + data.name;
		elP2.innerHTML = "#" + data.id;
		elXp2.innerHTML = "Base Experience: " + data.base_experience;
		elHeight2.innerHTML = "Height: " + data.height;
		elWeight2.innerHTML = "Weight: " + data.weight;
	});
});