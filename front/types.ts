export interface Info {
  borders: Border[];
  population: Population;
  flag: Flag;
}

export interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: Region;
  borders: null;
}

export enum Region {
  Americas = "Americas",
}

export interface Flag {
  error: boolean;
  msg: string;
  data: FlagData;
}

export interface FlagData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export interface Population {
  error: boolean;
  msg: string;
  data: PopulationData;
}

export interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

export interface PopulationCount {
  year: number;
  value: number;
}

export interface Country {
  countryCode: string;
  name: string;
}
