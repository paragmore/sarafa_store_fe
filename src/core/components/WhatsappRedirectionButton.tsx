import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "../../core/icons/svgs/WhatsappIcon";
import { useStoreInfo } from "../../hooks/storeHook";

const WhatsappRedirectionButtonContainer = styled.button`
  position: fixed;
  right: 17px;
  bottom: 53px;
  background-color: ${(props) => props.theme.colors.gray.white};
  border: 0px;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: 1px 1px 1px 1px #888888;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  margin: 0px;
`;
export const WhatsappRedirectionButton = () => {
  const { storeInfo } = useStoreInfo();
  const handleClick = () => {
    const message = `Hello, can I get some more help?`;
    window.location.href = `https://api.whatsapp.com/send?phone=${storeInfo?.whatsappPhoneNumber}&text=${message}`;
  };
  return (
    <WhatsappRedirectionButtonContainer onClick={handleClick}>
      <WhatsAppIcon />
    </WhatsappRedirectionButtonContainer>
  );
};
