
import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(100000 + Math.random() * 900000);
    navigate("/confirmation", {
      state: {
        ...formData,
        bookingId,
        movieTitle: state?.Title || `Movie ${id}`,
        moviePoster: state?.Poster || "",
      },
    });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Seat - {state?.Title || `Movie ${id}`}</h2>
      <img src={state?.Poster} alt={state?.Title} className="booking-poster" />
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="mobile"
          placeholder="Mobile"
          type="tel"
          required
          value={formData.mobile}
          onChange={handleChange}
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
