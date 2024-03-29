// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import { Link as RouterLink } from "react-router-dom";
import Book from "./Components/booking";
import Blog3 from "./Components/blog/Blog3";
import Article1 from "./Components/blog/Aticles/Article1";
import Header1 from "./Components/header";
import Search from "./Components/search1";
// import Flights from "./Components/suggested-flights/Flights";
import FlightsSuggested from "./Components/suggested-flights/FlightsSuggested";
import Testimonial from "./Components/testimonial/Testimonial";
import TestimonialRating from "./Components/testimonial/TestimonialRating";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import Flights from "./Components/flight/flight-list-v1";
import Finalauth from "./Components/authentication/Finalauth";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header1 />
               
              <Search />
              <section className="layout-pt-md layout-pb-md">
                <div className="container">
                  <div className="row y-gap-20 justify-between items-end">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">
                          Suggested Flights
                        </h2>
                        <p className="sectionTitle__text mt-5 sm:mt-0">
                          Interdum et malesuada fames ac ante ipsum
                        </p>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-auto">
                      <RouterLink
                        to="/flight/flight-list-v1"
                        className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                      >
                        More <div className="icon-arrow-top-right ml-15" />
                      </RouterLink>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-30 pt-40 sm:pt-20">
                    <FlightsSuggested />
                  </div>
                  {/* End .row */}
                </div>
                {/* End .container */}
              </section>

              <section className="layout-pt-lg layout-pb-lg bg-dark-3">
                <div className="container">
                  <div className="row y-gap-40 justify-between text-white">
                    <div className="col-xl-5 col-lg-6">
                      <TestimonialRating />
                    </div>
                    {/* End .col */}

                    <div className="col-lg-6">
                      <Testimonial />
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                </div>
              </section>
              {/* End testimonial and brand sections Section */}

              <div>
                <section className="layout-pt-lg layout-pb-lg">
                  <div className="container">
                    <div className="row justify-center text-center">
                      <div className="col-auto">
                        <div className="sectionTitle -md">
                          <h2 className="sectionTitle__title">
                            Get inspiration for your next trip
                          </h2>
                          <p className="sectionTitle__text mt-5 sm:mt-0">
                            Interdum et malesuada fames
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End .row  */}
                    <div className="row y-gap-30 pt-40">
                      <Blog3 />
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </section>
                {/* End blog Section */}
                <div>
                  <Subscribe />
                  <Footer />
                </div>
              </div>
            </>
          }
        />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/flight/flight-list-v1" element={<Flights />} />
        <Route path="/finalauth" element={<Finalauth/>} /> 
        <Route path="/book" element={<Book/>} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
