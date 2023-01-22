import styled from "styled-components";
import { ButtonDataProps } from "./Button";

export const ButtonStyled = styled.button<ButtonDataProps>`
  position: relative;
  .text {
    visibility: ${(props) =>
      props.loading == true ? "hidden" : "inline-block"};
  }
  .loading {
    display: ${(props) => (props.loading == true ? "inline-block" : "none")};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  border: ${(props) => (props.borderWidth || 0) + "px solid"};
  border-width: ${props => props.buttonStyle === 'primary-outline' ? (props.borderWidth || 1) +'px' : ''};
  border-color: ${(props) =>
    props.buttonStyle == "primary"
      ? "#731dcf"
      : props.buttonStyle == "secondary"
      ? "#fdb85e "
      : "#731dcf"};
  outline: none;

  text-align: center;
  letter-spacing: 0px;
  width: ${(props) => (props.width ? props.width : "auto")};
  font: ${(props) =>
    props.buttonSize == "large"
      ? "normal normal 600 20px/20px Work Sans"
      : props.buttonSize == "small"
      ? "normal normal 600 16px/20px Work Sans"
      : "normal normal 600 12px/14px Work Sans"};
  color: ${(props) =>
    props.buttonStyle == "primary"
      ? "white"
      : props.buttonStyle == "primary-outline"
      ? "#731DCF"
      : "#000000"};
  background: ${(props) =>
    props.buttonStyle == "primary"
      ? "#731dcf"
      : props.buttonStyle == "secondary"
      ? "linear-gradient(90deg, #fdb85e 0%, #fedc8f 70%)"
      : "white"};
  border-radius: 8px;
  padding: ${(props) => props.buttonSize == "large" ? "22px 30px" : "10px 16px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: ${(props) =>
      props.buttonStyle == "primary"
        ? "#731dcf"
        : props.buttonStyle == "secondary"
        ? "linear-gradient(90deg, #fedc8f 0%, #fdb85e 70%)"
        : "white"};
  }

  &:disabled,
  &[disabled] {
    background: #cccccc;
    color: #666666;
    border: none;
    &:hover {
      background: #cccccc;
    }
  }
`;
