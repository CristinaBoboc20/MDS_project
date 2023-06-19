import React, { useState } from "react";
import "../../styles/main.scss";

const FilterSelect = () => {
  const [economyValue, setEconomyValue] = useState("Economy");

  const handleEconomyValueChange = (value) => {
    setEconomyValue(value);
  };

  const dropdownOptions = [
    {
      title: "Economy",
      value: economyValue,
      list: [{ label: "Economy" }, { label: "Business" }, { label: "First" }],
      onChange: handleEconomyValueChange,
    },
  ];

  return (
    <div>
      <select
        value={economyValue}
        onChange={(e) => handleEconomyValueChange(e.target.value)}
      >
        {dropdownOptions.map((option) =>
          option.list.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default FilterSelect;
