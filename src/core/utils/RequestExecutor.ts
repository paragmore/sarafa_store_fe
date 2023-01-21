import axios, { AxiosRequestConfig } from "axios";

export const getApiBaseUrl = () => {
  return process.env.isProd ? "https://sarafa.onrender.com/" : "https://sarafa.onrender.com/";
};
export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export const requestExecutor = async (
  url: string,
  options: AxiosRequestConfig = {},
  retries = 3
): Promise<any> => {
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (error) {
    if (retries > 0) {
      // Retry request
      return requestExecutor(url, options, retries - 1);
    }
    throw new Error(`Request failed: ${error}`);
  }
};
