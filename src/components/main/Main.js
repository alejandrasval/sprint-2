import React, { useState, useEffect } from "react";
import { API_GUAJOLOTAS, API_BEBIDAS, API_TAMALES } from "../../helpers/API";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Main.css";
import {
  LinkCard,
  StyledCard,
  StyledCategories,
  StyledCategory,
  StyledDescription,
  StyledDiv,
  StyledFlavor,
  StyledImg,
  StyledPrice
} from "../Styles";


const Main = ({ link }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch(link);
      resp = await resp.json();
      setProducts(resp);
    }
    fetchData();
  }, [link]);

  const results = async (url) => {
    const resp = await fetch(url).then((resp) => resp.json());
    setProducts(resp);
  };

  function handleClickGuajolotas(e) {
    e.preventDefault();
    results(API_GUAJOLOTAS);
  }

  function handleClickBebidas(e) {
    e.preventDefault();
    results(API_BEBIDAS);
  }

  function handleClickTamales(e) {
    e.preventDefault();
    results(API_TAMALES);
  }

  return (
    <div>
      <StyledDiv>
        <Header />
        <SearchBar />
        <StyledCategories>
          <StyledCategory onClick={handleClickGuajolotas}>
            Guajolotas
          </StyledCategory>
          <StyledCategory onClick={handleClickBebidas}>Bebidas</StyledCategory>
          <StyledCategory onClick={handleClickTamales}>Tamales</StyledCategory>
        </StyledCategories>
      </StyledDiv>
      <StyledDiv>
        {products.map((obj) => (
          <LinkCard key={obj.id} to={`/products/${obj.id}`}>
            <StyledCard className="productCard">
              <StyledImg src={obj.img} alt="product" />
              <StyledDescription>
                <StyledFlavor>{obj.sabor.nombreSabor} </StyledFlavor>
                <StyledPrice>${obj.precio} MXN</StyledPrice>
              </StyledDescription>
            </StyledCard>
          </LinkCard>
        ))}
      </StyledDiv>
    </div>
  );
};

export default Main;
