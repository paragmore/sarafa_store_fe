import { createMuiTheme } from "@material-ui/core";
import React, { useEffect } from "react";
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

function App() {
  // const { storeId } = useParams();
  const storeId = 'cnzH4PCuSwfnYHS9l4OJhyt1rXE2'
  const location= window.location.origin
  const storeRepo = new StoreRepo();
  const { addStoreInfoH, addStoreIdH } = useStoreInfo();
  useEffect(() => {
    console.log('hi', location)
    if (storeId) {
      addStoreIdH(storeId)
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
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/product/:product"
            element={<ProductDetailsPage />}
          />
          <Route
            path="/catalog/:category"
            element={<ProductCatalogPage catalogName={"ring"} />}
          />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
