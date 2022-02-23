import logo from "../images/agencia-eplus-n-logo.png";
import searchIcon from "../images/search-icon.png";
import profileIcon from "../images/profile-icon.png";
import shoppingCartIcon from "../images/shopping-cart.png";
import { MyContext } from "../MyContext";
import { useContext } from "react";

function Header() {
  const urlLoremIpsum = "https://www.lipsum.com/";
  const { isOpenCart, setIsOpenCart, isOpenNav, setIsOpenNav } =
    useContext(MyContext);

  const clickShoppingCart = () => {
    setIsOpenCart(!isOpenCart);
  };
  const clickMenuMobile = () => {
    setIsOpenNav(!isOpenNav)
    setIsOpenCart(false);
    console.log(isOpenNav);
  };
  return (
    <header className="header">
      <span className="menu-mobile" onClick={ clickMenuMobile }>
        <span></span>
      </span>
      <img src={logo} alt="logo-agencia" className="logo-agencia" />
      <nav className={`nav-hearder ${isOpenNav ? 'open' : ''}`}>
        <a href={urlLoremIpsum}>Lorem Ipsum</a>
        <a href={urlLoremIpsum}>Lorem Ipsum</a>
        <a href={urlLoremIpsum}>Lorem Ipsum</a>
        <a href={urlLoremIpsum}>Lorem Ipsum</a>
        <a href={urlLoremIpsum}>Lorem Ipsum</a>
      </nav>
      <img src={searchIcon} alt="search-icon" className="icons" />
      <img
        src={profileIcon}
        alt="profile-icon"
        className="icons profile-icon"
      />
      <img
        src={shoppingCartIcon}
        alt="shopping-cart-icon"
        className="icons cart-icon"
        onClick={clickShoppingCart}
      />
    </header>
  );
}

export default Header;
