import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "../../core/components/Carousel";
import { CategoryCard } from "../../core/components/CategoryCard";
import { ProductCard } from "../../core/components/ProductCard";
import { StoryCard } from "../../core/components/StoryCard";
import { Product } from "../../core/models/storeInfo";
import { TitleLarge, TitleXlarge } from "../../core/themes/Typography";
import { StoreRepo } from "../../repos/StoreRepo";
import { useAppSelector } from "../../store";
import { Stories } from "../Stories";
import { CatalogProductList } from "./CatalogProductList";

export const WelcomeTitle = styled(TitleXlarge)`
  color: ${(props) => props.theme.colors.text.secondary};
  position: absolute;
  z-index: ${(props) => props.theme.zIndexes.bannerTitle};
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-top: 100px;

  @media only screen and (max-width: 421px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 70px;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 80vh;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.gray.white};
  overflow-x: scroll;
  padding: 10px;
`;

export const BodyContainer = styled.div`
  background-color: ${(props) => props.theme.colors.brand.primary.light3};
  margin-top: 70px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray.white};
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  padding-left: 10px;
`;

export interface Category {
  name: string;
  image: string;
  id: string;
}

export const Body = () => {
  const storeInfo = useAppSelector((state) => state.storeInfo);
  const [categories, setcategories] = useState<Category[]>([]);
  const [filteredProducts, setfilteredProducts] = useState<
    Map<string, Product[]>
  >(new Map());
  const storeRepo = React.useMemo(() => new StoreRepo(), []);

  useEffect(() => {
    storeRepo.getSubCategories().then((data) => {
      console.log(data);
      setcategories(data);
    });
  }, [storeInfo.sC]);

  useEffect(() => {
    if (storeInfo.items && storeInfo.items.length > 0) {
      storeInfo.items.map((item) => {
        let prevItems = filteredProducts.get(item.sC);
        if (!prevItems?.some((prevItem) => prevItem.id === item.id)) {
          setfilteredProducts(
            filteredProducts.set(item.sC, [item, ...(prevItems || [])])
          );
        }
      });
    }
  }, [storeInfo.items]);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  return (
    <BodyContainer>
      {/* <WelcomeTitle>Welcome to {storeInfo.name}</WelcomeTitle> */}
      <CategoriesContainer>
        <Stories categories={categories} />
      </CategoriesContainer>
      <Carousel
        imagesUrl={[
          "https://s3.us-west-2.amazonaws.com/pics.angara.com/blogs/jil-magazine/wp-content/uploads/2021/02/03043742/What-is-the-best-gift-for-Valentines-Day-1200x438.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6r7aBrrJ_6GDqYQ5PZHRMs1SUbz3mStrHEwbNr5lTxIys9RbZ3NoUJyC_zwzw9F3sjk&usqp=CAU",
        ]}
      />
      <CategoryTitleContainer>
        <TitleLarge>Shop By Category</TitleLarge>
      </CategoryTitleContainer>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </CategoriesContainer>
      {categories.map((category, index) => (
        <CatalogProductList
          key={index}
          catalogId={category.id}
          catalogName={category.name}
        />
      ))}
      <CategoryTitleContainer>
        <TitleLarge>Trending Products</TitleLarge>
      </CategoryTitleContainer>
      <CategoriesContainer>
        <Grid style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          {categories.map((category, index) => (
            <ProductCard
              inScrolList={true}
              product={{
                id: "",
                storeId: "",
                desc: "",
                images: [
                  "https://nirmalalankar.jewellers.store/_next/image?url=%2Fassets%2Fdashboard%2FDashboardCategoryNECKLACES.png&w=256&q=75",
                ],
                wtRange: { max: 1, min: 1 },
                sC: "",
                gender: "",
                views: 0,
                likes: 0,
                name: category?.name,
              }}
            />
          ))}
        </Grid>
      </CategoriesContainer>
    </BodyContainer>
  );
};
