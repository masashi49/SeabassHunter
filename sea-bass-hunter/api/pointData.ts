export const sizeData = {
  小: { 1: 2, 2: 3, 3: 1, 4: 1, 5: 0 },
  中: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 0 },
  大: { 1: 1, 2: 2, 3: 3, 4: 1, 5: 0 },
} as const;

// colorData.ts
export const colorData = {
  イエロー: { 1: 2, 2: 3, 3: 1, 4: 1, 5: 0 },
  グリーン: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 0 },
  ブルー: { 1: 1, 2: 2, 3: 3, 4: 1, 5: 0 },
} as const;

// actionData.ts
export const actionData = {
  水面: { 1: 2, 2: 3, 3: 1, 4: 1, 5: 0 },
  中層: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 0 },
  底層: { 1: 1, 2: 2, 3: 3, 4: 1, 5: 0 },
} as const;

export const pointData = {
  ストレートミノー: {
    size: "中",
    color: "シルバー",
    action: "ストレート",
    weather: { 1: 3, 2: 1, 3: 0, 4: 1, 5: 0 },
    clarity: { 1: 3, 2: 2, 3: 1, 4: 2, 5: 2 },
    bait: { 1: 2, 2: 3, 3: 1, 4: 1, 5: 0 },
    time: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 0 },
    season: { 1: 3, 2: 2, 3: 1, 4: 1, 5: 0 },
    location: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 0 },
  },
  シンキングペンシル: {
    size: "小",
    color: "ゴールド",
    action: "シンキング",
    weather: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 0 },
    clarity: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 2 },
    bait: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 0 },
    time: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 0 },
    season: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 0 },
    location: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 0 },
  },
  クランクベイト: {
    weather: { 1: 2, 2: 3, 3: 0, 4: 0, 5: 1 },
    clarity: { 1: 1, 2: 2, 3: 3, 4: 1, 5: 1 },
    bait: { 1: 3, 2: 1, 3: 2, 4: 0, 5: 1 },
    time: { 1: 2, 2: 1, 3: 3, 4: 0, 5: 0 },
    season: { 1: 1, 2: 3, 3: 2, 4: 0, 5: 1 },
    location: { 1: 2, 2: 3, 3: 1, 4: 0, 5: 1 },
    size: "大",
    color: "レッド",
    action: "浮き沈み",
  },
  トップウォーター: {
    weather: { 1: 3, 2: 1, 3: 1, 4: 0, 5: 1 },
    clarity: { 1: 1, 2: 1, 3: 2, 4: 3, 5: 1 },
    bait: { 1: 1, 2: 3, 3: 0, 4: 2, 5: 1 },
    time: { 1: 3, 2: 0, 3: 1, 4: 2, 5: 1 },
    season: { 1: 3, 2: 0, 3: 1, 4: 2, 5: 1 },
    location: { 1: 3, 2: 0, 3: 2, 4: 1, 5: 1 },
    size: "小",
    color: "グリーン",
    action: "水面",
  },
  バイブレーション: {
    weather: { 1: 1, 2: 3, 3: 2, 4: 1, 5: 0 },
    clarity: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 1 },
    bait: { 1: 1, 2: 1, 3: 0, 4: 3, 5: 2 },
    time: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 0 },
    season: { 1: 1, 2: 1, 3: 3, 4: 2, 5: 0 },
    location: { 1: 1, 2: 1, 3: 3, 4: 2, 5: 0 },
    size: "中",
    color: "ゴールド",
    action: "振動",
  },
  // 7番目のルアー
  スピナーベイト: {
    weather: { 1: 2, 2: 1, 3: 3, 4: 0, 5: 1 },
    clarity: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 1 },
    bait: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 3 },
    time: { 1: 2, 2: 1, 3: 1, 4: 3, 5: 0 },
    season: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 3 },
    location: { 1: 2, 2: 1, 3: 1, 4: 3, 5: 0 },
    size: "大",
    color: "ホワイト",
    action: "回転",
  },
  // 8番目のルアー
  ジグヘッド: {
    weather: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 0 },
    clarity: { 1: 3, 2: 1, 3: 2, 4: 1, 5: 1 },
    bait: { 1: 1, 2: 3, 3: 2, 4: 0, 5: 1 },
    time: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 1 },
    season: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 1 },
    location: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 1 },
    size: "小",
    color: "ブラック",
    action: "沈む",
  },
  // 9番目のルアー
  ソフトベイト: {
    weather: { 1: 2, 2: 1, 3: 3, 4: 1, 5: 0 },
    clarity: { 1: 1, 2: 1, 3: 3, 4: 2, 5: 1 },
    bait: { 1: 1, 2: 2, 3: 1, 4: 1, 5: 3 },
    time: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 3 },
    season: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 3 },
    location: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 3 },
    size: "中",
    color: "グリーン",
    action: "リアル",
  },
  // 10番目のルアー
  フロッグ: {
    weather: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 0 },
    clarity: { 1: 1, 2: 1, 3: 1, 4: 3, 5: 2 },
    bait: { 1: 1, 2: 3, 3: 1, 4: 1, 5: 1 },
    time: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 1 },
    season: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 1 },
    location: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 1 },
    size: "小",
    color: "イエロー",
    action: "水面",
  },
} as const;
