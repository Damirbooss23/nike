import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";

const rootEl = document.getElementById("root");
if (!rootEl) {
  // If there is no #root in the HTML, create one (useful for simple setups)
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
