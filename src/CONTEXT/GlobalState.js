import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) :
        [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) :
        [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state]);

    // Actions
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };
    const addMovieToWatched = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };

    //move back watched movies to watchlist
    const moveToWatchlist = movie => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie })
    };

    // remove movies from watched feature
    const removeFromWatched = id => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
    }
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,

            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
