import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import {
  BodyRegular,
  TitleFour,
  TitleThree,
  TitleTwo,
} from "../../core/themes/Typography";
import { useStoreInfo } from "../../hooks/storeHook";
import { useAppSelector } from "../../store";

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.brand.primary.light3};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px;
`;

export const Footer = () => {
  const { storeInfo } = useStoreInfo();
  const theme = useTheme();
  useEffect(() => {}, [storeInfo]);
  return (
    <>
      <FooterContainer>
        <TitleTwo style={{ padding: 0, margin: 0 }}>{storeInfo.name}</TitleTwo>
        <BodyRegular>{storeInfo.address?.firstLine}</BodyRegular>
        <BodyRegular>
          {
            (storeInfo?.address?.city + ", ",
            storeInfo?.address?.state + "- " + storeInfo?.address?.pinCode)
          }
        </BodyRegular>
      </FooterContainer>
    </>
  );
};
