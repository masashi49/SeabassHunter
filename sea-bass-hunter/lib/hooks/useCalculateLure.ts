import { pointData as rawData } from "../../api/pointData";
import { SelectedOptions } from "../../pages/types";

type Lure = keyof typeof rawData;
export type OptionId = keyof SelectedOptions;

export type PointData = {
  [key in OptionId]: {
    [pointId: number]: number;
  };
};

const useCalculateLure = (
  lure: Lure,
  selectedOptions: Record<OptionId, number>
): number => {
  let totalPoints = 0;

  for (const key in selectedOptions) {
    totalPoints += pointData[lure][key][selectedOptions[key]];
  }

  return totalPoints;
};

export const calculateLure = (
  selectedOptions: Record<OptionId, number>
): Lure => {
  let bestLure: Lure = "ストレートミノー";
  let maxPoints = -1;

  for (const lure in rawData) {
    const lurePoints = useCalculateLure(lure as Lure, selectedOptions);

    if (lurePoints > maxPoints) {
      maxPoints = lurePoints;
      bestLure = lure as Lure;
    }
  }

  return bestLure;
};

const pointData: Record<Lure, PointData> = rawData;
