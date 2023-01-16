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
import { LoggedInPage } from "./LoggedInPage";
import { StoreRepo } from "./repos/StoreRepo";
import { useAppSelector } from "./store";

function App() {
  const { storeId } = useParams();
  const location= window.location.origin
  const storeRepo = new StoreRepo();
  const { addStoreInfoH } = useStoreInfo();
  useEffect(() => {
    console.log('hi', location)
    if (storeId) {
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
          <Route
            path="/:storeId/item/:product"
            element={<ProductDetailsPage />}
          />
          <Route
            path="/:storeId/:category"
            element={<ProductCatalogPage catalogName={"ring"} />}
          />
          <Route path="/:storeId" element={<LoggedInPage />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
