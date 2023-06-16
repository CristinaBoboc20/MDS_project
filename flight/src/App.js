import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog3 from "./components/blog/Blog3";
import Article1 from "./components/blog/Aticles/Article1";
import Header1 from "./components/header";

function App() {
  return (
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
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header1 />
                      <Blog3 />
                    </>
                  }
                />
                <Route path="/article1" element={<Article1 />} />
              </Routes>
            </Router>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}
    </div>
  );
}

export default App;
