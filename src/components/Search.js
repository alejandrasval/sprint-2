import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import querystring from "query-string";
import { useForm } from "../hooks/useForm";
import getProductsByName from "./selectors/getProducstByName";
import { Card, DivSearch, StyledCard, StyledDescription, StyledFlavor, StyledImg, StyledInput, StyledPrice, StyledSearchIcon } from "./Styles";

export const Search = () => {
  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);

  const navigate = useNavigate();

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const productsFiltered = getProductsByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <DivSearch>
          <StyledSearchIcon src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1636852477/Guajolotas%20App/search_ijntbs.png" />
          <StyledInput
            className="inputSearch"
            type="text"
            name="searchText"
            placeholder="Sabor de guajolota, bebida..."
            value={searchText}
            onChange={handleInputChange}
          ></StyledInput>
        </DivSearch>
      </form>
      {productsFiltered.map((obj) => (
          <Card key={obj.id}>
            <StyledCard className="productCard">
              <StyledImg src={obj.img} alt="product" />
              <StyledDescription>
                <StyledFlavor>{obj.sabor.nombreSabor} </StyledFlavor>
                <StyledPrice>${obj.precio} MXN</StyledPrice>
              </StyledDescription>
            </StyledCard>
          </Card>
        ))}
    </div>
  );
};

export default Search;