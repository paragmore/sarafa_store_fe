import React from "react";
// import Loading from "../../icons/loading";
import { ButtonStyled } from "./ButtonStyles";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

export type ButtonStyle = "primary" | "secondary" | "primary-outline" | "text";
export type ButtonSize = "large" | "small" | "ultra-small";

export interface ButtonDataProps {
  children: any;
  style?: any;
  buttonStyle?: ButtonStyle;
  isDisabled?: boolean;
  buttonWidth?: number;
  click?: () => void;
  buttonSize?: ButtonSize;
  loading?: boolean;
  width?: string;
  borderWidth?: string;
  className?: string;
}

type Props = ButtonDataProps;

const Button: React.FC<Props> = (props) => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.click?.();
  };
  return (
    <ButtonStyled
      {...props}
      onClick={onButtonClick}
      disabled={props.isDisabled}
      className={props.className}
    >
      <span className="text">{props.children}</span>
      <span className="loading">
        {/* <Loading /> */}
        <Dots />
      </span>
    </ButtonStyled>
  );
};

export default Button;
