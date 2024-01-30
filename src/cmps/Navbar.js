import { Tooltip } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navigation-bar w-11/12 h-12 m-auto flex justify-between items-end">
        <Link to="/">
          <div className="logo cursor-pointer">
            <h1 className="font-semibold text-3xl">Logo</h1>
          </div>
        </Link>
        <nav className="menu">
          <ol className="list-style-none flex gap-6">
            <Link to="/">
              <li className="cursor-pointer font-semibold">Home</li>
            </Link>
            <li className="cursor-pointer font-semibold">Contact</li>
            <li className="cursor-pointer font-semibold">About</li>
          </ol>
        </nav>
        <div className="navigation-icons">
          <Tooltip title="Search" placement="bottom">
            <button className="search-icon px-2">
              <span>
                <FaSearch />
              </span>
            </button>
          </Tooltip>
          <Tooltip title="Cart" placement="bottom">
            <button className="cart-icon px-2">
              <span>
                <FaShoppingBag />
              </span>
            </button>
          </Tooltip>
          <Tooltip title="Login" placement="bottom">
            <button className="user-icon px-2">
              <span>
                <FaUserAlt />
              </span>
            </button>
          </Tooltip>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
