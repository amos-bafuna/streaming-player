export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	/* 	token:
		"BQAncALq5xezxLkbfTLnEBZbfAWhotIYTPwBnRU6bk_WM7EMTPrudHaw0iDBtIBYU8d8nD4bxqJo6Tjy0HcvdjRgbQx4a30R5Rc89Jf3Ol3JQ9rR44fIyy-sXvDlSkWnynZqgjpXtv3_u960iG8HIiV2gPq-ft9WDzB7G9GBXjrVPAHcZ5KWTjXpshkV5Cxnf9OkCbqljY8yqVXeP7LPKeAxxug365rKHdmalTU55Nv_uJ-uXsjFdIwqM07ANR8Rve22S7JzAElzosMWAf2_dPht7EmqCZaotO5p98H8YK8L-YbO-09G__CVb88_LwC3F_9kVg",
 */
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

		default:
			return state;
	}
};

export default reducer;
