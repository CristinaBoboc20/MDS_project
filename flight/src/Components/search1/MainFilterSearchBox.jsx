import React, { useState } from "react";
import fetch from "isomorphic-fetch";
import GuestSearch from "./GuestSearch";
import FilterSelect from "./FilterSelect";
import { Link as RouterLink } from "react-router-dom";
import FlightProperties from "../flight/flight-list-v1/FlightProperties";

const MainFilterSearchBox = () => {
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
      setSearchResults(data.itineraries?.results || []);

      console.log(data); // Afișează răspunsul în consolă
      
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
    <div className="mainSearch -col-4 -w-2800 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
      <div className="button-grid items-center">
        <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Flying From</h4>
            <div className="text-15 text-light-1 ls-2 lh-16">
              <label>
                <input
                  type="text"
                  name="origin"
                  placeholder="Where are you going?"
                  className="js-search js-dd-focus"
                  value={searchParams.origin}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Flying To</h4>
            <div className="text-15 text-light-1 ls-2 lh-16">
              <label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Where are you going?"
                  className="js-search js-dd-focus"
                  value={searchParams.destination}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
            <label>
              Departure Date:
              <input
                type="date"
                name="departureDate"
                value={searchParams.departureDate}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
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
        </div>
        <div className="searchMenu-loc px-50 lg:py-50 lg:px-0 js-form-dd js-liverSearch">
          <label>
            Trevellers:
            <GuestSearch value={searchParams.adults} onChange={handleChange} />
          </label>
        </div>
        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
            <label>
              <FilterSelect
                value={searchParams.cabinClass}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="button-item" onClick={searchFlights}>
          <RouterLink
            to="/flight/flight-list-v1"
            className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white"
          >
            <i className="icon-search text-20 mr-10" />
            Search
          </RouterLink>
        </div>
      </div>

      {/* <button className="search-button" onClick={searchFlights}>
        Search
      </button> */}

      {/* {searchResults && (
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
      )} */}

      {searchResults && <FlightProperties flights={searchResults} />}
    </div>
  );
};

export default MainFilterSearchBox;
