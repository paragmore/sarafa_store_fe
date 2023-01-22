import {
  getApiBaseUrl,
  requestExecutor,
  HTTP_METHODS,
} from "../core/utils/RequestExecutor";

export interface GetProductsQueryParamsI {
  pageSize?: string;
  page?: string;
  sortingPattern?: string;
  sC?: string;
  gender?: string;
  max?: string;
  min?: string;
}
export class ProductRepo {
  buildUrl = (baseUrl: string, options: GetProductsQueryParamsI = {}) => {
    const queryParams = new URLSearchParams();
    if (options.pageSize) {
      queryParams.append("pageSize", options.pageSize);
    }
    if (options.page) {
      queryParams.append("page", options.page);
    }
    if (options.max) {
      queryParams.append("max", options.max);
    }
    if (options.min) {
      queryParams.append("min", options.min);
    }
    if (options.gender) {
      queryParams.append("gender", options.gender);
    }
    if (options.sC) {
      queryParams.append("sC", options.sC);
    }
    return `${baseUrl}?${queryParams.toString()}`;
  };
  getStoreProducts = async (
    storeId: string,
    queryOptions: GetProductsQueryParamsI = {}
  ) => {
    const baseUrl = getApiBaseUrl() + `product/${storeId}`;
    const url = this.buildUrl(baseUrl, queryOptions);
    try {
      const response = await requestExecutor(
        url,
        {
          method: HTTP_METHODS.GET,
        },
        3
      );
      console.log(response);
      return response?.body?.products;
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  };

  getProductById = async (productId: string) => {
    const baseUrl = getApiBaseUrl() + `product/single/${productId}`;
    try {
      const response = await requestExecutor(
        baseUrl,
        {
          method: HTTP_METHODS.GET,
        },
        3
      );
      console.log(response);
      return response?.body;
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  };
}
