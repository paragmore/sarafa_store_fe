import React from "react";
import styled from "styled-components";
import { Tiny, TitleFour } from "../themes/Typography";

export const StoryImageContainer = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.brand.primary.main},
    ${(props) => props.theme.colors.brand.primary.light1},
    ${(props) => props.theme.colors.brand.primary.light2}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`;
export const StoryCard: React.FC<{
  name: string;
  image: string;
}> = ({ name, image }) => {
  return (
    <StoryContainer>
      <StoryImageContainer>
        <img style={{ width: 50 }} src={image} alt="" />
      </StoryImageContainer>
      <Tiny style={{textOverflow:'ellipsis', display:'inline'}}>{name}</Tiny>
    </StoryContainer>
  );
};
