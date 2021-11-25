//Styled components
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 24px 24px 24px 24px;
  background-color: #f2f2f2;
`;

export const StyledCard = styled.div`
  margin-top: 12px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  background: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 112px;
`;

export const StyledImg = styled.img`
  width: 80px;
  height: auto;
  margin-left: 10px;
  margin-top: -10px;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  text-decoration: none;
`;

export const StyledFlavor = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #0d0d0d;
`;

export const StyledPrice = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #fa4a0c;
`;

export const StyledCategories = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 17px;
  font-family: "Inter", sans-serif;
  color: #fa4a0c;
  text-align: center;
`;

export const StyledCategory = styled.p`
  text-decoration: none;
  color: #9a9a9d;
  cursor: pointer;
  &:active {
    color: #fa4a0c;
    text-decoration: underline;
  }
  margin-bottom: -20px;
`;

export const DivSearch = styled.div`
  width: 350px;
  max-width: 100%;
  height: 50px;
  border-radius: 40px;
  border: none;
  background: #e7e7e7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  max-width: 100%;
  width: 250px;
  height: 50px;
  border-radius: 40px;
  border: none;
  background: #e7e7e7;
  margin-left: 50px;
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  margin-top: 15px;
  margin-left: 20px;
`;

export const StyledMotto = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  color: #0d0d0d;
  margin-top: 32px;
  line-height: 40px;
`;

export const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
`;

export const StyledAccount = styled.img`
  width: 24px;
  height: 24px;
  float: right;
  margin-top: 24px;
  opacity: 0.4;
  cursor: pointer;
`;

export const StyledShoppingCart = styled.img`
  width: 24px;
  height: 24px;
  float: right;
  margin-top: 24px;
  cursor: pointer;
`;

export const StyledImgDetail = styled.img`
  margin-top: -30px;
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

export const StyledSubs = styled.p`
  font-family: Inter;
  text-align: left;
  font-size: 20px;
  margin-left: 20px;
`;

export const StyledProductTitle = styled.h3`
  margin: 20px 90px;
  font-family: Inter;
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  line-height: 30px;
`;

export const StyledPrices = styled.p`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 17px;
  color: #fa4a0c;
  margin-bottom: 20px;
`;

export const StyledDivFlavors = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px;
`;

export const StyledFlavorImg = styled.img`
  margin: 20px;
`;

export const StyledDivDetail = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButtonAdd = styled.button`
  width: 312px;
  height: 69px;
  text-align: center;
  background-color: #fa4a0c;
  border-radius: 40px;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  margin: 20px 0px;
  cursor: pointer;
`;

export const StyledDivGeneral = styled.div`
  background-color: #f2f2f2;
`;

export const DivCounter = styled.div`
  background-color: #ffffff;
  width: 140px;
  height: 52px;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  font-family: Inter;
  font-size: 22px;
`;

export const Button = styled.button`
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  border: 2px solid #000000;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const PCounter = styled.p`
  font-size: 18px;
`;
export const PCombo = styled.p`
  margin: 10px 20px;
  font-family: Inter;
  font-size: 15px;
  opacity: 0.5;
`;

export const StyledNav = styled.nav`
  margin: 0px 10px;
`;

export const StyledArrow = styled.img`
  margin: 20px 10px;
  width: 10px;
  cursor: pointer;
`;

export const StyledCombo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DivCombo = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  width: 150px;
  height: 150px;
`;

export const InputCombo = styled.input`
  float: right;
`;
