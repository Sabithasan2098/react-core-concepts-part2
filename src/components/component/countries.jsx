import { useEffect } from "react";
import { useState } from "react";
import Country from "../../country/country";
import "./countries.css";
const Countries = () => {
  const [countrys, setCountry] = useState([]);
  const[visitedCountries, setVisitedCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const handleVisitedCountries = country =>{
    console.log('handle visited')
    const newVisitedCountrys = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountrys)
  }
  return (
    <div>
      <h1>Countries: {countrys.length}</h1>
      <div>
        <h3>Visited countries: {visitedCountries.length}</h3>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="countrys">
        {countrys.map((country) => (
          <Country handleVisitedCountries={handleVisitedCountries} key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};
export default Countries;
