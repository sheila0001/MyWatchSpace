import React, { useState } from 'react';

export const Add = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const onChange = async (e) => {
        e.preventDefault();

        const searchTerm = e.target.value;
        setQuery(searchTerm);

        // Return early if input is empty
        if (!searchTerm.trim()) {
            setResults([]);
            return;
        }

        const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Fetch API key from environment variable
        const baseURL =
            'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

        try {
            const response = await fetch(`${baseURL}&api_key=${apiKey}&query=${searchTerm}`);
            const data = await response.json();

            // Check if results exist and set them
            if (data.results && data.results.length > 0) {
                setResults(data.results);
            } else {
                setResults([]); // Clear results if no movies found
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            setResults([]); // Clear results on fetch failure
        }
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
                                <li key={movie.id}>{movie.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
