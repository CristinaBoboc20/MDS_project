import { Link } from "react-router-dom";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import "../../styles/main.scss"

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-4 -w-2800 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
        <div className="button-grid items-center">
          <FlyingFromLocation />
          {/* End Location Flying From */}

          <FlyingToLocation />
          {/* End Location Flying To */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Depart</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Depart */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Return</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Return */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <Link
              to="/flight/flight-list-v1"
              className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white"
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </Link>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
