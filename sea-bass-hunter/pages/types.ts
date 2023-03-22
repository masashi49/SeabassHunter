// types.ts
export type Option = {
  id: number;
  text: string;
  description: string;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
};

export type SelectedOptions = {
  [key: string]: number;
};

export type Point = {
  [key: string]: number;
};

export type LurePoints = {
  [key: string]: Point;
};

export type OptionGroup = {
  title: string;
  id: number;
  description: string;
  options: {
    [key: string]: Option[];
  };
};
