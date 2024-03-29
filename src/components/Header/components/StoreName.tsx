import React from "react";
import { Shimmer } from "react-shimmer";
import styled from "styled-components";
import { TitleLarge } from "../../../core/themes/Typography";

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoreName: React.FC<{ storeName: string }> = ({ storeName }) => {
  return (
    <TitleContainer>
      <TitleLarge>{storeName}</TitleLarge>
      {!storeName && <Shimmer width={100} height={20} />}
    </TitleContainer>
  );
};
