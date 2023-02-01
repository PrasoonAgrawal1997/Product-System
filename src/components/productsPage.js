import React, { useState, useEffect } from "react";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import { productData } from "../dummyData";

const ProductsPage = (props) => {
  const { subTotal, setSubTotal } = props;
  const [productsAdded, setProductsAdded] = useState([]);

  //____________________________________________________________________________________________________
  // this function is used to add or remove product, and called when we click on add or remove icons
  const handleAddRemoveProduct = (productId, operation) => {
    if (operation === "add") setProductsAdded([...productsAdded, productId]);
    else {
      const addedProductsCopy = [...productsAdded];
      const index = addedProductsCopy.indexOf(productId);
      if (index !== -1) addedProductsCopy.splice(index, 1);
      setProductsAdded(addedProductsCopy);
    }
  };

  //____________________________________________________________________________________________________
  // function to get count of how many times particular product added.
  const getOccurrence = (addedProducts, productToFind) => {
    var count = 0;
    addedProducts.forEach((product) => product === productToFind && count++);
    return count;
  };

  //____________________________________________________________________________________________________
  // this useEffect will be called everytime when product is added, to calculate the total price
  useEffect(() => {
    let total = 0;
    productData?.map((product) => {
      total += getOccurrence(productsAdded, product.id) * product.price;
    });
    setSubTotal(total);
  }, [productsAdded]);

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
            <td className="text-center py-3">
              {getOccurrence(productsAdded, product.id)}
            </td>
            <td className="text-center py-3">
              <PlusCircle
                className="mx-3"
                onClick={() => handleAddRemoveProduct(product.id, "add")}
              />
              <DashCircle
                onClick={() => handleAddRemoveProduct(product.id, "remove")}
              />
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
            <strong>${subTotal}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductsPage;
