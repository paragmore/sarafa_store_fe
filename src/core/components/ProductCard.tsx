import React, { useState } from "react";
import styled from "styled-components";
import { Caption, CaptionBold, TitleFour } from "../themes/Typography";
import { Image, Shimmer } from "react-shimmer";
import { Product } from "../models/storeInfo";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const ProductCardContainer = styled.div<{ inScrolList?: boolean }>`
  background-color: ${(props) => props.theme.colors.gray.white};
  margin: 7px;
  border-radius: 5px;
  border: 1px solid; 
  border-color: ${(props) => props.inScrolList ? props.theme.colors.gray.lightGray2: 'transparent'};
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-grow: 1;
  min-width: ${(props) => (props.inScrolList ? "145px" : "0px")};
  min-height: ${(props) => (props.inScrolList ? "210px" : "0px")};
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
export const ProductCard: React.FC<{
  product: Product;
  inScrolList: boolean;
}> = (props) => {
  const { inScrolList, product } = props;
  const { id, images, name, desc, wtRange, gender, sC, views, likes } = product;
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const onClickProduct = () => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Grid item lg={3} md={4} sm={4} xs={6}>
        {isLoading ? (
          <ProductCardShimmer />
        ) : (
          <ProductCardContainer inScrolList={inScrolList} onClick={onClickProduct}>
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
