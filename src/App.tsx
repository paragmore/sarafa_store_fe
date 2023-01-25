import {
  BottomNavigation,
  BottomNavigationAction,
  createMuiTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ProductCatalogPage } from "./components/Body/ProductCatalogPage";
import { ProductDetailsPage } from "./components/Body/ProductDetailsPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DEFAULT_THEME } from "./core/themes/DefaultTheme";
import { useStoreInfo } from "./hooks/storeHook";
import { HomePage } from "./HomePage";
import { StoreRepo } from "./repos/StoreRepo";
import { useAppSelector } from "./store";
import { StoriesPage } from "./components/Stories/StoriesPage";
import HomeIcon from "./core/icons/svgs/HomeIcon";
import HeartIcon from "./core/icons/svgs/HeartIcon";
import UserIcon from "./core/icons/svgs/UserIcon";
import { NavLink } from "react-router-dom";

function App() {
  // const { storeId } = useParams();
  const storeId = "cnzH4PCuSwfnYHS9l4OJhyt1rXE2";
  const location = window.location.origin;
  const storeRepo = new StoreRepo();
  const [bottomNavigationValue, setBottomNavigationValue] = useState('home')
  const { addStoreInfoH, addStoreIdH } = useStoreInfo();
  useEffect(() => {
    console.log("hi", location);
    if (storeId) {
      addStoreIdH(storeId);
      storeRepo.getStoreInfo(storeId).then((data) => {
        data && addStoreInfoH(data);
      });
      // storeRepo.getAllItems(storeId).then((data) => {
      //   data && dispatch(addAllItems(data));
      // });
    }
  }, [location, storeId]);
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />

          <Route path="/product/:product" element={<ProductDetailsPage />} />
          <Route
            path="/catalog/:category"
            element={<ProductCatalogPage catalogName={"ring"} />}
          />
          <Route path="/story" element={<StoriesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <BottomNavigation
        showLabels
        value={bottomNavigationValue}
        onChange={(event, newValue) => {
          console.log(newValue)
          setBottomNavigationValue(newValue);
        }}
        style={{
          position: "fixed",
          zIndex: 3,
          bottom: 0,
          width: "100%",
          height: "45px",
        }}
      >
        <BottomNavigationAction value={'home'} icon={<HomeIcon />} />
        <BottomNavigationAction value={'like'} icon={<HeartIcon />} />
        <BottomNavigationAction value={'account'} icon={<UserIcon />} />
      </BottomNavigation>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
