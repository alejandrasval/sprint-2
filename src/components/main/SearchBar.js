import React from "react";
import { DivSearch, StyledInput, StyledSearchIcon } from "../Styles";
import { Link } from "react-router-dom";


const SearchBar = () => {
  return (
    <DivSearch>
      <Link to="/search">
      <StyledSearchIcon src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1636852477/Guajolotas%20App/search_ijntbs.png" />
      <StyledInput className="inputSearch" placeholder="Sabor de guajolota, bebida..."></StyledInput>
      </Link >
    </DivSearch>
  );
};

export default SearchBar;
