import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/travel-carbon-simulator")({
  component: TravelCarbonSimulator,
});

function TravelCarbonSimulator() {
  const [selectedOption, setSelectedOption] = useState("");
  const [distance, setDistance] = useState("");
  const [numberOfTravels, setNumberOfTravels] = useState("");

  const handleValidate = () => {
    const rates = parseFloat(selectedOption) * parseFloat(distance);
    const totalYearlyCarbonCost = rates * parseFloat(numberOfTravels);
    const resultInKg = totalYearlyCarbonCost / 1000;
    console.log(resultInKg + " kg of CO2");
  };

  return (
    <div>
      <div className="my-4">
        <input
          type="number"
          placeholder="Number of travel"
          onChange={(e) => setNumberOfTravels(e.target.value)}
        />
      </div>

      <div className="my-4">
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="" disabled selected>
            Select a mode of transportation
          </option>
          <option value="218">Thermic Car</option>
          <option value="103">Electrical Car</option>
          <option value="27">Long Distance Train</option>
          <option value="10">Local Train</option>
          <option value="259">Plane</option>
          <option value="0">Walk</option>
          <option value="0">Bike</option>
          <option value="11">Electrical Bike</option>
        </select>
        <input
          type="number"
          placeholder="Distance"
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleValidate}>Validate</button>
      </div>
    </div>
  );
}
