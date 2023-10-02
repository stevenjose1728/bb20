import React, { useContext, useState, useEffect, useMemo } from 'react'
import CategoriesData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout'
import { SpinnerContext } from '@/context/SpinnerContext';
import { CategoryService } from '@/services';
import { Category } from '@/models/Category';
import { useRouter } from 'next/router';
import SubCategory from '@/models/SubCategory';
import InteriorSubCategory from '@/models/InteriorSubCategory';
import CategoriesRows from '@/components/ManageCategories/CategoriesRows';

type Categories = Category & {
  subCategories: Array<SubCategory & {
    interiorSubCategories?: InteriorSubCategory[]
  }>
}
function ManageCategories() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(SpinnerContext);
  const [categories, setCategories] = useState<Categories[]>([{
    categoryId: 1,
    categoryName: 'Categoria 1',
    onDisplay: true,
    subCategories: [{
      subcategoryId: 1,
      name: 'Sub Category 1',
      catLandingDescription: '',
      headling: '',
      catLandingDescriptionMarkup: '',
      descriptionMarkup: '',
      externalUrlActive: '',
      prettyUrl: '',
      externalUrl: '',
      fileOrig: '',
      static: false,
      onDisplay: false,
      categoryId: 1,
      interiorSubCategories: [
        {
          interiorsubcategoryId: 1,
          name: 'Interior Sub Category 1',
          catLandingDescription: '',
          headline: '',
          catLandingDescriptionMarkup: '',
          descriptionMarkup: '',
          externalUrlActive: false,
          prettyUrl: '',
          externalUrl: '',
          fileOrig: '',
          static: false,
          onDisplay: false,
          subcategoryId: 1,
        }
      ]
    }]
  }]);
  const [display, setDisplay] = useState<string>('');
  const [filterName, setFilterName] = useState<string>('');
  const displayOptions = [
    {
      label: 'show all',
      value: ''
    },
    {
      label: 'on display',
      value: 'on display',
    },
    {
      label: 'hidden',
      value: 'hidden',
    },
  ];

  const loadCategories = async () => {
    try {
      startLoading()
      const _categories = await CategoryService.getCategories() as Category[];
      // setCategories(_categories);
    } catch (error) {
      console.log('error > ', error)
    } finally {
      stopLoading()
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  const handleDisplayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setDisplay(event.target.value);
  }
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFilterName(event.target.value);
  }
  const handleResetForm = () => {
    startLoading();
    setFilterName('');
    setDisplay('');
    stopLoading();
  }
  const handleRedirect = (url: string, params: object) => {
    router.push({
      pathname: url,
      query: { ...params }
    }, url);
  }

  const loadSubCategories = async (categoryId: number) => {
    try {
      startLoading();
      const _subcategories = await CategoryService.getSubCategories(categoryId) as SubCategory[];
      let _categories = [...categories];
      const categoryIndex = categories.findIndex(element => element.categoryId === categoryId);
      // _categories[categoryIndex].subCategories = _subcategories;
      // setCategories(_categories)
    } catch (error) {
      console.log('error > ', error)
    } finally {
      stopLoading()
    }
  }

  const loadInteriorCategories = async (subCategoryId: number, categoryId: number) => {
    try {
      startLoading();
      const _interiorSubCategories = await CategoryService.getInteriorSubCategories(subCategoryId) as InteriorSubCategory[];
      let _categories = [...categories];
      const categoryIndex = categories.findIndex(element => element.categoryId === categoryId);
      if (categoryIndex) {
        const subCategoryIndex = _categories[categoryIndex].subCategories.findIndex(element => element.subcategoryId === subCategoryId);
        // if(subCategoryIndex){
        //   _categories[categoryId].subCategories[subCategoryIndex].interiorSubCategories = _interiorSubCategories
        //   setCategories(_categories)
        // }
      }
    } catch (error) {
      console.log('error ', error)
    } finally {
      stopLoading()
    }
  }

  const memoContentData = useMemo(() => {
    let _contentData = categories;
    if (display) {
      _contentData = _contentData.filter(element => element.onDisplay === (display === 'on display'));
    }
    if (filterName) {
      _contentData = _contentData.filter(element => element.categoryName.toLowerCase().includes(filterName.toLowerCase()));
    }

    return _contentData
  }, [display, filterName])

  return (
    <Layout>
      <div className="uk-card uk-card-default uk-card-body custom-card">
        <div className='bordered-card'>
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
              <div className="uk-width-expand">
                <h4 className="uk-card-title uk-margin-remove-bottom uk-text-uppercase uk-text-center">manage content categories</h4>
              </div>
            </div>
          </div>
          <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
            <div>
              <div className="">
                <label className="uk-form-label" htmlFor="displaySelect">Filter By</label>
                <div className="uk-form-controls">
                  <select
                    id="displaySelect"
                    value={display}
                    className='uk-text-capitalize uk-select'
                    onChange={handleDisplayChange}
                  >
                    {
                      displayOptions.map(element => {
                        return (
                          <option
                            key={element.label}
                            value={element.value}
                          >
                            {element.label}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <label className="uk-form-label" htmlFor="search-by-name">Search by Name</label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    type="text"
                    id="search-by-name"
                    value={filterName}
                    onChange={handleNameChange}
                  />
                  <button
                    className="uk-button uk-button-secondary uk-button-small"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
            <div
              className="uk-flex uk-justify-center uk-align-items-center"
              style={{
                justifyContent: 'center'
              }}
            >
              <div
                className='uk-block'
              >
                <div>
                  <div
                    data-uk-icon="icon: refresh"
                  ></div>
                  <button
                    className="uk-button uk-button-text"
                    onClick={() => handleResetForm()}
                  >
                    Reset
                  </button>
                </div>
                <div
                >
                  <button
                    className="uk-button uk-button-link"
                    onClick={() => handleRedirect('/categories-form', {})}
                  >
                    <div
                      data-uk-icon="icon: plus"
                    ></div>
                    New Sub Category
                  </button>
                </div>
                <div>
                  <button
                    className="uk-button uk-button-link"
                    onClick={() => handleRedirect('/categories-form', { interiorSubCategory: true })}
                  >
                    <div
                      data-uk-icon="icon: plus"
                    ></div>
                    New Interior Category
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-table">
            <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-5@s uk-text-center custom-table-header uk-margin-remove-left" data-uk-grid>
              <div>
                Name
              </div>
              <div>
                Display
              </div>
              <div>
                Sort
              </div>
              <div>
                Edit
              </div>
              <div>
                Delete
              </div>
            </div>

            <CategoriesRows
              categories={memoContentData}
              handleRedirect={handleRedirect}
              loadInteriorCategories={loadInteriorCategories}
              loadSubCategories={loadSubCategories}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ManageCategories
