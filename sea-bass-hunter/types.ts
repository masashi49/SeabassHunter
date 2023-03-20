export interface Option {
  id: number;
  label: string;
}

export interface Options {
  [key: string]: Option[];
}

export interface SelectedOptions {
  weather: number;
  clarity: number;
  bait: number;
}

export interface Point {
  weather: { "1": number; "2": number; "3": number };
  clarity: { "1": number; "2": number; "3": number };
  bait: { "1": number; "2": number; "3": number };
}

export interface Points {
  [key: string]: Point[];
}
