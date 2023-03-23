// types.ts
export type Option = {
  id: number;
  description?: string;
};

export type Question = {
  id: string;
  options: Option[];
};

export type SelectedOptions = {
  [key: string]: number;
};

export type LurePoints = {
  [key: string]: {
    [key: string]: number;
  };
};

export type OptionGroup = {
  id: string;
  options: Option[];
};
