import { useState } from "react";

const CityNameInput = () => {
  const [cityName, setCityName] = useState("Seattle");

  // event handler:
  const renameCity = (changeEvent) => {
    debugger;
    setCityName(changeEvent.target.value);
    console.log(
      "Details about the element that fired the event:",
      changeEvent.target
    );
    console.log("The value of that element:", changeEvent.target.value);
  };

  return (
    <section>
      <h2>{cityName}</h2>
      <input
        onChange={renameCity}
        type="text"
        default="type city name here"
        value={cityName}
      />
    </section>
  );
};

export default CityNameInput;
