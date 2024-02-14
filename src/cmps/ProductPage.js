import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import Form from "./Form";

const formVar = {
  hide: {
    x: "50vw",
    y: "-100vh",
    translateX: "-50%",
    translateY: "-50%",
  },
  show: {
    x: "50vw",
    y: "50vh",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      type: "spring",
      stiffness: 40,
    },
  },
};

function ProductPage() {
  const productId = useParams().productId;
  const [product, setProduct] = useState({});
  function getProduct() {
    axios
      .get("https://api.escuelajs.co/api/v1/products/" + productId)
      .then((res) => setProduct(res.data));
  }
  useEffect(() => {
    getProduct();
  }, []);

  const p_img = document.querySelector(".p-img");

  const imageMap =
    Object.keys(product).length >= 1 &&
    product.images.map((img, index) => {
      return (
        <>
          <div className="w-full aspect-auto cursor-pointer">
            <img
              className={`r-img w-full h-full object-contain rounded-lg ${
                index === 0 ? "active" : ""
              }`}
              src={Object.keys(product).length >= 1 ? img : null}
              onClick={(e) => test(e)}
              alt=""
            ></img>
          </div>
        </>
      );
    });

  function test(e) {
    const r_img = document.querySelectorAll(".r-img");
    r_img.forEach((img) => {
      img.classList.remove("active");
    });
    e.target.classList.add("active");
    p_img.src = e.target.src;
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      {isOpen && (
        <motion.div
          className="w-40 h-40 bg-blue-500 absolute"
          variants={formVar}
          initial="hide"
          animate="show"
        >
          <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </motion.div>
      )}
      <section
        className="product-page-section w-full mt-5"
        style={{ height: "500px" }}
      >
        <div className="h-full m-auto flex gap-4" style={{ width: "95%" }}>
          <div className="product-page-images w-1/2 h-full flex gap-2 ">
            <div className="principal-image h-full w-4/5 aspect-square cursor-pointer ">
              <img
                className="p-img w-full h-full object-cover rounded-lg"
                src={Object.keys(product).length >= 1 && product.images[0]}
              ></img>
            </div>
            <div className="rest-images h-full w-1/5 flex flex-col gap-2 overflow-scroll">
              {Object.keys(product).length >= 1 && imageMap}
            </div>
          </div>
          <div className="product-page-infos w-1/2 h-full ">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="product-title-price">
                <p className="text-5xl">{product.title}</p>
                <p className="mt-2 text-3xl">{product.price} DA</p>
              </div>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              <div
                className="buy-now-button self-end w-full h-10 bg-green-600 hover:bg-green-700 text-white rounded-sm"
                onClick={() => setIsOpen(true)}
              >
                <button className="w-full h-full flex items-center justify-center gap-2 text-lg">
                  <span>
                    <FaCartShopping />
                  </span>
                  <span>اشتري الأن</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
