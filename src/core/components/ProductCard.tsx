import React, { useState } from "react";
import styled from "styled-components";
import { Caption, CaptionBold, TitleFour } from "../themes/Typography";
import { Image, Shimmer } from "react-shimmer";
import { Product } from "../models/storeInfo";
import { Grid } from "@material-ui/core";

export const ProductCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray.white};
  margin: 7px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray.darkGray0};
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-grow: 1;
`;

export const ProductCardShimmer = () => {
  return (
    <ProductCardContainer>
      <div style={{ padding: 10 }}>
        <Shimmer width={130} height={130} />
      </div>
      <div style={{ marginTop: 5, marginLeft: 10 }}>
        <Shimmer width={130} height={10} />
      </div>
      <div style={{ marginTop: 15, marginLeft: 10 }}>
        <Shimmer width={60} height={10} />
      </div>
    </ProductCardContainer>
  );
};
export const ProductCard: React.FC<Product> = ({
  id,
  images,
  name,
  desc,
  wtRange,
  gender,
  sC,
  views,
  likes,
}) => {
  const [isLoading, setisLoading] = useState(false);
  return (
    <>
      <Grid alignItems="center" item lg={3} md={4} sm={4} xs={6}>
        {isLoading ? (
          <ProductCardShimmer />
        ) : (
          <ProductCardContainer>
            <img
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              src={images[0]}
              alt=""
            />
            <TitleFour>{name}</TitleFour>
            <CaptionBold>
              {wtRange.min}gm - {wtRange.max}gm
            </CaptionBold>
          </ProductCardContainer>
        )}
      </Grid>
    </>
  );
};
