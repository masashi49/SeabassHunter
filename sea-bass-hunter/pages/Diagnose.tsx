import { useState } from "react";
import options from "../api/options";
import { calculateLure } from "../lib/hooks/useCalculateLure";

const IndexPage = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    weather: 0,
    clarity: 0,
    bait: 0,
  });
  const [result, setResult] = useState("");

  const handleChange = (optionType: string, optionId: number) => {
    setSelectedOptions({ ...selectedOptions, [optionType]: optionId });
  };

  const handleSubmit = () => {
    setResult(calculateLure(selectedOptions));
  };

  return (
    <div>
      {Object.keys(options).map((optionType) => (
        <div key={optionType}>
          <h2>{optionType}</h2>
          {options[optionType].map(({ id, label }) => (
            <button key={id} onClick={() => handleChange(optionType, id)}>
              {label}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && <div>Recommended Lure: {result}</div>}
    </div>
  );
};

export default IndexPage;
