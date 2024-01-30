import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

function Home() {
  const btns = document.querySelectorAll(".category-button");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  function getProductsByCategory(id) {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((res) => {
        setProducts([]);
        setTimeout(() => {
          setProducts(res.data);
        }, 1000);
      });
  }

  function getAllProducts() {
    axios
      .get("https://api.escuelajs.co/api/v1/products/?limit=10")
      .then((res) => setProducts(res.data));
  }

  useEffect(() => {
    getAllProducts();
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <>
      <div className="all-page relative">
        <div className="h-screen">
          <Navbar />
          <HeroSection />
        </div>
        <main className="w-11/12 m-auto my-8">
          <div className="categories flex w-full justify-center flex-wrap">
            <button
              className="category-button active px-8 py-2 w-fit"
              onClick={getAllProducts}
            >
              All
            </button>
            {categories.map((c) => {
              return (
                <button
                  key={c.id}
                  className="category-button px-8 py-2 w-fit"
                  onClick={() => getProductsByCategory(c.id)}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
          <div
            className="all-products flex flex-wrap justify-center gap-3 mt-8"
            id="products"
          >
            {products.length >= 1 ? (
              products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })
            ) : (
              <div class="loader"></div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
