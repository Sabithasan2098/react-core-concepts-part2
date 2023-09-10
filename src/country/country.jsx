import { useState } from "react";
import "./country.css";
const Country = ({ country , handleVisitedCountries}) => {
  console.log(country);
  let { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountries)
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 className={`${visited ? "text" : "otherText"}`}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p className={`${visited ? "text" : "otherText"}`}>
        Population: {population} person
      </p>
      <p className={`${visited ? "text" : "otherText"}`}>Area: {area} km</p>
      <p className={`${visited ? "text" : "otherText"}`}>Code: {cca3}</p>
      <button onClick={()=>{handleVisitedCountries(country)}}>Visiting Countrys</button>
      <br />
      <button
        className={`${visited ? "text" : "otherText"}`}
        onClick={handleVisit}
      >
        {visited ? "Visited" : "Go"}
      </button>

      {visited ? "I visit this country" : "I want to visit"}
    </div>
  );
};

export default Country;
