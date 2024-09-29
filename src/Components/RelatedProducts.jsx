import React, { useContext, useState, useEffect } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/shopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(
      (product) => product.category === category
    );
    setRelatedProducts(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
