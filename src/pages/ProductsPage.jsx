import React from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1528701800489-20be287f9f38?q=80&w=1932&auto=format",
      title: "Nike Air",
      category: "Shoes",
      description: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1528701800489-20be287f9f38?q=80&w=1932&auto=format",
      title: "Nike Air",
      category: "Shoes",
      description: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1528701800489-20be287f9f38?q=80&w=1932&auto=format",
      title: "Nike Air",
      category: "Shoes",
      description: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Products Page</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
