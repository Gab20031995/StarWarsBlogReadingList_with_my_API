const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			token: sessionStorage.getItem("my_token") || ""
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: async () => {
				const url = "https://3000-turquoise-smelt-kts86ydp.ws-us03.gitpod.io/people";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ people: data.results });
			},

			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},
			loadVehicles: async () => {
				const url = "https://swapi.dev/api/vehicles/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ vehicles: data.results });
			},

			//Favorites

			addFavorites: (name, type) => {
				let favorites = getStore().favorites;
				favorites = favorites.concat({ name: name, type: type });
				setStore({ favorites: [...favorites] });
			},

			deleteFavorites: index => {
				let favorites = getStore().favorites;
				favorites.splice(index, 1);
				setStore({ favorites: [...favorites] });
			}
		}
	};
};

export default getState;
