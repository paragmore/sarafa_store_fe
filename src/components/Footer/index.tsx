import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Button from "../../core/components/Button/Button";
import PhoneIcon from "../../core/icons/svgs/PhoneIcon";
import {
  BodyRegular,
  BodySecondary,
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
  min-height: 200px;
`;

export const Footer = () => {
  const { storeInfo } = useStoreInfo();
  const theme = useTheme();
  useEffect(() => {
    console.log("storeInfo", storeInfo);
  }, [storeInfo]);
  return (
    <>
      <FooterContainer>
        <TitleTwo style={{ padding: 0, margin: 0 }}>{storeInfo.name}</TitleTwo>
        <BodySecondary>{storeInfo.address?.firstLine}</BodySecondary>
        <BodySecondary>
          {storeInfo?.address?.city +
            ", " +
            storeInfo?.address?.state +
            "- " +
            storeInfo?.address?.pinCode}
        </BodySecondary>
        <div onClick={() => window.open(storeInfo?.phoneNumber)}>
          <Button style={{ padding: "0px" }} buttonStyle="text">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <PhoneIcon width={30} height={30} />
              {storeInfo?.phoneNumber}
            </div>
          </Button>
        </div>
      </FooterContainer>
    </>
  );
};
