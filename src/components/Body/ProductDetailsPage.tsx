import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breathing, Shimmer } from "react-shimmer";
import { BodyContainer } from ".";
import Button from "../../core/components/Button/Button";
import { Carousel } from "../../core/components/Carousel";
import { Product } from "../../core/models/storeInfo";
import {
  BodyPrimary,
  ButtonRegular,
  TitleFour,
  TitleMedium,
  TitleSmall,
} from "../../core/themes/Typography";
import { capitalizeFirstLetter } from "../../core/utils/StringHelper";
import { useStoreInfo } from "../../hooks/storeHook";
import { ProductRepo } from "../../repos/ProductRepo";

export const ProductDetailsPage: React.FC = (props) => {
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(
    undefined
  );
  const {storeInfo} = useStoreInfo()
  const [isLoading, setIsLoading] = useState(false);
  const { product } = useParams();
  const productRepo = new ProductRepo();
  const fetchProduct = async (productId: string) => {
    setIsLoading(true);
    const product = await productRepo.getProductById(productId);
    setCurrentProduct(product);
    setIsLoading(false);
  };
  useEffect(() => {
    if (!product) {
      return;
    }
    fetchProduct(product);
  }, [product]);

  const handleEnquireClick = () => {
    const productLink = window.location.href
    const message =
      `Hello, can I get some more Information about this product? \n\n ${productLink}`;
    const phoneNumber = "1234567890";
    window.location.href = `https://api.whatsapp.com/send?phone=${storeInfo?.whatsappPhoneNumber}&text=${message}`;
  };

  return (
    <BodyContainer>
      <Grid container xs={12} lg={6}>
        <Grid item xs={12} lg={6}>
          {currentProduct?.images && (
            <Carousel imagesUrl={currentProduct?.images} />
          )}
        </Grid>
        <Grid item xs={12} lg={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            {currentProduct?.name && (
              <div style={{ flex: 1 }}>
                <TitleMedium>
                  {capitalizeFirstLetter(currentProduct?.name)}
                </TitleMedium>
                <TitleSmall>
                  {currentProduct?.wtRange?.min +
                    " gm - " +
                    currentProduct?.wtRange?.max +
                    " gm"}
                </TitleSmall>
              </div>
            )}
            <div style={{ height: "32px" }}>
              <Button
                click={handleEnquireClick}
                buttonSize="ultra-small"
                buttonStyle="primary-outline"
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {" "}
                  Enquire
                </div>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </BodyContainer>
  );
};
