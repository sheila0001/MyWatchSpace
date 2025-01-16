const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state, // Keep the existing state
                watchlist: [action.payload, ...state.watchlist], // Add the movie to the watchlist
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
            };
        default:
            return state; // Return the current state for unknown actions
    }
};

export default appReducer;


