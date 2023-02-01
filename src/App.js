import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/productsPage";
import PricePage from "./components/pricePage";

const App = () => {
  // variables used
  const [subTotal, setSubTotal] = useState(0);

  return (
    <div class="container">
      <ProductsPage subTotal={subTotal} setSubTotal={setSubTotal} />
      <PricePage />
    </div>
  );
};

export default App;
