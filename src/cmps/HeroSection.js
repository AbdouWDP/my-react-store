import plant from "../minh-pham-MBsReSZ2WNM-unsplash.jpg";
import ladder from "../element5-digital-2cwqJgtQ3D0-unsplash.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <div className="hero-section w-11/12 flex m-auto mt-10 relative">
        <div className="hero-section-imgs flex gap-4 w-1/2">
          <div className="image-one w-64">
            <img
              src={plant}
              className="w-full"
              style={{ aspectRatio: "1/1.8" }}
            />
          </div>
          <div className="image-two w-64">
            <img
              src={ladder}
              className="w-full"
              style={{ aspectRatio: "1/1.2" }}
            />
          </div>
        </div>
        <div className="hero-section-title w-1/2">
          <div className="flex gap-4">
            <div className="title">
              <h1 className="w-fit uppercase text-9xl font-semibold">beauty</h1>
              <h1 className="uppercase text-9xl font-semibold mt-4">
                in style
              </h1>
            </div>
            <div className="scrolling-button self-end mb-1">
              <a
                href="#products"
                className="text-5xl w-14 aspect-square flex justify-center items-center"
              >
                <IoIosArrowRoundDown />
              </a>
            </div>
          </div>
          <div className="title-para ml-2 mt-4">
            <p>Find the latest collection that suit your needs and tastes</p>
          </div>
        </div>
        <div className="guarantees absolute h-32 bottom-0 flex justify-between">
          <div className="guarantee h-full relative">
            <div className="guarantee-icon text-xl p-0 m-0 pb-2">
              <span>
                <PiMedalFill />
              </span>
            </div>
            <div className="guarantee-title text-2xl">Top Quality</div>
            <div className="guarantee-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="guarantee h-full relative">
            <div className="guarantee-icon text-xl p-0 m-0 pb-2 text-end">
              <span>
                <FaTruckFast />
              </span>
            </div>
            <div className="guarantee-title text-2xl">Fast Delivery</div>
            <div className="guarantee-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="guarantee h-full relative">
            <div className="guarantee-icon text-xl p-0 m-0 pb-2">
              <span>
                <BsCash />
              </span>
            </div>
            <div className="guarantee-title text-2xl">Cashback Reward</div>
            <div className="guarantee-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="guarantee h-full relative">
            <div className="guarantee-icon text-xl p-0 m-0 pb-2">
              <span>
                <MdPayment />
              </span>
            </div>
            <div className="guarantee-title text-2xl">Secure Payment</div>
            <div className="guarantee-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
