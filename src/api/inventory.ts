import { CategoryResponse, ItemBody, ItemCreationResponse, ItemListResponse } from "./inventory.types";
import axios, { AxiosResponse } from "axios";

const basePath = "http://localhost:8000/v1";

export const getItemsList = async (
  page: number,
  pageSize: number
): Promise<ItemListResponse> => {
  const { data }: AxiosResponse<ItemListResponse> = await axios.get(`${basePath}/item`, { params: { "page": page, "page_size": pageSize } });

  return data;
}

export const getCategory = async (categoryId: string): Promise<CategoryResponse> => {
  const { data }: AxiosResponse<CategoryResponse> = await axios.get(`${basePath}/category/${categoryId}`);

  return data;
}

export const createItem = async (item: ItemBody): Promise<ItemCreationResponse> => {
  const { data }: AxiosResponse<ItemCreationResponse> = await axios.post(`${basePath}/item`, item);

  return data;
}