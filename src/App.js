import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./cmps/Home";
import ProductPage from "./cmps/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
