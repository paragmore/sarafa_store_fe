import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Responsive } from "react-grid-layout";
import {
  ProductCard,
  ProductCardShimmer,
} from "../../core/components/ProductCard";
import { Product } from "../../core/models/storeInfo";
import { TitleLarge } from "../../core/themes/Typography";
import { useStoreInfo } from "../../hooks/storeHook";
import { ProductRepo } from "../../repos/ProductRepo";
import { Grid } from "@material-ui/core";

export const SectionTitleContainer = styled.div`
  display: flex;
  padding-left: 10px;
`;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CatalogProductList: React.FC<{ catalogName: string }> = (
  props
) => {
  const { catalogName } = props;
  const productRepo = new ProductRepo();
  const { storeInfo } = useStoreInfo();
  const { id } = storeInfo;
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  useEffect(() => {
    if(!id){
      return
    }
    getProducts();
  }, [catalogName, id]);

  const getProducts = async () => {
    setIsProductsLoading(true);
    const products = await productRepo.getStoreProducts(id, {
      page: "1",
      pageSize: "4",
      sC: catalogName,
    });
    setIsProductsLoading(false);
    if (products) {
      setCatalogProducts(products);
    }
  };

  return (
    <div style={{width:'100%'}}>
      <SectionTitleContainer>
        <TitleLarge>{catalogName}</TitleLarge>
      </SectionTitleContainer>
      <Grid
        wrap="wrap"
        container
        style={{ width: "100%" }}
      >
        {catalogProducts.map((catalogProduct) => (
          <ProductCard key={catalogProduct.id} {...catalogProduct} />
        ))}
        {isProductsLoading && (
          <>
            <ProductCardShimmer />
            <ProductCardShimmer />
          </>
        )}
      </Grid>
    </div>
  );
};
