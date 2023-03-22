import { useState } from "react";
import options from "../api/options";
import { calculateLure, OptionId } from "../lib/hooks/useCalculateLure";
import type { Option, OptionGroup } from "./types";

// 選択肢を表示するためのコンポーネント
const OptionSelect = ({
  optionGroup,
  selectedOptions,
  setSelectedOptions,
}: {
  optionGroup: OptionGroup;
  selectedOptions: Record<OptionId, number>;
  setSelectedOptions: (value: Record<OptionId, number>) => void;
}) => (
  <div>
    <h3>{optionGroup.title}</h3>
    <select
      value={selectedOptions[optionGroup.id]}
      onChange={(e) => {
        setSelectedOptions({
          ...selectedOptions,
          [optionGroup.id]: parseInt(e.target.value),
        });
      }}
    >
      {optionGroup.options.map((option: Option) => (
        <option key={option.id} value={option.id}>
          {option.description}
        </option>
      ))}
    </select>
  </div>
);

const App = () => {
  // ユーザーが選択したオプションを保持
  const [selectedOptions, setSelectedOptions] = useState<
    Record<OptionId, number>
  >({
    weather: 1,
    clarity: 1,
    bait: 1,
    time: 1,
    season: 1,
    location: 1,
  });

  // 診断結果を表示する関数
  const handleSubmit = () => {
    const result = calculateLure(selectedOptions);
    alert(`最適なルアーは ${String(result)} です！`);
  };

  return (
    <div>
      <h1>釣りルアー診断</h1>
      {options.map((optionGroup: OptionGroup) => (
        <OptionSelect
          key={optionGroup.id}
          optionGroup={optionGroup}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      ))}
      <button onClick={handleSubmit}>診断する</button>
    </div>
  );
};

export default App;
