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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   if (!id || id === "0" || !category) {
  //     return;
  //   }
  //   console.log(id, "cate", category);
  //   getProducts();
  // }, [category, id]);

  const getProducts = async (page: number) => {
    setIsProductsLoading(true);
    if (!id || !category) {
      return;
    }
    const products = await productRepo.getStoreProducts(id, {
      page: page.toString(),
      sC: category,
    });
    setIsProductsLoading(false);
    if (products) {
      return products;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchStoreProducts() {
      const responseProducts = await getProducts(page);
      if(!responseProducts){
        return
      }
      console.log('responseProducts',responseProducts)
      setCatalogProducts((prevProducts) => [...prevProducts, ...responseProducts]);
      setHasMore(responseProducts.length > 0);
    }

    fetchStoreProducts();
  }, [page, category, id]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };

  return (
    <BodyContainer>
      <div style={{ marginTop: "70px" }}>
        {category}
        <Grid wrap="wrap" container style={{ width: "100%" }}>
          {catalogProducts.map((catalogProduct) => (
            <ProductCard inScrolList={false} key={catalogProduct.id} product={catalogProduct} />
          ))}
          {!hasMore && <div>No more products</div>}
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
