import React from "react";
import styled from "styled-components";
import { ReactComponent as WhatsAppSVG } from './../../core/icons/svgs/whatsappIcon.svg';

const WhatsappRedirectionButtonContainer = styled.button`
  position: fixed;
  right: 20px;
  bottom: 35px;
  background-color: ${props => props.theme.colors.gray.white};
  border: 0px;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: 1px 1px 1px 1px #888888;
  width: 50px;
  height: 50px;

`;
export const WhatsappRedirectionButton = () => {
  const handleClick = () => {
    const message = "Hello, how can I help you?";
    const phoneNumber = "1234567890";
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  };

  return (
    <WhatsappRedirectionButtonContainer onClick={handleClick}>
      <WhatsAppSVG width={35} height={35}/>
    </WhatsappRedirectionButtonContainer>
  );
};
