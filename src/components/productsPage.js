import React from "react";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import { productData } from "../dummyData";

const ProductsPage = (props) => {
  //____________________________________________________________________________________________________
  // JSX for product table.
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th className="py-3"></th>
          <th className="py-3" scope="col">
            Product ID
          </th>
          <th className="py-3" scope="col">
            Product Name
          </th>
          <th className="text-center py-3" scope="col">
            Quantity
          </th>
          <th className="text-center py-3" scope="col">
            Add/Remove Product
          </th>
          <th className="text-end py-3" scope="col">
            Price(per product/per month)
          </th>
        </tr>
      </thead>
      <tbody>
        {productData.map((product, index) => (
          <tr>
            <td className="py-3">{index + 1}.</td>
            <td className="py-3">{product.id}</td>
            <td className="py-3">{product.name}</td>
            <td className="text-center py-3">1</td>
            <td className="text-center py-3">
              <PlusCircle className="mx-3" />
              <DashCircle />
            </td>
            <td className="text-end py-3">${product.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="table-active">
          <td className="py-3" colspan="4"></td>
          <td className="text-center py-3">
            <strong>SUBTOTAL</strong>
          </td>
          <td className="text-end py-3">
            <strong>$2500</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductsPage;
