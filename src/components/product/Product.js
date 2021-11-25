import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  API_TOTAL,
  API_GUAJOLOTAS,
  API_BEBIDAS,
  API_SABORES_BEBIDAS,
  API_SABORES_TORTAS,
} from "../../helpers/API";
import {
  StyledDivGeneral,
  StyledDivDetail,
  StyledImgDetail,
  StyledSubs,
  StyledProductTitle,
  StyledPrices,
  StyledButtonAdd,
  PCombo,
  StyledArrow,
  StyledShoppingCart,
  StyledNav,
  Button,
  PCounter,
  DivCounter,
  StyledCombo,
  DivCombo,
  InputCombo,
  StyledImg,
  StyledFlavor,
  StyledPrice,
  StyledDivFlavors,
  StyledFlavorImg,
} from "../Styles";

const Product = () => {
  const navigate = useNavigate();

  //Get product data
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    let resp = await fetch(API_TOTAL);
    let data = await resp.json();
    let productDetail = data.find((data) => data.id === id);
    setProducts(productDetail);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Counter
  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);

  //Flavors

  const [flavors, setFlavors] = useState([]);

  const data = async (url) => {
    const resp = await fetch(url).then((resp) => resp.json());
    setFlavors(resp);
  };

  if (id >= 12 && id <= 15) {
    data(API_SABORES_BEBIDAS);
  } else {
    data(API_SABORES_TORTAS);
  }

  //Guajalocombos

  const [combo, setCombo] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkBoxQuant, setCheckBoxQuant] = useState(0);
  const [checkBoxPrice, setCheckBoxPrice] = useState(0);

  const results = async (url) => {
    const resp = await fetch(url).then((resp) => resp.json());
    setCombo(resp);
  };

  if (id >= 12 && id <= 15) {
    results(API_GUAJOLOTAS);
  } else {
    results(API_BEBIDAS);
  }

  const handleCheck = (e, precio) => {
    let checkedProduct = e.target.checked;
    console.log(checked);
    setChecked(e.target.checked);
    if (checkedProduct === true) {
      setCheckBoxPrice(checkBoxPrice + precio);
      setCheckBoxQuant(checkBoxQuant + 1);
    } else if (checkedProduct === false) {
      setCheckBoxPrice(checkBoxPrice - precio);
      setCheckBoxQuant(checkBoxQuant - 1);
    }
  };

  return (
    <div>
      <StyledDivGeneral>
        <StyledNav>
          <StyledArrow
            onClick={() => navigate(`/`)}
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637631634/Guajolotas%20App/Vector_yvfjld.png"
          />
          <StyledShoppingCart
            className="shoppingCart"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1636851812/Guajolotas%20App/ShoppingCart_u6dtd0.png"
          />
        </StyledNav>
        <StyledDivDetail>
          <StyledImgDetail src={products.img} alt="" />
        </StyledDivDetail>
        <StyledProductTitle>{products.nombre}</StyledProductTitle>
        <StyledPrices>${products.precio} MXN</StyledPrices>
        <DivCounter>
          <Button
            onClick={substract}
            style={{ opacity: counter === 1 ? 0.4 : 1 }}
          >
            -
          </Button>
          <PCounter>{counter}</PCounter>
          <Button onClick={add}>+</Button>
        </DivCounter>
        <StyledSubs>Sabor</StyledSubs>
        <StyledDivFlavors>
        {flavors.map((obj) => (
          <StyledFlavorImg key={obj.id} src={obj.imgSabor} alt="product" />
        ))}
      </StyledDivFlavors>
        <StyledSubs>Guajalocombo</StyledSubs>
        <PCombo>
          Selecciona la opción que más te guste y disfruta de tu desayuno.
        </PCombo>
        <StyledCombo>
          {combo.map((obj) => (
            <DivCombo key={obj.id}>
              <InputCombo
                type="checkbox"
                onClick={(e) => {
                  handleCheck(e, obj.precio);
                }}
              />
              <StyledImg src={obj.img} />
              <StyledFlavor>{obj.sabor.nombreSabor}</StyledFlavor>
              <StyledPrice>+ ${obj.precio} MXN</StyledPrice>
            </DivCombo>
          ))
          }
        </StyledCombo>
        <StyledDivDetail>
          <Link to="/cart">
          <StyledButtonAdd>
            Agregar {counter + checkBoxQuant} al carrito ${products.precio * counter + checkBoxPrice}
          </StyledButtonAdd>
          </Link>
        </StyledDivDetail>
      </StyledDivGeneral>
    </div>
  );
};

export default Product;