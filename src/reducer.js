export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDwJHFhZZL6QeV-mGwI4hoh_NH7Aej3i5cYQ5E6PTFObvK8AtbKwTYFHQ61okKO58NfqDRPHWBvuwWE3rQGW7cCzy9GoE32p5rIFq4AIBfoNhO7F9wEvYKq6YzTp76943uzI3LX-EmmHD87n3rr6ga3e1aEvvRqw30FhptF8fPnVlTdKzRlVqPQCzNUzRJnr1TsdfBn4KGQCIJlQr1j'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer