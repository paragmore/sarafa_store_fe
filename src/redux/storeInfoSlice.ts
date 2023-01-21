import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, StoreInfoState } from "../core/models/storeInfo";

const initialState: StoreInfoState = {
  id: "",
  name: "",
  logoUrl: "",
  catalogs: [],
  items: [],
  sC: [],
};
export const storeInfoSlice = createSlice({
  name: "storeInfo",
  initialState: initialState,
  reducers: {
    clearStoreInfo: (state) => {
      state = initialState;
    },
    addStoreInfo: (state, action: PayloadAction<StoreInfoState>) => {
      return (state = action.payload);
    },
    addStoreId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    addAllItems: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { clearStoreInfo, addStoreInfo, addAllItems, addStoreId } =
  storeInfoSlice.actions;

export default storeInfoSlice.reducer;
