import options from "../../api/options";
import points from "../../api/points";

type OptionId = keyof typeof points.lureA;

const useCalculateLure = (
  lure: string,
  selectedOptions: Record<OptionId, number>
): number => {
  let totalPoints = 0;

  for (const key in selectedOptions) {
    totalPoints += points[lure][key][selectedOptions[key]];
  }

  return totalPoints;
};

export const calculateLure = (
  selectedOptions: Record<OptionId, number>
): string => {
  let bestLure = "";
  let maxPoints = -1;

  for (const lure in points) {
    const lurePoints = calculatePoints(lure, selectedOptions);

    if (lurePoints > maxPoints) {
      maxPoints = lurePoints;
      bestLure = lure;
    }
  }

  return bestLure;
};
