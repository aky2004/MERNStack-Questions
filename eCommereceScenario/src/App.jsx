import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./question01";
import SearchBar from "./question03";
import { ThemeProvider, useTheme } from "./question04";
import PrivateRoute from "./question05";
import "./App.css";

const Login = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="center">
      <h2>Login</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const Checkout = () => <h2>Checkout</h2>;

function MainContent() {
  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toggleTheme } = useTheme();
  const [products, setProducts] = useState([
    { id: 1, name: "Shoes", price: 1299, isLiked: false },
    { id: 2, name: "ToothPick", price: 99, isLiked: false },
    { id: 3, name: "HandGrips", price: 499, isLiked: true },
  ]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLikeToggle = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, isLiked: !p.isLiked } : p
    ));
  };

  return (
    <div className="center">
      <h1>E-Commerce</h1>
      <div className="buttons">
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <SearchBar value={search} onChange={setSearch} />
      <div className="products">
        {filteredProducts.map(p => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            isLiked={p.isLiked}
            onLikeToggle={() => handleLikeToggle(p.id)}
          />
        ))}
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;