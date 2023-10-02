import { DisplayOptions } from "./DisplayEnum"

type CategoryForm = {
  category: number,
  subCategory: number | null,
  interiorSubCategory: number | null,
  onDisplay: DisplayOptions.DISPLAY | DisplayOptions.HIDDEN
}

export default CategoryForm