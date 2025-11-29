import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Home</h1>
      <p>Welcome to the project. Use the navigation below:</p>
      <nav>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default App;
