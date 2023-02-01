import React from "react";
import { promoCodes } from "../dummyData";

const PricePage = (props) => {
  const {
    total,
    setTotal,
    subTotal,
    error,
    success,
    promoCodeVals,
    promoCodeApplied,
    setPromoCodeVals,
    setPromoCodeApplied,
    setError,
    setSuccess,
  } = props;

  //____________________________________________________________________________________________________
  // this function is used to handle the promocode type by the user in promocode field.
  const handlePromoCode = (e) => {
    if (e.target.value === "") setError("");
    setPromoCodeVals({});
    setSuccess("");
    setTotal(0);
    setPromoCodeApplied(e.target.value);
  };

  //____________________________________________________________________________________________________
  // this function is used to check, if the promocode typed by the user is valid promocode or not.
  // and if it is valid, then calculate price after discount, otherwise gives error.
  const handleClick = (e) => {
    let promocodeValues = {};
    setError("");
    setSuccess("");
    promoCodes.map((promocode) => {
      if (promocode.code === promoCodeApplied) {
        promocodeValues = promocode;
        setPromoCodeVals(promocode);
      }
    });
    if (JSON.stringify(promocodeValues) === "{}") {
      setError("Invalid Promocode");
      setPromoCodeVals({});
    } else if (
      JSON.stringify(promocodeValues) !== "{}" &&
      subTotal < promocodeValues.minVal
    ) {
      setError(`Minimum amt for this promocode is $${promocodeValues.minVal}`);
      setPromoCodeVals({});
    } else {
      if (JSON.stringify(promocodeValues) !== "{}") {
        setTotal(subTotal * ((100 - promocodeValues.discount) / 100));
        setSuccess("Promocode applied successfully!!");
      } else setTotal(0);
    }
  };

  //____________________________________________________________________________________________________
  // JSX for promocode card.
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3 col-12"></div>
      <div className="col-md-6 col-lg-6 col-12 mx-auto border rounded-5 pt-5 px-5 pb-4 my-5 shadow">
        <div className="row border-bottom pb-4">
          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apply Promo Code"
                aria-label=""
                value={promoCodeApplied}
                disabled={subTotal == 0}
                onChange={handlePromoCode}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleClick}
                disabled={promoCodeApplied === ""}
              >
                Apply
              </button>
            </div>
            {error !== "" && (
              <div class="text-danger mx-1">
                <small>{error}</small>
              </div>
            )}
            {success !== "" && (
              <div class="text-success mx-1">
                <small>{success}</small>
              </div>
            )}
          </div>
        </div>

        <div className="row border-bottom py-4">
          <div className="col">Discount</div>
          <div className="col text-end">
            {JSON.stringify(promoCodeVals) === "{}"
              ? 0
              : promoCodeVals?.discount}
            %
          </div>
        </div>

        <div className="row pt-4">
          <div className="col">
            <strong>To Pay</strong>
          </div>
          <div className="col text-end">
            <strong>
              $
              {total === 0 && promoCodeVals?.discount != 100
                ? subTotal.toFixed(2)
                : total.toFixed(2)}
            </strong>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-12"></div>
    </div>
  );
};

export default PricePage;
