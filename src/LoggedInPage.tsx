import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { addAllItems, addStoreInfo } from "./features/storeInfoSlice";
import { StoreRepo } from "./repos/StoreRepo";
import { useAppDispatch } from "./store";

export const LoggedInPage = () => {
  const { storeId } = useParams();
  const dispatch = useAppDispatch();
  const storeRepo = new StoreRepo();
  useEffect(() => {
    if (storeId) {
      storeRepo.getStoreInfo(storeId).then((data) => {
        data && dispatch(addStoreInfo(data));
      });
      storeRepo.getAllItems(storeId).then((data) => {
        data && dispatch(addAllItems(data));
      });
    }
  }, [storeId]);

  return (
    <>
      <div>
        <Body />
      </div>
    </>
  );
};
