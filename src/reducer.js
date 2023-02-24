export const ACTION = {

    SEARCH_RESULT: 'searchResult',
    SEARCH_TERM: 'searchTerm',
    CURRENT_STATION: 'currentStation'

}

export const reducer = (state, action) => {

    switch (action.type) {

        case 'searchResult':
            return { ...state, searchResult: action.payload };

        case 'searchTerm':
            return { ...state, searchTerm: action.payload };

        case 'audioSrc':
            return { ...state, audioSrc: action.payload };

        case 'currentStation':
            return { ...state, currentStation: action.payload };

        default:
            throw new Error();

    }
}