import React, { useState } from "react";
import fetch from "isomorphic-fetch";
import "./search.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useState({
    adults: 1,
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    cabinClass: "",
    currency: "EUR",
    stops: "",
    duration: "",
    startFrom: "",
    arriveTo: "",
    returnStartFrom: "",
    returnArriveTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const searchFlights = async () => {
    const baseUrl = "https://skyscanner44.p.rapidapi.com/search-extended";

    const url = `${baseUrl}?${new URLSearchParams(searchParams)}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b5aa846d9fmshb5794ca49f74e29p1cf9e6jsnb2e4c2665b79",
        "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const data = JSON.parse(result);
      setSearchResults(data.itineraries.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getDurationString = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="search-form">
      <h2>Flight Search</h2>
      <div className="form-group">
        <div className="form-row">
          <label>
            Origin:
            <input
              type="text"
              name="origin"
              value={searchParams.origin}
              onChange={handleChange}
            />
          </label>
          <label>
            Destination:
            <input
              type="text"
              name="destination"
              value={searchParams.destination}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Departure Date:
            <input
              type="date"
              name="departureDate"
              value={searchParams.departureDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              name="returnDate"
              value={searchParams.returnDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Adults:
            <input
              type="number"
              name="adults"
              value={searchParams.adults}
              onChange={handleChange}
            />
          </label>
          <label>
            Cabin Class:
            <select
              name="cabinClass"
              value={searchParams.cabinClass}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </label>
        </div>
      </div>
      <button className="search-button" onClick={searchFlights}>
        Search
      </button>
      {searchResults && (
        <div className="search-results">
          {searchResults.map((flight) => (
            <div key={flight.id}>
              <h3>Flight Details</h3>
              <p>Origin: {flight.legs[0].origin.displayCode}</p>
              <p>Destination: {flight.legs[0].destination.displayCode}</p>
              <p>Departure: {formatTime(flight.legs[0].departure)}</p>
              <p>Arrival: {formatTime(flight.legs[0].arrival)}</p>
              <p>Price: {flight.pricing_options[0].price.amount}</p>
              <p>
                Duration: {getDurationString(flight.legs[0].durationInMinutes)}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
