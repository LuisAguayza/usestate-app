import React, { useState } from "react";

const initialProduct = {
  title: "titulo",
  description: "descripcion",
  //   image: {
  //     small: "",
  //     medium: "",
  //     large: "",
  //   },
};
const ProductApp = () => {
  const [product, setProduct] = useState(initialProduct);
  const update = (atributo, valor) => {
    setProduct({
      ...product,
      [atributo]: valor,
    });
  };
  return (
    <div>
      <button onClick={() => update("description", "Nueva D")}>Update</button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      {/* <img src={product.image?.medium} alt="product" /> */}
    </div>
  );
};

export default ProductApp;
