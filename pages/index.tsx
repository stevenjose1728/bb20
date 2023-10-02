import React, { useContext, useMemo, useState } from 'react'
import CategoriesData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import { SpinnerContext } from '@/context/SpinnerContext';
import ContentData from '@/data/ContentData.json';
import Form from '@/models/ManageContentForm';
import { DisplayItemOptions } from '@/models/DisplayOptionsEnum';
import { useRouter } from 'next/router';

function indexPage() {
  const router = useRouter();
  const contentData = ContentData.data as Form[]
  const emptyCategoryFilter = { category: null, subCategory: null, interiorSubCategory: null }
  const { startLoading, stopLoading } = useContext(SpinnerContext);
  const { data, subCategories: subCategoriesData, interiorSubCategories: interiorSubCategoriesData } = CategoriesData;
  const [constantsData, setConstantsData] = useState({
    categories: data,
    subCategories: subCategoriesData,
    interiorSubCategories: interiorSubCategoriesData
  })
  const [categoryFilter, setCategoryFilter] = useState<{ category: null | number, subCategory: null | number, interiorSubCategory: null | number }>(emptyCategoryFilter);
  const [categories, setCategories] = useState(data);
  const [display, setDisplay] = useState<string>('');
  const [filterName, setFilterName] = useState<string>('');
  const tableRows = ['Title', 'Category', 'Display', 'Unlocked', 'Edit', 'Delete']
  const displayOptions = [
    {
      label: '',
      value: ''
    },
    {
      label: DisplayItemOptions.display,
      value: DisplayItemOptions.display,
    },
    {
      label: DisplayItemOptions.hide,
      value: DisplayItemOptions.hide,
    },
  ];
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const concatFilter = event.target.name === 'category' ? emptyCategoryFilter : categoryFilter
    const _categoryFilter = {
      ...concatFilter,
      [event.target.name]: event.target.value ? parseInt(event.target.value) : null
    }
    setCategoryFilter(_categoryFilter);
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

  const handleDisplayOption = (value: string) => {
    setDisplay(value)
  }
  const memoSubCategories = useMemo(() => {
    let _subCategories: typeof subCategoriesData = [];
    let _interiorSubCategories: typeof interiorSubCategoriesData = [];
    if (categoryFilter.category) {
      _subCategories = constantsData.subCategories.filter(element => element.category_id === parseInt(categoryFilter.category?.toString() || ''));
      if (categoryFilter.subCategory) {
        _interiorSubCategories = constantsData.interiorSubCategories.filter(element => element.sub_category_id === parseInt(categoryFilter.subCategory?.toString() || ''));
      }
    } else {
      setCategoryFilter(emptyCategoryFilter);
    }
    return {
      subCategories: _subCategories,
      interiorSubCategories: _interiorSubCategories
    };
  }, [categoryFilter]);

  const getItemCategories = (item: Form): string => {
    let _categories = item.categories.map(element => {
      const category = data.find(_element => _element.id === element.category);
      return category?.name || '';
    })
    return _categories.join(', ');
  }

  const editContent = (item: Form) => {
    router.push({
      pathname: '/content-form',
      query: {
        contentId: item.id
      }
    }, '/content-form');
  }

  const memoContentData = useMemo(() => {
    let _contentData = contentData;
    if (display) {
      _contentData = _contentData.filter(element => element.displayItem === display);
    }
    if (filterName) {
      _contentData = _contentData.filter(element => element.title.toLowerCase().includes(filterName.toLowerCase()));
    }

    if (categoryFilter) {
      if (categoryFilter.category) {
        _contentData = _contentData.filter(element => element.categories.some(category => category.category === categoryFilter.category))
      }
      if (categoryFilter.subCategory) {
        _contentData = _contentData.filter(element => element.categories.some(category => category.subCategory === categoryFilter.subCategory))
      }
      if (categoryFilter.interiorSubCategory) {
        _contentData = _contentData.filter(element => element.categories.some(category => category.interiorSubCategory === categoryFilter.interiorSubCategory))
      }
    }

    return _contentData
  }, [display, filterName, categoryFilter])
  return (
    <Layout>
      <div className="uk-card uk-card-default uk-card-body custom-card">
        <div className='bordered-card'>
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
              <div className="uk-width-expand">
                <h4 className="uk-card-title uk-margin-remove-bottom uk-text-uppercase uk-text-center">Manage Content</h4>
              </div>
            </div>
          </div>
          <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
            <div>
              <div className="">
                <label className="uk-form-label" htmlFor="displaySelect">Display Filter</label>
                <div className="uk-form-controls">
                  <select
                    id="displaySelect"
                    value={display}
                    className='uk-text-capitalize uk-select'
                    onChange={e => handleDisplayOption(e.target.value)}
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
            {/* End Col */}
            <div>
              <div className="">
                <label className="uk-form-label" htmlFor="category">Filter By</label>
                <div className="uk-form-controls">
                  <select
                    id="category"
                    value={categoryFilter.category || ''}
                    className='uk-text-capitalize uk-select'
                    onChange={handleCategoryChange}
                    name="category"
                    placeholder='Category..'
                  >
                    {
                      categories.map(element => {
                        return (
                          <option
                            key={element.name}
                            value={element.id}
                          >
                            {element.name}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="">
                <label className="uk-form-label" htmlFor="subCategory">Sub Categories</label>
                <div className="uk-form-controls">
                  <select
                    id="subCategory"
                    value={categoryFilter.subCategory || ''}
                    className='uk-text-capitalize uk-select'
                    onChange={handleCategoryChange}
                    name="subCategory"
                    placeholder='Sub Category..'
                    disabled={!categoryFilter.category}
                  >
                    {
                      memoSubCategories.subCategories.map(element => {
                        return (
                          <option
                            key={element.name}
                            value={element.id}
                          >
                            {element.name}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="">
                <label className="uk-form-label" htmlFor="interiorSubCategory">Interior Sub Categories</label>
                <div className="uk-form-controls">
                  <select
                    id="interiorSubCategory"
                    value={categoryFilter.interiorSubCategory || ''}
                    className='uk-text-capitalize uk-select'
                    onChange={handleCategoryChange}
                    name="interiorSubCategory"
                    disabled={!categoryFilter.category || !categoryFilter.subCategory}
                  >
                    {
                      memoSubCategories.interiorSubCategories.map(element => {
                        return (
                          <option
                            key={element.name}
                            value={element.id}
                          >
                            {element.name}
                          </option>
                        )
                      })
                    }
                  </select>
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
                  <div
                    data-uk-icon="icon: plus"
                  ></div>
                  <Link
                    href="/content-form"
                    className="uk-button uk-button-text"
                  >
                    New Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <table className="uk-table uk-table-divider uk-table-striped custom-table uk-margin-remove-bottom">
            <thead>
              <tr>
                {
                  tableRows.map(element => {
                    return (
                      <th
                        key={element}
                      >
                        {element}
                      </th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                memoContentData.map((item) => (
                  <tr key={item.id}>
                    <td >{item.title}</td>
                    <td>{getItemCategories(item)} </td>
                    <td className='uk-text-capitalize'>
                      <span className={(item.displayItem === DisplayItemOptions.hide ? 'red' : 'green') + '-circle'}></span>
                      {item.displayItem}
                    </td>
                    <td>

                    </td>
                    <td>
                      <button
                        className="uk-button uk-button-link"
                        data-uk-icon="icon: pencil"
                        onClick={() => editContent(item)}
                      />
                    </td>
                    <td>
                      <Link href={'/delete/' + item.id} data-uk-icon="icon: trash"></Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default indexPage
