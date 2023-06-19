import React, { useState } from "react";

const counters = [
  { name: "Adults", defaultValue: 1 },
];

const Counter = ({ name, defaultValue, onCounterChange }) => {
  const [count, setCount] = useState(defaultValue);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCounterChange(name, newCount);
  };

  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCounterChange(name, newCount);
    }
  };

  return (
    <>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">{name}</div>
          {name === "Children" && (
            <div className="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
          )}
        </div>
        {/* End .col-auto */}
        <div className="col-auto">
          <div className="d-flex items-center js-counter">
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
              onClick={decrementCount}
            >
              <i className="icon-minus text-12" />
            </button>
            {/* decrement button */}
            <div className="flex-center size-20 ml-15 mr-15">
              <div className="text-15 js-count">{count}</div>
            </div>
            {/* counter text  */}
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
            {/* increment button */}
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */}
      <div className="border-top-light mt-24 mb-24" />
    </>
  );
};

const GuestSearch = ({ value, onChange }) => {
  const [guestCounts, setGuestCounts] = useState({
    Adults: value,
  });

  const handleCounterChange = (name, value) => {
    setGuestCounts((prevState) => ({ ...prevState, [name]: value }));
    onChange({ target: { name: "adults", value: value } });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const getTotalGuestCount = () => {
    const total = Object.values(guestCounts).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  };

  return (
    <div className="dropdown js-dropdown">
      
      
      <button
        className="button -outline-black-1 size-45 rounded-4 w-full js-dropdown-toggle"
        onClick={toggleDropdown}
      >
        <div className="text-15 lh-12">
          {getTotalGuestCount()} {getTotalGuestCount() === 1 ? "Adult" : "Adults"}
        </div>
      </button>
      <div
        className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
        onClick={closeDropdown}
      >
        <div className="px-24 py-20">
          {counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              defaultValue={counter.defaultValue}
              onCounterChange={handleCounterChange}
            />
          ))}
        </div>
        {/* End .dropdown-menu */}
      </div>
      {/* End .dropdown */}
    </div>
  );
};

export default GuestSearch;
