export const MovieCard = ({ movie, type }) => {
    console.log("MovieCard received:", movie);
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
            ) : (
                <div className="filler-poster">No Image</div>
            )}
        </div>
    );
};
