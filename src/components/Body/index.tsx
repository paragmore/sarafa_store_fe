import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "../../core/components/Carousel";
import { CategoryCard } from "../../core/components/CategoryCard";
import { ProductCard } from "../../core/components/ProductCard";
import { Item } from "../../core/models/storeInfo";
import { TitleLarge, TitleXlarge } from "../../core/themes/Typography";
import { StoreRepo } from "../../repos/StoreRepo";
import { useAppSelector } from "../../store";

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
}

export const Body = () => {
  const storeInfo = useAppSelector((state) => state.storeInfo);
  const [categories, setcategories] = useState<Category[]>([]);
  const [filteredProducts, setfilteredProducts] = useState<Map<string, Item[]>>(
    new Map()
  );
  const storeRepo = React.useMemo(() => new StoreRepo(), []);

  useEffect(() => {
    storeRepo.getSubCategories().then((data) => {
      console.log(data);
      setcategories(data.filter((item) => storeInfo.sC.includes(item.name)));
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
      <WelcomeTitle>Welcome to {storeInfo.name}</WelcomeTitle>
      <Carousel
        imagesUrl={[
          "https://parkofideas.com/goldish/demo1/wp-content/uploads/2021/09/goldish-1910574079.jpg",
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
      {Array.from(filteredProducts.keys()).map((key) => (
        <>
          <SectionTitleContainer>
            <TitleLarge>{key}</TitleLarge>
          </SectionTitleContainer>
          <ProductsContainer>
            {Array.from(filteredProducts.get(key) || []).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ProductsContainer>
        </>
      ))}
    </BodyContainer>
  );
};
