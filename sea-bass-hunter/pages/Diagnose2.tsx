import React, { useState } from "react";
import ReactDOM from "react-dom";
import { pointData, sizeData, colorData, actionData } from "../api/pointData";

type rule = keyof typeof pointData;
type Situation = {
  weather: number;
  clarity: number;
  bait: number;
  time: number;
  season: number;
  location: number;
};

function calculateScore(lureData: any, situation: Situation): number {
  let score = 0;
  for (const key in situation) {
    if (Object.prototype.hasOwnProperty.call(lureData, key)) {
      const point = lureData[key][situation[key]];
      score += point;
    }
  }
  return score;
}

function generateLureCombination(): { [key: string]: any } {
  const lureCombination: { [key: string]: any } = {};
  for (const lureName in pointData) {
    if (Object.prototype.hasOwnProperty.call(pointData, lureName)) {
      const lurePoints = pointData[lureName];
      for (const size in sizeData) {
        if (Object.prototype.hasOwnProperty.call(sizeData, size)) {
          const sizePoints = sizeData[size];
          for (const color in colorData) {
            if (Object.prototype.hasOwnProperty.call(colorData, color)) {
              const colorPoints = colorData[color];
              for (const action in actionData) {
                if (Object.prototype.hasOwnProperty.call(actionData, action)) {
                  const actionPoints = actionData[action];
                  const combinationName = `${lureName}_${size}_${color}_${action}`;
                  lureCombination[combinationName] = {
                    ...lurePoints,
                    ...sizePoints,
                    ...colorPoints,
                    ...actionPoints,
                  };
                }
              }
            }
          }
        }
      }
    }
  }
  return lureCombination;
}

const lureCombinationData = generateLureCombination();

function recommendLure(situation: Situation): string {
  let maxScore = -Infinity;
  let bestLure = "";

  for (const lureName in lureCombinationData) {
    if (Object.prototype.hasOwnProperty.call(lureCombinationData, lureName)) {
      const lureData: rule = lureCombinationData[lureName];
      const score = calculateScore(lureData, situation);

      if (score > maxScore) {
        maxScore = score;
        bestLure = lureName;
      }
    }
  }

  return bestLure;
}

const Diagnose2 = () => {
  return <div>{recommendedLure3}</div>;
};

const App = () => {
  const [selectedWeather, setSelectedWeather] = useState(1);
  const [selectedClarity, setSelectedClarity] = useState(1);
  const [selectedBait, setSelectedBait] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "weather":
        setSelectedWeather(Number(value));
        break;
      case "clarity":
        setSelectedClarity(Number(value));
        break;
      case "bait":
        setSelectedBait(Number(value));
        break;
      case "time":
        setSelectedTime(Number(value));
        break;
      case "season":
        setSelectedSeason(Number(value));
        break;
      case "location":
        setSelectedLocation(Number(value));
        break;
      default:
        break;
    }
  };

  const calculatePoints = () => {
    // 各ルアーのポイントを計算
    const points = {};
    for (const lure in pointData) {
      points[lure] =
        pointData[lure].weather[selectedWeather] +
        pointData[lure].clarity[selectedClarity] +
        pointData[lure].bait[selectedBait] +
        pointData[lure].time[selectedTime] +
        pointData[lure].season[selectedSeason] +
        pointData[lure].location[selectedLocation];
    }
    return points;
  };
  const getBestLure = () => {
    const points = calculatePoints();
    let bestLure = "";
    let highestPoints = 0;

    for (const lure in points) {
      if (points[lure] > highestPoints) {
        highestPoints = points[lure];
        bestLure = lure;
      }
    }

    const getBestAttribute = (attributeData, attribute) => {
      return Object.entries(attributeData).reduce((a, b) => {
        const aValue = a[1][attribute];
        const bValue = b[1][attribute];
        return aValue > bValue ? a : b;
      })[0];
    };

    const bestSize = getBestAttribute(sizeData, selectedSeason);
    const bestColor = getBestAttribute(colorData, selectedClarity);
    const bestAction = getBestAttribute(actionData, selectedBait);

    return {
      lure: bestLure,
      size: bestSize,
      color: bestColor,
      action: bestAction,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bestLure = getBestLure();
    alert(
      `オススメのルアーは ${bestLure.lure}、サイズ: ${bestLure.size}、カラー: ${bestLure.color}、アクション: ${bestLure.action} です。`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weather">天気:</label>
          <select id="weather" name="weather" onChange={handleChange}>
            <option value="1">晴れ</option>
            <option value="2">曇り</option>
            <option value="3">雨</option>
            <option value="4">雪</option>
          </select>
        </div>

        <div>
          <label htmlFor="clarity">水の澄み具合:</label>
          <select id="clarity" name="clarity" onChange={handleChange}>
            <option value="1">澄んでいる</option>
            <option value="2">やや澄んでいる</option>
            <option value="3">濁っている</option>
            <option value="4">非常に濁っている</option>
          </select>
        </div>

        <div>
          <label htmlFor="bait">ベイトフィッシュ:</label>
          <select id="bait" name="bait" onChange={handleChange}>
            <option value="1">小さい</option>
            <option value="2">中くらい</option>
            <option value="3">大きい</option>
          </select>
        </div>

        <div>
          <label htmlFor="time">時間帯:</label>
          <select id="time" name="time" onChange={handleChange}>
            <option value="1">早朝</option>
            <option value="2">昼間</option>
            <option value="3">夕方</option>
          </select>
        </div>

        <div>
          <label htmlFor="season">季節:</label>
          <select id="season" name="season" onChange={handleChange}>
            <option value="1">春</option>
            <option value="2">夏</option>
            <option value="3">秋</option>
            <option value="4">冬</option>
          </select>
        </div>

        <div>
          <label htmlFor="location">場所:</label>
          <select id="location" name="location" onChange={handleChange}>
            <option value="1">沖</option>
            <option value="2">岸</option>
            <option value="3">中層</option>
          </select>
        </div>

        <button type="submit">オススメのルアーを見つける</button>
      </form>
    </div>
  );
};

export default App;
