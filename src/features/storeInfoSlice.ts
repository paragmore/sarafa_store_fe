import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, StoreInfoState } from "../core/models/storeInfo";

const initialState: StoreInfoState = {
  id: "0",
  name: "",
  logoUrl: "",
  catalogs: [],
  items:[],
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
    addAllItems: (state, action: PayloadAction<Item[]>) =>{
      state.items = action.payload;
    }
  },
});

export const { clearStoreInfo, addStoreInfo, addAllItems } = storeInfoSlice.actions;

export default storeInfoSlice.reducer;
