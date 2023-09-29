import { axios } from '@/utils';

class CategoryService {
  static async getCategories() {
    return new Promise((resolve, reject) => {
      axios.get('/ManageCategories/getcategories').then(
        ({ data }) => {
          // http success
          resolve(data);
        },
        ({ response }) => {
          const { data } = response;
          // http failed
          reject(data);
        }
      );
    });

  }
  static async getSubCategories(categoryId: number) {
    return new Promise((resolve, reject) => {
      axios.get('/ManageCategories/getsubcategoriesbycategoryid/' + categoryId).then(
        ({ data }) => {
          // http success
          resolve(data);
        },
        ({ response }) => {
          const { data } = response;
          // http failed
          reject(data);
        }
      );
    });

  }
  static async getInteriorSubCategories(subCategoryId: number) {
    return new Promise((resolve, reject) => {
      axios.get('/ManageCategories/getinteriorsubcategoriesbysubcategoryid/' + subCategoryId).then(
        ({ data }) => {
          // http success
          resolve(data);
        },
        ({ response }) => {
          const { data } = response;
          // http failed
          reject(data);
        }
      );
    });

  }
}

export default CategoryService;