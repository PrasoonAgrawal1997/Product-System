import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/productsPage";
import PricePage from "./components/pricePage";

const App = () => {
  // variables used
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [promoCodeVals, setPromoCodeVals] = useState({});
  const [promoCodeApplied, setPromoCodeApplied] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <div class="container">
      <ProductsPage
        subTotal={subTotal}
        setError={setError}
        setTotal={setTotal}
        setSuccess={setSuccess}
        setSubTotal={setSubTotal}
        setPromoCodeVals={setPromoCodeVals}
        setPromoCodeApplied={setPromoCodeApplied}
      />
      <PricePage
        total={total}
        error={error}
        success={success}
        subTotal={subTotal}
        promoCodeVals={promoCodeVals}
        promoCodeApplied={promoCodeApplied}
        setTotal={setTotal}
        setError={setError}
        setSuccess={setSuccess}
        setPromoCodeVals={setPromoCodeVals}
        setPromoCodeApplied={setPromoCodeApplied}
      />
    </div>
  );
};

export default App;
