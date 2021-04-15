import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { getProduct } from "../../context/Products/Products.service";
import { CartContext } from "../../context/Cart/CartContext";

const ProductDetailsContainer = ({ match }) => {
  const { id: productId } = match.params;
  const [currentProductDetail, setCurrentProductDetail] = useState({});
  const cartContext = useContext(CartContext);
  const quantity = cartContext.getQuantityOfProduct(productId);

  useEffect(() => {
    async function getProductById(id) {
      const product = await getProduct(id);
      setCurrentProductDetail(product);
    }
    if (productId) {
      getProductById(productId);
    }
  }, [productId]);

  const addToCartProduct = (product, quantity) => {
    if (quantity) {
      cartContext.addItemToCart(product, quantity);
    }
  };

  return (
    <ProductDetail
      product={currentProductDetail}
      productQuantity={quantity}
      addToCartProduct={addToCartProduct}
    />
  );
};

export default withRouter(ProductDetailsContainer);
