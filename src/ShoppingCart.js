import React, { useState } from "react";

const ShoppingCart = () => {
  const initialCart = [
    {
      id: 1,
      title: "Product",
      description: "Desc",
    },
    {
      id: 2,
      title: "Arroz",
      description: "2x1",
    },
    {
      id: 3,
      title: "Sal",
      description: "Mejor",
    },
  ];
  const [cart, setCart] = useState(initialCart);

  const deleteP = (id) => {
    const change = cart.filter((product) => product.id !== id);
    setCart(change);
  };
  const add = (product) => {
    product.id = Date.now();
    const change = [product, ...cart];
    setCart(change);
  };

  const update = (edit) => {
    const change = cart.map((product) =>
      product.id === edit.id ? edit : product
    );
    setCart(change);
  };

  return (
    <div>
      <button
        onClick={() => add({ title: "nuevo", description: "Nueva Desc" })}
      >
        Add
      </button>
      {cart.map((product) => (
        <div key={product.id}>
          <h1>
            {product.id} {product.title}
          </h1>
          <p>{product.description}</p>
          <button onClick={() => deleteP(product.id)}>Delete</button>
          <button
            onClick={() =>
              update({
                id: product.id,
                title: "update title",
                description: "update Desc",
              })
            }
          >
            Update
          </button>
        </div>
      ))}
      <br></br>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default ShoppingCart;
