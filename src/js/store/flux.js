const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			personajes: [
				{
					"name": "Luke Skywalker",
					"height": "172",
					"mass": "77",
					"hair_color": "blond",
					"skin_color": "fair",
					"eye_color": "blue",
					"birth_year": "19BBY",
					"gender": "male",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "C-3PO",
					"height": "167",
					"mass": "75",
					"hair_color": "n/a",
					"skin_color": "gold",
					"eye_color": "yellow",
					"birth_year": "112BBY",
					"gender": "n/a",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "R2-D2",
					"height": "96",
					"mass": "32",
					"hair_color": "n/a",
					"skin_color": "white, blue",
					"eye_color": "red",
					"birth_year": "33BBY",
					"gender": "n/a",
					"homeworld": "https://swapi.dev/api/planets/8/"
				},
				{
					"name": "Darth Vader",
					"height": "202",
					"mass": "136",
					"hair_color": "none",
					"skin_color": "white",
					"eye_color": "yellow",
					"birth_year": "41.9BBY",
					"gender": "male",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "Leia Organa",
					"height": "150",
					"mass": "49",
					"hair_color": "brown",
					"skin_color": "light",
					"eye_color": "brown",
					"birth_year": "19BBY",
					"gender": "female",
					"homeworld": "https://swapi.dev/api/planets/2/"
				},
				{
					"name": "Owen Lars",
					"height": "178",
					"mass": "120",
					"hair_color": "brown, grey",
					"skin_color": "light",
					"eye_color": "blue",
					"birth_year": "52BBY",
					"gender": "male",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "Beru Whitesun lars",
					"height": "165",
					"mass": "75",
					"hair_color": "brown",
					"skin_color": "light",
					"eye_color": "blue",
					"birth_year": "47BBY",
					"gender": "female",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "R5-D4",
					"height": "97",
					"mass": "32",
					"hair_color": "n/a",
					"skin_color": "white, red",
					"eye_color": "red",
					"birth_year": "unknown",
					"gender": "n/a",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "Biggs Darklighter",
					"height": "183",
					"mass": "84",
					"hair_color": "black",
					"skin_color": "light",
					"eye_color": "brown",
					"birth_year": "24BBY",
					"gender": "male",
					"homeworld": "https://swapi.dev/api/planets/1/"
				},
				{
					"name": "Obi-Wan Kenobi",
					"height": "182",
					"mass": "77",
					"hair_color": "auburn, white",
					"skin_color": "fair",
					"eye_color": "blue-gray",
					"birth_year": "57BBY",
					"gender": "male",
					"homeworld": "https://swapi.dev/api/planets/20/"
				}
			],

			planets: [
				{
					"name": "Tatooine",
					"rotation_period": "23",
					"orbital_period": "304",
					"diameter": "10465",
					"climate": "arid",
					"gravity": "1 standard",
					"terrain": "desert",
					"surface_water": "1",
					"population": "200000"
				},
				{
					"name": "Alderaan",
					"rotation_period": "24",
					"orbital_period": "364",
					"diameter": "12500",
					"climate": "temperate",
					"gravity": "1 standard",
					"terrain": "grasslands, mountains",
					"surface_water": "40",
					"population": "2000000000"
				},
				{
					"name": "Yavin IV",
					"rotation_period": "24",
					"orbital_period": "4818",
					"diameter": "10200",
					"climate": "temperate, tropical",
					"gravity": "1 standard",
					"terrain": "jungle, rainforests",
					"surface_water": "8",
					"population": "1000"
				},
				{
					"name": "Hoth",
					"rotation_period": "23",
					"orbital_period": "549",
					"diameter": "7200",
					"climate": "frozen",
					"gravity": "1.1 standard",
					"terrain": "tundra, ice caves, mountain ranges",
					"surface_water": "100",
					"population": "unknown"
				},
				{
					"name": "Dagobah",
					"rotation_period": "23",
					"orbital_period": "341",
					"diameter": "8900",
					"climate": "murky",
					"gravity": "N/A",
					"terrain": "swamp, jungles",
					"surface_water": "8",
					"population": "unknown"
				},
				{
					"name": "Bespin",
					"rotation_period": "12",
					"orbital_period": "5110",
					"diameter": "118000",
					"climate": "temperate",
					"gravity": "1.5 (surface), 1 standard (Cloud City)",
					"terrain": "gas giant",
					"surface_water": "0",
					"population": "6000000"
				},
				{
					"name": "Endor",
					"rotation_period": "18",
					"orbital_period": "402",
					"diameter": "4900",
					"climate": "temperate",
					"gravity": "0.85 standard",
					"terrain": "forests, mountains, lakes",
					"surface_water": "8",
					"population": "30000000"
				},
				{
					"name": "Naboo",
					"rotation_period": "26",
					"orbital_period": "312",
					"diameter": "12120",
					"climate": "temperate",
					"gravity": "1 standard",
					"terrain": "grassy hills, swamps, forests, mountains",
					"surface_water": "12",
					"population": "4500000000"
				},
				{
					"name": "Coruscant",
					"rotation_period": "24",
					"orbital_period": "368",
					"diameter": "12240",
					"climate": "temperate",
					"gravity": "1 standard",
					"terrain": "cityscape, mountains",
					"surface_water": "unknown",
					"population": "1000000000000"
				},
				{
					"name": "Kamino",
					"rotation_period": "27",
					"orbital_period": "463",
					"diameter": "19720",
					"climate": "temperate",
					"gravity": "1 standard",
					"terrain": "ocean",
					"surface_water": "100",
					"population": "1000000000"
				}
			],

			favoritos: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			setFavoritos: favoritos => {
				setStore({ favoritos: favoritos });
			},

			eliminarFavorito: favorito => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter(f => f !== favorito);
				setStore({ favoritos: nuevosFavoritos });
			}
		}
	};
};

export default getState;
