import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="confirmation-container">
        <p>No booking data available.</p>
        <button onClick={() => navigate("/")}>Back to Movies</button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h2>🎉 Seat Booked Successfully!</h2>
      {state.moviePoster && (
        <img src={state.moviePoster} alt={state.movieTitle} className="poster" />
      )}
      <h3>{state.movieTitle}</h3>
      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
      <button onClick={() => navigate("/")}>🎬 Book Another</button>
    </div>
  );
}
