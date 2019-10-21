//cache buttons
var elbutton = document.getElementById("btn");
var elbutton2 = document.getElementById("btn2");
var elFav = document.getElementById("fav_btn");

//cache show all pokemon buttons
var elShow1 = document.getElementById("show_pokemon1");
var elShow2 = document.getElementById("show_pokemon2");
var elShow3 = document.getElementById("show_pokemon3");
var elShow4 = document.getElementById("show_pokemon4");
var elShow5 = document.getElementById("show_pokemon5");
var elShow6 = document.getElementById("show_pokemon6");
var elShow7 = document.getElementById("show_pokemon7");

//cache first search elements
var elH2 = document.getElementById("name");
var elP = document.getElementById("num");
var elImg = document.getElementById("img");
var elType = document.getElementById("type");

//cache second search elements
var elH22 = document.getElementById("name2");
var elP2 = document.getElementById("num2");
var elImg2 = document.getElementById("img2");
var elType2 = document.getElementById("type2");

//cache favourites elements
var elPokeFavs = document.getElementById("pokemon_favs");
var elMessage = document.getElementById("message");

//cache all pokemon list elements
var elAllPokemon = document.getElementById("all_pokemon");

elbutton.addEventListener("click", function(){	//first search event listener
	//cache api info
	var api = "https://pokeapi.co/api/v2/pokemon"
	var id = document.getElementById("poke").value;

	//get JSON from api
	$.getJSON(api + "/" + id, function(data){
		//puts info into an object
		var pokeInfo = {
			name: data.name,
			id: data.id,
			img: data.sprites['front_default'],
			type: data.types.map((type) => type.type.name).join(', '),
		};

		//display object info in chached html elements
		elH2.innerHTML = "Name: " + pokeInfo.name;
		elP.innerHTML = "#: " + pokeInfo.id;
		elImg.innerHTML = "<img src='" + pokeInfo.img + "'/>"
		elType.innerHTML = "<b>Type:</b> " + pokeInfo.type;
		
	});
});

elbutton2.addEventListener("click", function(){	//second search event listener
	//cache api info
	var api = "https://pokeapi.co/api/v2/pokemon"
	var id = document.getElementById("poke2").value;

	//get JSON from api
	$.getJSON(api + "/" + id, function(data){
		//puts info into an object
		var pokeInfo = {
			name: data.name,
			id: data.id,
			img: data.sprites['front_default'],
			type: data.types.map((type) => type.type.name).join(', ')
		};

		//display object info in chached html elements
		elH22.innerHTML = "Name: " + pokeInfo.name;
		elP2.innerHTML = "# " + pokeInfo.id;
		elImg2.innerHTML = "<img src='" + pokeInfo.img + "'/>"
		elType2.innerHTML = "<b>Type:</b> " + pokeInfo.type;
	});
});

elFav.addEventListener("click",function(){	//favourites event listener

	var api = "https://pokeapi.co/api/v2/pokemon"
	var id = document.getElementById("poke").value;

	//get JSON from api
	$.getJSON(api + "/" + id, function(data){
		var pokeInfo = {
			name: data.name,
			id: data.id,
			img: data.sprites['front_default'],
			type: data.types.map((type) => type.type.name).join(', '),

			//function to add to favourtes
			addFavName: function() {
      			return this.name;
    		},
    		addFavImg: function() {
      			return this.img;
    		},
    		addMessage: function(){
    			return "Click the pokemon to remove";
    		}
		};

		if(pokeInfo.name){
			elPokeFavs.innerHTML += "<li>" + pokeInfo.addFavName() + "</br>" + "<img src='" + pokeInfo.addFavImg() + "'/></li>";
			elMessage.innerHTML = pokeInfo.addMessage();
			$("#message").show();
			$("#message").fadeOut(1000);
			
			$("li").click(function(){
  			$(this).fadeOut("slow");
  		});
		}
		
	});
});

//show all pokemon event listeners
elShow1.addEventListener("click", function(){	//all pokemon gen 1 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 0; i < 151; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
}); 

elShow2.addEventListener("click", function(){	//all pokemon gen 2 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 151; i < 251; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
}); 

elShow3.addEventListener("click", function(){	//all pokemon gen 3 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 251; i < 386; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
}); 

elShow4.addEventListener("click", function(){	//all pokemon gen 4 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 386; i < 493; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
}); 

elShow5.addEventListener("click", function(){	//all pokemon gen 5 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 493; i < 649; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
}); 

elShow6.addEventListener("click", function(){	//all pokemon gen 6 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 649; i < 721; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
});

elShow7.addEventListener("click", function(){	//all pokemon gen 7 event listener
	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		if(elAllPokemon){
			elAllPokemon.innerHTML = "";
		}

		for (var i = 721; i < 811; i++){
			elAllPokemon.innerHTML += "<p id='pokemon-box'>" + data.results[i].name + "</p>";
		}
	});
});

