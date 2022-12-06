import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ProductCategoryPage } from "./components/Body/ProductCategoryPage";
import { ProductDetailsPage } from "./components/Body/ProductDetailsPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DEFAULT_THEME } from "./core/themes/DefaultTheme";
import { LoggedInPage } from "./LoggedInPage";
import { useAppSelector } from "./store";

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Header />
      <Router>
        <Routes>
          <Route path="/:storeId/item/:product" element={<ProductDetailsPage />} />
          <Route path="/:storeId/:category" element={<ProductCategoryPage />} />
          <Route path="/:storeId" element={<LoggedInPage />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
