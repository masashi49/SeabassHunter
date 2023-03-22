import { SelectedOptions } from "../pages/types";

export interface Point {
  [key: string]: number;
}

export interface LurePoints {
  [lure: string]: SelectedOptions;
}

export interface Points {
  [key: string]: {
    [key: string]: {
      [key: string]: number;
    };
  };
}
export const pointData = {
  // ルアーパターン1: ミノー
  ストレートミノー: {
    weather: { 1: 2, 2: 1, 3: 0, 4: 1, 5: 0 },
    clarity: { 1: 2, 2: 1, 3: 1, 4: 2, 5: 2 },
    bait: { 1: 1, 2: 2, 3: 1, 4: 1, 5: 0 },
    time: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 0 },
    season: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 0 },
    location: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 0 },
  },
  // ルアーパターン2: シンキングペンシル
  シンキングペンシル: {
    weather: { 1: 1, 2: 2, 3: 1, 4: 2, 5: 0 },
    clarity: { 1: 1, 2: 2, 3: 1, 4: 2, 5: 2 },
    bait: { 1: 2, 2: 1, 3: 2, 4: 1, 5: 0 },
    time: { 1: 1, 2: 2, 3: 1, 4: 1, 5: 0 },
    season: { 1: 1, 2: 2, 3: 1, 4: 1, 5: 0 },
    location: { 1: 1, 2: 2, 3: 1, 4: 1, 5: 0 },
  },
  // 他のルアーパターンも同様に追加していく
};
