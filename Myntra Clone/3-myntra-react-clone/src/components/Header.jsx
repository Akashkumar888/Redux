import { CgProfile } from "react-icons/cg";
import { IoBagHandle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
  const bag=useSelector((state)=>state.bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link href="#">Beauty</Link>
          <Link href="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <IoBagHandle />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

