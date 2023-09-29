import React, { useContext, useState, useEffect } from 'react'
import CategoriesData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import { SpinnerContext } from '@/context/SpinnerContext';
import { CategoryService } from '@/services';
import { Category } from '@/models/Category';
import { useRouter } from 'next/router';

function ManageCategories() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(SpinnerContext);
  const [categories, setCategories] = useState<Category[]>([{
    categoryId: 1,
    categoryName: 'Categoria 1',
    onDisplay: true
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
  }, [])

  const { data } = CategoriesData;
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
  const handleRedirect = (url: string, categoryId: number) => {
    router.push({
      pathname: url,
      query: { categoryId }
    }, url);
  }
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
                  <div
                    data-uk-icon="icon: plus"
                  ></div>
                  <Link
                    href="/categories-form"
                    className="uk-button uk-button-text"
                    onClick={() => handleResetForm()}
                  >
                    New Sub Category
                  </Link>
                </div>
                <div>
                  <div
                    data-uk-icon="icon: plus"
                  ></div>
                  <Link
                    href="/categories-form"
                    className="uk-button uk-button-text"
                    onClick={() => handleResetForm()}
                  >
                    New Interior Category
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <table className="uk-table uk-table-divider uk-table-striped custom-table uk-margin-remove-bottom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Display</th>
                <th>Sort</th>
                <th>Edit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((item) => (
                  <tr key={item.categoryId}>
                    <td >{item.categoryName}</td>
                    <td className='uk-text-capitalize'>
                      <span className={(!item.onDisplay ? 'red' : 'green') + '-circle'}></span>
                      {!item.onDisplay ? 'hidden' : 'on display'}
                    </td>
                    <td>

                    </td>
                    <td>
                      <button
                        className="uk-button uk-button-link"
                        data-uk-icon="icon: pencil"
                        onClick={() => handleRedirect('/categories-form', item.categoryId)}
                      />
                    </td>
                    <td>
                      <Link href={'/delete/' + item.categoryId} data-uk-icon="icon: trash"></Link>
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

export default ManageCategories
