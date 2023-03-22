import pointData from "../../api/pointData";

type Lure = keyof typeof pointData;
export type OptionId = keyof typeof pointData.ストレートミノー;

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
  let bestLure: Lure = "ミノー";
  let maxPoints = -1;

  for (const lure in pointData) {
    const lurePoints = useCalculateLure(lure as Lure, selectedOptions);

    if (lurePoints > maxPoints) {
      maxPoints = lurePoints;
      bestLure = lure as Lure;
    }
  }

  return bestLure;
};
