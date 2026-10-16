// Data structure returned by REST Countries API
export type Country = {
  names: {
    common: string;
  };
  codes: {
    alpha_2: string;
  };
  flag: {
    emoji: string;
  };
  region: string;
};
