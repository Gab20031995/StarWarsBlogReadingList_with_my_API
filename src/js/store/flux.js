const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://3000-black-donkey-1oovt2aw.ws-us03.gitpod.io";
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
				const url = apiUrl + "/people";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ people: data });
			},

			loadPlanets: async () => {
				const url = "/planets";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},
			loadVehicles: async () => {
				const url = "/vehicles";
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
