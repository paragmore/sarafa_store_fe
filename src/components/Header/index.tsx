import React, { useEffect } from "react";
import { Icon } from "./components/Icon";
import { StoreName } from "./components/StoreName";
import styled, { useTheme } from "styled-components";
import { useAppSelector } from "../../store";
import MoreIcon from "../../core/icons/svgs/More";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${(props) => props.theme.zIndexes.header};
  background-color: ${(props) => props.theme.colors.gray.white};
`;

export const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Header = () => {
  const storeInfo = useAppSelector((state) => state.storeInfo);
  const theme = useTheme();
  useEffect(() => {}, [storeInfo]);
  return (
    <>
      <HeaderContainer>
        <Icon imageUrl={storeInfo.logoUrl} />
        <StoreName storeName={storeInfo.name} />
        <SVGContainer>
          <MoreIcon color={theme.colors.icon.dark} width={20} height={20} />
        </SVGContainer>
      </HeaderContainer>
    </>
  );
};
