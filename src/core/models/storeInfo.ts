export interface StoreInfoState {
  id: string;
  name: string;
  catalogs: Catalog[];
  logoUrl: string;
  sC: string[];
  items: Item[]
}

export interface Catalog {
  id: string;
  name: string;
  desc: string;
  images: string[];
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  desc: string;
  images: [string];
  wtRange: WeightRange;
  sC: string;
  gender: string;
  views: number;
  likes: number;
}

export interface WeightRange {
  max: number;
  min: number;
}
