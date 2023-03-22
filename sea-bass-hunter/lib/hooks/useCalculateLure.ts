<<<<<<< HEAD
import pointData from "../../api/pointData";

type Lure = keyof typeof pointData;
export type OptionId = keyof typeof pointData.ストレートミノー;

const useCalculateLure = (
  lure: Lure,
=======
import options from "../../api/options";
import points from "../../api/points";

type OptionId = keyof typeof points.lureA;

const useCalculateLure = (
  lure: string,
>>>>>>> b3525221641c727ae36b993334a4800829568f3c
  selectedOptions: Record<OptionId, number>
): number => {
  let totalPoints = 0;

  for (const key in selectedOptions) {
<<<<<<< HEAD
    totalPoints += pointData[lure][key][selectedOptions[key]];
=======
    totalPoints += points[lure][key][selectedOptions[key]];
>>>>>>> b3525221641c727ae36b993334a4800829568f3c
  }

  return totalPoints;
};

export const calculateLure = (
  selectedOptions: Record<OptionId, number>
<<<<<<< HEAD
): Lure => {
  let bestLure: Lure = "ミノー";
  let maxPoints = -1;

  for (const lure in pointData) {
    const lurePoints = useCalculateLure(lure as Lure, selectedOptions);

    if (lurePoints > maxPoints) {
      maxPoints = lurePoints;
      bestLure = lure as Lure;
=======
): string => {
  let bestLure = "";
  let maxPoints = -1;

  for (const lure in points) {
    const lurePoints = calculatePoints(lure, selectedOptions);

    if (lurePoints > maxPoints) {
      maxPoints = lurePoints;
      bestLure = lure;
>>>>>>> b3525221641c727ae36b993334a4800829568f3c
    }
  }

  return bestLure;
};
