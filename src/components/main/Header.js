import React from "react";
import { StyledLogo, StyledMotto, StyledShoppingCart, StyledAccount } from "./Styles";

const Header = () => {
  return (
    <div>
      <div>
        <StyledLogo
          className="logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1636851467/Guajolotas%20App/Logo_ajwoub.png"
        />
        <StyledShoppingCart
          className="shoppingCart"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1636851812/Guajolotas%20App/ShoppingCart_u6dtd0.png"
        />
        <StyledAccount
          className="account"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637205705/Guajolotas%20App/Profile_nf3rcw.png"
        />
      </div>
      <StyledMotto className="quote">
        <p>Nada como una guajolota para empezar el día</p>
      </StyledMotto>
    </div>
  );
};

export default Header;
