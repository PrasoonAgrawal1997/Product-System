import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/productsPage";
import PricePage from "./components/pricePage";

const App = () => {
  return (
    <div class="container">
      <ProductsPage />
      <PricePage />
    </div>
  );
};

export default App;
