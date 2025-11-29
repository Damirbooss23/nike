import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #e3e3e3",
        background: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p style={{ color: "#555" }}>{product.description}</p>

      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        {product.price}$
      </div>
    </div>
  );
};

export default ProductCard;
