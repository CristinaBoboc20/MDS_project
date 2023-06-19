import { useState } from "react";
import "../../styles/main.scss";

const FlyingFromLocation = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">Flying From</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <input
            autoComplete="off"
            type="search"
            placeholder="Where are you going?"
            className="js-search js-dd-focus"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FlyingFromLocation;
