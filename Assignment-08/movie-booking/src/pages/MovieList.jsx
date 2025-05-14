
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

const MovieList = () => {
  
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const keywords = ["action", "comedy", "batman", "spy", "avenger", "superhero", "thriller"];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

  const fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          const formatted = data.Search.slice(0, 16).map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            image: movie.Poster,
          }));
          setMovies(formatted);
        } else {
          setMovies([]);
        }
      });
  };

  useEffect(() => {
    fetchMovies(randomKeyword);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchMovies(search.trim());
    }
  };

  const handleClick = (movie) => {
    navigate(`/details/${movie.id}`, { state: movie });
  };

  return (
    <div className="movie-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={search}
          placeholder="Search movies..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleClick(movie)}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p className="no-results">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
