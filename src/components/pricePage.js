import React from "react";
import { promoCodes } from "../dummyData";

const PricePage = (props) => {
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
              />
              <button className="btn btn-primary" type="button">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="row border-bottom py-4">
          <div className="col">Discount</div>
          <div className="col text-end">0 %</div>
        </div>

        <div className="row pt-4">
          <div className="col">
            <strong>To Pay</strong>
          </div>
          <div className="col text-end">
            <strong>$2500</strong>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-12"></div>
    </div>
  );
};

export default PricePage;
