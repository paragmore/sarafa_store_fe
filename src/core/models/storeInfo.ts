export interface StoreInfoState {
  id: string;
  name: string;
  catalogs: Catalog[];
  logoUrl: string;
  sC: string[];
  items: Product[]
}

export interface Catalog {
  id: string;
  name: string;
  desc: string;
  images: string[];
  items: Product[];
}

export interface Product {
  storeId: string;
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
