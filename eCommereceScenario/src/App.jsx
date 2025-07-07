import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./question01";
import LikeButton from "./question02";
import SearchBar from "./question03";
import { ThemeProvider, useTheme } from "./question04";
import PrivateRoute from "./question05";
import "./App.css";

const Login = () => <h2 className="page-heading">Please log in to continue</h2>;
const Checkout = () => <h2 className="page-heading">Welcome to the Checkout Page</h2>;

function MainContent() {
  const [search, setSearch] = useState("");
  const [isAuthenticated] = useState(true);
  const { theme } = useTheme();

  return (
    <div className={`app-wrapper ${theme}`}>
      <div className="card">
        <h1 className="title">🛒 E-Commerce App</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <ProductCard name="Running Shoes" price={1299} />
        <LikeButton />
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
