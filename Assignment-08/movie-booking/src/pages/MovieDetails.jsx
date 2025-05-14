import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams(); // imdbID
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        }
      });
  }, [id]);

  return (
    <div className="details-container">
      {movie ? (
        <>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} className="details-poster" />
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <button className="book-btn" onClick={() => navigate(`/book/${id}`, { state: movie })}>
            Book Seat
          </button>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}
