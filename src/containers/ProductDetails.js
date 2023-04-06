import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  console.log(product);

  const fetchProductDetails = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/1")
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
}

export default ProductDetails;
