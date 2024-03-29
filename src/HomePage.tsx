import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsappRedirectionButton } from "./core/components/WhatsappRedirectionButton";
import { addAllItems, addStoreInfo } from "./redux/storeInfoSlice";
import { StoreRepo } from "./repos/StoreRepo";
import { useAppDispatch } from "./store";
import WhatsAppSVG from './core/icons/svgs/whatsappIcon.svg';

export const HomePage = () => {
  return (
    <>
      <div>
        <Body />
        <WhatsappRedirectionButton />
      </div>
    </>
  );
};
