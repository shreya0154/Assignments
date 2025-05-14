import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingConfirmation from "./pages/BookingConfirmation";
import "./styles/app.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

