import { AxiosInstance, AxiosResponse } from 'axios';
import { isFunction } from 'lodash';
import { dto } from './dto';

export const camelToSnake = (str: string) =>
  str[0].toLowerCase() +
  str.slice(1, str.length).replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);

export const queryParams = (params: Record<string, string | number | boolean>) => {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .sort(([key], [nextKey]) => (key > nextKey ? 1 : -1))
    .map(([key]) => `${camelToSnake(key)}=${params[key]}`)
    .join('&');
};

export const axiosCreator = <ParamsType, AxiosResponseType>({
  axiosInstance,
  endPoint,
  method,
}: {
  axiosInstance: AxiosInstance;
  endPoint: string | ((args: ParamsType) => string);
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
}) => {
  // @ts-ignore
  const func: {
    (params: ParamsType, options?: { axios: AxiosInstance }): Promise<DTONested<AxiosResponseType>>;
    endpoint: string | ((args: ParamsType) => string);
  } = async (params: ParamsType, options = { axios: axiosInstance }) => {
    const { axios } = options;

    const response: AxiosResponse<AxiosResponseType> = await axios[method](
      isFunction(endPoint) ? endPoint(params as any) : endPoint,
      params,
    );

    return dto(response.data);
  };

  func.endpoint = endPoint;

  return func;
};
