import { Category } from '@/models/Category'
import InteriorSubCategory from '@/models/InteriorSubCategory'
import SubCategory from '@/models/SubCategory'
import Link from 'next/link'
import React from 'react'
import SubCategoryRow from './SubCategoryRow'


type Categories = Category & {
  subCategories: Array<SubCategory & {
    interiorSubCategories?: InteriorSubCategory[]
  }>
}

type Props = {
  categories: Categories[],
  loadSubCategories: (categoryId: number) => void,
  handleRedirect: (url: string, params: object) => void,
  loadInteriorCategories: (subCategoryId: number, categoryId: number) => void
}
function CategoriesRows({ categories, loadSubCategories, handleRedirect, loadInteriorCategories }: Props) {
  return (
    <>
      <ul data-uk-accordion>
        {
          categories.map(element => {
            return (
              <li
                key={element.categoryId}
                onClick={() => loadSubCategories(element.categoryId)}
              >
                <div className="uk-accordion-title">
                  <div
                    className="uk-grid-column-small uk-grid-row-large uk-child-width-1-5@s uk-text-center"
                    data-uk-grid
                  >
                    <p className="uk-text-small">
                      {element.categoryName}
                    </p>
                    <div className='uk-text-capitalize'>
                      <p className="uk-text-small">
                        <span className={(!element.onDisplay ? 'red' : 'green') + '-circle'}></span>
                        {!element.onDisplay ? 'hidden' : 'on display'}
                      </p>
                    </div>
                    <div>

                    </div>
                    <div>
                      <button
                        className="uk-button uk-button-link"
                        data-uk-icon="icon: pencil"
                        onClick={() => handleRedirect('/categories-form', { categoryId: element.categoryId })}
                      />
                    </div>
                    <div>
                      <Link href={'/delete/' + element.categoryId} data-uk-icon="icon: trash"></Link>
                    </div>
                  </div>
                </div>
                {/* First Content Child */}
                <div className="uk-accordion-content">
                  <SubCategoryRow
                    subCategories={element.subCategories}
                    handleRedirect={handleRedirect}
                    loadInteriorCategories={loadInteriorCategories}
                  />
                </div>
                {/* End First Content Child */}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CategoriesRows
