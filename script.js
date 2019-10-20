//cache buttons
var elbutton = document.getElementById("btn");
var elbutton2 = document.getElementById("btn2");
var elFav = document.getElementById("fav_btn");
var elShow = document.getElementById("show_pokemon");

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
var elMessage2 = document.getElementById("message2");

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

elShow.addEventListener("click", function(){	//all pokemon event listener
	elMessage2.innerHTML = "This may take a few seconds...";
	$(elMessage2).fadeOut(1000);

	$.getJSON("https://pokeapi.co/api/v2/pokemon?limit=807", function(data){
		for (var i = 0; i < data.results.length; i++){
			elAllPokemon.innerHTML += "<li id='pokemon-box'>" + data.results[i].name + "</li>";
		}
	});
}); 