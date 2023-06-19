// import CallToActions from "../../../components/common/CallToActions";
import Header1 from "../../header";
import Footer from "../../Footer/Footer";
import MainFilterSearchBox from "../../search1/MainFilterSearchBox";
import TopHeaderFilter from "./TopHeaderFilter";
import FlightProperties from "./FlightProperties";
import Pagination from "./Pagination";
import "../../../styles/main.scss";
const Flights = () => {
  
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />

      <section className="masthead -type-11">
        <div className="container-1500">
          <div className="row">
            <div className="col-lg-auto">
              <div className="masthead__content">
                <div data-aos="fade-up" data-aos-delay="300">
                  {/* End .row */}

                  <MainFilterSearchBox />
                  {/* End filter content */}
                </div>
              </div>
              {/* End .masthead__content */}
            </div>
            {/* End .col-lg-auto */}
          </div>
          {/* End .row */}

          {/* End .masthead__image */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-md bg-light-2">
        <div className="container">
        
            <div >
              {/* <TopHeaderFilter /> */}

              <div className="row">
                {/* <FlightProperties /> */}
              </div>
              {/* End .row */}
              <Pagination />
            </div>
           
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <Footer />
    </>
  );
};

export default Flights;
