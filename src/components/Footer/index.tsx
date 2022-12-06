import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { TitleFour, TitleThree, TitleTwo } from "../../core/themes/Typography";
import { useAppSelector } from "../../store";

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.brand.primary.light3};
`;


export const Footer = () => {
    const storeInfo = useAppSelector((state) => state.storeInfo);
    const theme = useTheme();
    useEffect(() => {}, [storeInfo]);
  return (
    <>
      <FooterContainer>
        <TitleTwo style={{padding:0, margin:0}}>{storeInfo.name}</TitleTwo>
      </FooterContainer>
    </>
  );
};
