import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Category } from "../../components/Body";
import { TitleFour } from "../themes/Typography";

export const CategoryImageContainer = styled.div`
  border-radius: 10px;
  width: 120px;
  height: 70px;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.brand.primary.main},
    ${(props) => props.theme.colors.brand.primary.light1},
    ${(props) => props.theme.colors.brand.primary.light2}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryImageContainer = styled.div`
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
export const CategoryCard: React.FC<Category> = (props) => {
  const { id, image, name } = props;
  const navigate = useNavigate();

  const onCardClicked = () => {
    if(!id){
      return
    }
    navigate(`/catalog/${id}`);
  };
  return (
    <CategoryContainer onClick={onCardClicked}>
      <CategoryImageContainer>
        <img style={{ width: 100 }} src={image} alt="" />
      </CategoryImageContainer>
      <TitleFour>{name}</TitleFour>
    </CategoryContainer>
  );
};
