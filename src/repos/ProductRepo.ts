import {
  getApiBaseUrl,
  requestExecutor,
  HTTP_METHODS,
} from "../core/utils/RequestExecutor";

export class ProductRepo {
  getStoreProducts = async (storeId: string) => {
    const url = getApiBaseUrl();
    try {
      requestExecutor(url, {
        method: HTTP_METHODS.GET,
      });
    } catch (error) {}
  };
}
