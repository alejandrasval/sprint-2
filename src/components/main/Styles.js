//Styled components
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
`;

export const StyledInput = styled.input`
  width: 350px;
  max-width: 100%;
  height: 50px;
  border-radius: 40px;
  border: none;
  background: #e7e7e7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  margin-top: 32px;
  margin-left: 20px;
`;

export const StyledMotto = styled.div`
  font-family: 'Inter', sans-serif;
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
/*---------------------------------*/