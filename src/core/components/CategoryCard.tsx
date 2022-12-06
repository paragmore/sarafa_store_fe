import React from "react";
import styled from "styled-components";
import { TitleFour } from "../themes/Typography";

export const CategoryImageContainer = styled.div`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.brand.primary.main},
    ${(props) => props.theme.colors.brand.primary.light1},
    ${(props) => props.theme.colors.brand.primary.light2}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;
export const CategoryCard: React.FC<{
  name: string;
  image: string;
}> = ({ name, image }) => {
  return (
    <CategoryContainer>
      <CategoryImageContainer>
        <img style={{ width: 100 }} src={image} alt="" />
      </CategoryImageContainer>
      <TitleFour>{name}</TitleFour>
    </CategoryContainer>
  );
};
