import { TCategory } from "@/types/category"
import { TItem } from "@/types/Item"

export type ItemListResponse = {
  result: TItem[] | []
  total: number
  page: number
  page_size: number
}

export type CategoryResponse = {
  result: TCategory
}

export type ItemBody = {
  name: string
  description?: string
  category_id: string
  stock_quantity: number
  minimum_threshold: number
}

export type ItemCreationResponse = {
  result: TItem
}