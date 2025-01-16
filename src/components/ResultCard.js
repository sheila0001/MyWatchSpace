import React, { useContext } from "react";
import { GlobalContext } from "../CONTEXT/GlobalState";

export const ResultCard = ({ movie }) => {
    const { watchlist, addMovieToWatchlist } = useContext(GlobalContext);

    // Prevent adding a movie twice in the watchlist
    const storedMovie = watchlist.find((o) => o.id === movie.id);

    // Disable button if the movie is already in the watchlist
    const watchlistDisabled = storedMovie ? true : false;

    return (
        <div className="result-wrapper">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster">No Image</div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "Unknown"}
                    </h4>
                </div>
                <div className="controls">
                    <button
                        className="btn"
                        onClick={() => addMovieToWatchlist(movie)}
                        disabled={watchlistDisabled} // Disable button if movie is already in watchlist
                    >
                        {watchlistDisabled ? "Already in Watchlist" : "Add to Watchlist"}
                    </button>
                </div>
            </div>
        </div>
    );
};
