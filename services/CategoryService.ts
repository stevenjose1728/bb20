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
}

export default CategoryService;