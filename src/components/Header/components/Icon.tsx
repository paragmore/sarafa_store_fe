import React from "react";
import styled from "styled-components";

export const IconContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

export const Icon: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <IconContainer>
      <img
        style={{ borderRadius: 10 }}
        width={50}
        height={50}
        src={imageUrl}
        alt=""
      />
    </IconContainer>
  );
};
