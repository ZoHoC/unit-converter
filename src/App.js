import { useState } from "react";
import "./App.css";

function App() {
  let unit = 0;
  const [conversion, setConversion] = useState([
    {
      unitType: "Lenght (Meter/Feet)",
      metric: `${unit} meters = ${(unit * 3.288).toFixed(3)} feet`,
      imperial: `${unit} feet = ${(unit * 0.305).toFixed(3)} meters`,
    },
    {
      unitType: "Volume (Liter/Gallons)",
      metric: `${unit} liters = ${(unit * 0.22).toFixed(3)} gallons`,
      imperial: `${unit} gallons = ${(unit * 4.546).toFixed(3)} liters`,
    },
    {
      unitType: "Mass (Kilogram/Pounds)",
      metric: `${unit} kilograms = ${(unit * 2.205).toFixed(3)} pounds`,
      imperial: `${unit} pounds = ${(unit * 0.454).toFixed(3)} kilograms`,
    },
  ]);

  function handleChange(event) {
    unit = event.target.value;

    setConversion([
      {
        unitType: "Lenght (Meter/Feet)",
        metric: `${unit} meters = ${(unit * 3.288).toFixed(3)} feet`,
        imperial: `${unit} feet = ${(unit * 0.305).toFixed(3)} meters`,
      },
      {
        unitType: "Volume (Liter/Gallons)",
        metric: `${unit} liters = ${(unit * 0.22).toFixed(3)} gallons`,
        imperial: `${unit} gallons = ${(unit * 4.546).toFixed(3)} liters`,
      },
      {
        unitType: "Mass (Kilogram/Pounds)",
        metric: `${unit} kilograms = ${(unit * 2.205).toFixed(3)} pounds`,
        imperial: `${unit} pounds = ${(unit * 0.454).toFixed(3)} kilograms`,
      },
    ]);
  }

  const conversionHTML = conversion.map((item, i) => {
    return (
      <div key={i} className="container--bot">
        <h2 className="container--bot__title">{item.unitType}</h2>
        <p className="container--bot__text">
          {item.metric} | {item.imperial}
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="container--top">
        <h1>Metric/Imperial unit conversion</h1>
        <div className="container--top__input">
          <label htmlFor="input">Enter number:</label>
          <input type="number" id="input" min="0" onChange={handleChange} />
        </div>
      </div>
      {conversionHTML}
    </div>
  );
}

export default App;
