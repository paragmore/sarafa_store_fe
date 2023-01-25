import React, { useEffect, useState } from "react";
import { Icon, IconContainer } from "./components/Icon";
import { StoreName } from "./components/StoreName";
import styled, { useTheme } from "styled-components";
import { useAppSelector } from "../../store";
import MoreIcon from "../../core/icons/svgs/More";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../../core/icons/svgs/HomeIcon";
import BackIcon from "../../core/icons/svgs/BackIcon";
// import { useHistory } from "react-router-dom";

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
  const navigate = useNavigate();
  const storeInfo = useAppSelector((state) => state.storeInfo);
  const theme = useTheme();
  const [headerName, setHeaderName] = useState("");
  useEffect(() => {}, [storeInfo]);
  const { pathname } = useLocation();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    if (pathname === "/") {
      setHeaderName(storeInfo.name);
    } else if (pathname.includes("catalog")) {
      setHeaderName("Products");
    }
  }, [pathname, storeInfo?.name]);

  return (
    <>
      <HeaderContainer>
        <>
          <>
            <IconContainer>
              {pathname !== "/" ? (
                <div
                  onClick={() => {
                    console.log("bnav");
                    navigate(-1);
                  }}
                >
                  <BackIcon />
                </div>
              ) : (
                <Icon imageUrl={storeInfo.logoUrl} />
              )}
            </IconContainer>
            <StoreName storeName={headerName} />
            <SVGContainer>
              <MoreIcon color={theme.colors.icon.dark} width={20} height={20} />
            </SVGContainer>
          </>
        </>
      </HeaderContainer>
    </>
  );
};
