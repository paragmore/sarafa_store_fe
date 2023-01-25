import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Responsive } from "react-grid-layout";
import {
  ProductCard,
  ProductCardShimmer,
} from "../../core/components/ProductCard";
import { Product } from "../../core/models/storeInfo";
import { TitleLarge, TitleSmall } from "../../core/themes/Typography";
import { useStoreInfo } from "../../hooks/storeHook";
import { ProductRepo } from "../../repos/ProductRepo";
import { Grid } from "@material-ui/core";
import { capitalizeFirstLetter } from "../../core/utils/StringHelper";
import { useNavigate } from "react-router-dom";

export const SectionTitleContainer = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
`;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CatalogProductList: React.FC<{
  catalogName: string;
  catalogId: string;
}> = (props) => {
  const navigate = useNavigate();
  const { catalogName, catalogId } = props;
  const productRepo = new ProductRepo();
  const { storeInfo } = useStoreInfo();
  const { id } = storeInfo;
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  useEffect(() => {
    if (!id || !catalogId) {
      return;
    }
    getProducts();
  }, [catalogId, id]);

  const getProducts = async () => {
    setIsProductsLoading(true);
    if (!id || !catalogId) {
      return;
    }
    const products = await productRepo.getStoreProducts(id, {
      page: "1",
      pageSize: "4",
      sC: catalogId,
    });
    setIsProductsLoading(false);
    if (products && products.length > 0) {
      setCatalogProducts(products);
    }
  };

  const routeToCatalogPage = () => {
    navigate(`/catalog/${catalogId}`);
  };

  return (
    <>
      {catalogProducts.length > 0 ? (
        <div style={{ width: "100%" }}>
          <SectionTitleContainer>
            <TitleLarge style={{ flex: 1 }}>
              {capitalizeFirstLetter(catalogName)}
            </TitleLarge>
            <TitleSmall onClick={routeToCatalogPage}>Show more</TitleSmall>
          </SectionTitleContainer>
          <Grid wrap="wrap" container style={{ width: "100%" }}>
            {catalogProducts.map((catalogProduct) => (
              <ProductCard
                inScrolList={false}
                key={catalogProduct.id}
                product={catalogProduct}
              />
            ))}
            {isProductsLoading && (
              <>
                <ProductCardShimmer />
                <ProductCardShimmer />
              </>
            )}
          </Grid>
        </div>
      ) : null}
    </>
  );
};
