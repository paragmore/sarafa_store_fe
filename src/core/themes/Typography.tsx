import Styled from "styled-components";
import { addPixels } from "./ThemeUtils";

export const TitleXlarge = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.titleXLarge.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.titleXLarge.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.titleXLarge.lineHeight)};
`;

export const TitleLarge = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.titleLarge.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.titleLarge.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.titleLarge.lineHeight)};

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => addPixels(props.theme.fonts.title1Mobile.fontSize)};
  }
`;

export const TitleSmall = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.titleSmall.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.titleSmall.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.titleSmall.lineHeight)};
  margin:5px

`;

export const TitleMedium = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.titleMedium.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.titleMedium.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.titleMedium.lineHeight)};
      margin:5px

`;

export const TitleRegular = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.titleRegular.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.titleRegular.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.titleRegular.lineHeight)};
      margin:5px

`;

export const TitleOne = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title1.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title1.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.title1.lineHeight)};
`;

export const TitleTwo = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title2.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title2.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.title2.lineHeight)};
`;

export const TitleThree = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title3.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title3.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.title3.lineHeight)};
`;

export const pPlaceholder = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.textPlaceholder.fontWeight};
  font-size: ${(props) =>
    addPixels(props.theme.fonts.textPlaceholder.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.textPlaceholder.lineHeight)};
`;

export const TitleFour = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title4.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title4.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.title4.lineHeight)};
  margin:5px
`;

export const BodyRegular = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.bodyRegular.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.bodyRegular.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.bodyRegular.lineHeight)};
    margin:5px;
`;

export const BodySmall = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.bodySmall.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.bodySmall.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.bodySmall.lineHeight)};
`;
export const ButtonLarge = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.buttonLarge.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.buttonLarge.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.buttonLarge.lineHeight)};
`;

export const ButtonRegular = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.buttonRegular.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.buttonRegular.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.buttonRegular.lineHeight)};
`;

export const BodySecondary = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.gray.darkGray1};
  font-weight: ${(props) => props.theme.fonts.bodySecondary.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.bodySecondary.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.bodySecondary.lineHeight)};
    margin:2px
`;

export const BodyPrimary = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.bodyPrimary.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.bodyPrimary.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.bodyPrimary.lineHeight)};
`;

export const CaptionBold = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.captionBold.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.captionBold.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.captionBold.lineHeight)};
    margin:5px
`;

export const p1Bold = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.text1Bold.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.text1Bold.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.text1Bold.lineHeight)};
`;

export const Caption = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.caption.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.caption.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.caption.lineHeight)};
    margin:5px
`;

export const Toast = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.toast.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.toast.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.toast.lineHeight)};
`;

export const Tiny = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.tiny.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.tiny.fontSize)};
  line-height: ${(props) => addPixels(props.theme.fonts.tiny.lineHeight)};
`;

/** Mobile */

export const TitleOneMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title1Mobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title1Mobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.title1Mobile.lineHeight)};
`;

export const TitleTwoMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title2Mobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title2Mobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.title2Mobile.lineHeight)};
`;

export const TitleThreeMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title3Mobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title3Mobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.title3Mobile.lineHeight)};
`;

export const TitleFourMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.title4Mobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.title4Mobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.title4Mobile.lineHeight)};
`;

export const BodyRegularMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.bodyRegularMobile.fontWeight};
  font-size: ${(props) =>
    addPixels(props.theme.fonts.bodyRegularMobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.bodyRegularMobile.lineHeight)};
`;

export const CaptionMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.captionMobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.captionMobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.captionMobile.lineHeight)};
`;

export const ToastMobile = Styled.p`
  font-family: "Gill Sans", sans-serif;
  color:  ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fonts.toastMobile.fontWeight};
  font-size: ${(props) => addPixels(props.theme.fonts.toastMobile.fontSize)};
  line-height: ${(props) =>
    addPixels(props.theme.fonts.toastMobile.lineHeight)};
`;
