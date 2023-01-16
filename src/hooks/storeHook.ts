import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import { StoreInfoState } from "../core/models/storeInfo";
import {
  addStoreInfo,
  addAllItems,
  clearStoreInfo,
} from "../redux/storeInfoSlice";

export function useStoreInfo() {
  const dispatch = useDispatch();

  const state = useSelector<
    {
      storeInfo: StoreInfoState;
    },
    StoreInfoState
  >((state) => state.storeInfo, shallowEqual);

  async function addStoreInfoH(data: StoreInfoState) {
    dispatch(addStoreInfo(data));
  }
  async function clearStoreInfoH() {
    dispatch(clearStoreInfo());
  }

  return {
    storeInfo: state,
    addStoreInfoH,
    clearStoreInfoH
  };
}
