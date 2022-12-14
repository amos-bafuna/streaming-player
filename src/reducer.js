export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_TOPPLAYLIST":
			return {
				...state,
				topplaylist: action.topplaylist,
			};

		case "SET_RECENTPLAYED":
			return {
				...state,
				recentplayed: action.recentplayed,
			};

		case "SET_NEWRELEASE":
			return {
				...state,
				newrelease: action.newrelease,
			};
		case "SET_URIS":
			return {
				...state,
				uris: action.uris,
			};
		case "GET_SAVEDTRACK":
			return {
				...state,
				savedTracks: action.savedTracks,
			};
		case "GET_FEATUREDPLAYLISTS":
			return {
				...state,
				featuredPlaylists: action.featuredPlaylists,
			};

		default:
			return state;
	}
};

export default reducer;
