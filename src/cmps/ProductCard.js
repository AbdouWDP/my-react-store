import image from "../element5-digital-2cwqJgtQ3D0-unsplash.jpg";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { product } = props;

  return (
    <>
      <div
        className="product-card w-56 flex flex-col justify-between"
        style={{ aspectRatio: "1/1.5" }}
      >
        <div className="image-section w-full aspect-square relative overflow-hidden">
          <div className="wishlist-button absolute top-2 bg-white aspect-square w-10 flex justify-center items-center text-md cursor-pointer hover:text-red-500 text-gray-300">
            <FaHeart />
          </div>
          <Link to={`/product/${product.id}`}>
            <div className="cursor-pointer w-full h-full">
              <img
                src={product.images[0]}
                alt="Image"
                className="w-full h-full"
              />
            </div>
          </Link>
        </div>

        <div className="h-1/2 w-full flex flex-col justify-between">
          <div className="product-infos w-full">
            <div className="flex justify-between mt-3">
              <div className="product-title text-sm line-clamp-1">
                <p>{product.title}</p>
              </div>
              <div className="rating flex gap-1 items-center">
                <p>4.5</p>
                <span className="text-amber-400">
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="product-price text-xl font-semibold">
              <h3>{product.price} DA</h3>
            </div>
          </div>
          <div className="product-catrgory text-sm">
            <p>{product.category.name}</p>
          </div>
          <div className="product-colors w-full flex gap-2">
            <div
              className="w-4 h-4 bg-blue-400"
              style={{ borderRadius: "50%" }}
            ></div>
            <div
              className="w-4 h-4 rounded-ss-full bg-red-400"
              style={{ borderRadius: "50%" }}
            ></div>
            <div
              className="w-4 h-4 rounded-ss-full bg-green-400"
              style={{ borderRadius: "50%" }}
            ></div>
          </div>
          <div className="add-to-cart-button">
            <button className="uppercase text-white font-semibold w-full h-10">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
