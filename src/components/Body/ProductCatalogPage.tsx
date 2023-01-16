import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyContainer } from ".";
import {
  ProductCard,
  ProductCardShimmer,
} from "../../core/components/ProductCard";
import { Product } from "../../core/models/storeInfo";
import { useStoreInfo } from "../../hooks/storeHook";
import { ProductRepo } from "../../repos/ProductRepo";

export const ProductCatalogPage: React.FC<{ catalogName: string }> = (
  props
) => {
  const { category } = useParams();
  const { catalogName } = props;
  const { storeInfo } = useStoreInfo();
  const { id } = storeInfo;
  const productRepo = new ProductRepo();
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    getProducts();
  }, [category, id]);

  const getProducts = async () => {
    setIsProductsLoading(true);
    const products = await productRepo.getStoreProducts(id, {
      page: "1",
      sC: category,
    });
    setIsProductsLoading(false);
    if (products) {
      setCatalogProducts(products);
    }
  };

  return (
    <BodyContainer>
      <div style={{ marginTop: "70px" }}>
        {category}
        <Grid wrap="wrap" container style={{ width: "100%" }}>
          {catalogProducts.map((catalogProduct) => (
            <ProductCard key={catalogProduct.id} {...catalogProduct} />
          ))}
        </Grid>
        {isProductsLoading && (
          <>
            <ProductCardShimmer />
            <ProductCardShimmer />
          </>
        )}
      </div>
    </BodyContainer>
  );
};
