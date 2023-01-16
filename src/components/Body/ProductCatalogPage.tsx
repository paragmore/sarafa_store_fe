import React, { useEffect, useState } from "react";
import { ProductCard } from "../../core/components/ProductCard";
import { Product } from "../../core/models/storeInfo";
import { useStoreInfo } from "../../hooks/storeHook";
import { ProductRepo } from "../../repos/ProductRepo";

export const ProductCatalogPage: React.FC<{ catalogName: string }> = (
  props
) => {
  const { catalogName } = props;
  const { storeInfo } = useStoreInfo();
  const { id } = storeInfo;
  const productRepo = new ProductRepo();
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  useEffect(() => {}, [catalogName, id]);

  const getProducts = async () => {
    setIsProductsLoading(true);
    const products = await productRepo.getStoreProducts(id, {
      page: "1",
      sC: catalogName,
    });
    setIsProductsLoading(false);
    if (products) {
      setCatalogProducts(products);
    }
  };

  return (
    <div style={{ marginTop: "70px" }}>
      {catalogName}
      <div>
        {catalogProducts.map((catalogProduct) => (
          <ProductCard key={catalogProduct.id} {...catalogProduct} />
        ))}
      </div>
    </div>
  );
};
