import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import loading from './loading';

interface HttpResponse<T> {
  status: boolean;
  data: T;
  message?: string;
  code?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const DEFAULT_ERROR_MESSAGE = 'An unexpected error occurred.';

interface GetRequestParams {
  path: string;
  accessToken?: string;
  data?: Record<string, unknown>;
  silent?: boolean;
  config?: AxiosRequestConfig; // Additional Axios config
}

interface PostRequestParams {
  path: string;
  data: Record<string, unknown>;
  accessToken?: string;
  silent?: boolean;
  config?: AxiosRequestConfig; // Additional Axios config
}

class HttpRequest {

  private handleAxiosError<T>(error: unknown): HttpResponse<T> {
    if (axios.isAxiosError(error)) {
      return {
        status: false,
        data: error.response?.data || ({} as T),
        message: error.response?.data?.message || DEFAULT_ERROR_MESSAGE,
      };
    }
    return {
      status: false,
      data: {} as T,
      message: DEFAULT_ERROR_MESSAGE,
    };
  }

  private handleResponse<T>(res: AxiosResponse<HttpResponse<T>>): HttpResponse<T> {
    if (res.data.status) {
      return res.data;
    } else {
      if (res.data.code === 401) {
        // Authentication failed
        location.href = "/";
        return {
          status: false,
          data: res.data.data,
          message: "Authentication failed",
        };
      } else {
        return {
          status: false,
          data: res.data.data,
          message: res.data.message || DEFAULT_ERROR_MESSAGE,
        };
      }
    }
  }

  async get<T>({
    path,
    accessToken,
    data,
    silent = true,
    config,
  }: GetRequestParams): Promise<HttpResponse<T>> {
    try {

      if(!silent) loading.httpRequestLoadingAffect(true); // loading opening

      const res: AxiosResponse<HttpResponse<T>> = await axios.get(`${BASE_URL}${path}`, {
        params: data,
        headers: {
          'Authorization': accessToken ? `Bearer ${accessToken}` : undefined,
          ...config?.headers, // Spread additional headers if provided
        },
        ...config, // Spread additional config if provided
      });

      if(!silent) loading.httpRequestLoadingAffect(false); // loading closing

      return this.handleResponse<T>(res);
    } catch (error) {
      return this.handleAxiosError<T>(error);
    }
  }

  async post<T>({
    path,
    data,
    accessToken,
    silent = true,
    config,
  }: PostRequestParams): Promise<HttpResponse<T>> {
    try {

      if(!silent) loading.httpRequestLoadingAffect(true); // loading opening

      const res: AxiosResponse<HttpResponse<T>> = await axios.post(`${BASE_URL}${path}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken ? `Bearer ${accessToken}` : undefined,
          ...config?.headers, // Spread additional headers if provided
        },
        ...config, // Spread additional config if provided
      });

      if(!silent) loading.httpRequestLoadingAffect(false); // loading closing
      
      return this.handleResponse<T>(res);
    } catch (error) {
      return this.handleAxiosError<T>(error);
    }
  }
}

export default HttpRequest;