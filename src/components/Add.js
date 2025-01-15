import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        const searchTerm = e.target.value;
        setQuery(searchTerm);

        if (!searchTerm.trim()) {
            setResults([]); // Clear results if input is empty
            return;
        }

        const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Ensure correct variable name
        const baseURL =
            "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

        fetch(`${baseURL}&api_key=${apiKey}&query=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching movie data:", error);
                setResults([]);
            });
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="What movie are you looking for?"
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

