import axios, { AxiosRequestConfig } from "axios";

export const getApiBaseUrl = () => {
  return process.env.isProd ? "" : "http://127.0.0.1:8000/";
};
export interface HTTP_METHODS {
  GET: "GET";
  POST: "POST";
  PUT: "PUT";
  DELETE: "DELETE";
}
export const requestExecutor = async (
  url: string,
  options: AxiosRequestConfig = {},
  retries = 3,
  showLoadingIndicator: Function,
  hideLoadingIndicator: Function,
  handleError: Function
): Promise<any> => {
  try {
    // Show loading indicator
    showLoadingIndicator();

    const response = await axios(url, options);

    // Hide loading indicator
    hideLoadingIndicator();

    return response.data;
  } catch (error) {
    if (retries > 0) {
      // Retry request
      return requestExecutor(
        url,
        options,
        retries - 1,
        showLoadingIndicator,
        hideLoadingIndicator,
        handleError
      );
    }

    // Hide loading indicator
    hideLoadingIndicator();

    // Handle error
    handleError(error);

    throw new Error(`Request failed: ${error}`);
  }
};
