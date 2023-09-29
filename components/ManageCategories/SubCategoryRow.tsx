import InteriorSubCategory from '@/models/InteriorSubCategory'
import SubCategory from '@/models/SubCategory'
import Link from 'next/link'
import React from 'react'
import InteriorSubCategoryRow from './InteriorSubCategoryRow'


type Props = {
  subCategories: Array<SubCategory & {
    interiorSubCategories?: InteriorSubCategory[]
  }>,
  handleRedirect: (url: string, params: object) => void,
  loadInteriorCategories: (subCategoryId: number, categoryId: number) => void
}
function SubCategoryRow({ subCategories, loadInteriorCategories, handleRedirect }: Props) {
  return (
    <>
      {
        subCategories?.map(subcategory => {
          return (
            <ul
              className='sub-categories-container'
              data-uk-accordion
              key={subcategory.subcategoryId}
            >
              <li
                onClick={() => loadInteriorCategories(subcategory.subcategoryId, subcategory.categoryId)}
              >
                <div className="uk-accordion-title">
                  <div
                    className="uk-grid-column-small uk-grid-row-large uk-child-width-1-5@s uk-text-center"
                    data-uk-grid
                  >
                    <p className="uk-text-small">
                      {subcategory.name}
                    </p>
                    <div className='uk-text-capitalize'>
                      <p className="uk-text-small">
                        <span className={(!subcategory.onDisplay ? 'red' : 'green') + '-circle'}></span>
                        {!subcategory.onDisplay ? 'hidden' : 'on display'}
                      </p>
                    </div>
                    <div>

                    </div>
                    <div>
                      <button
                        className="uk-button uk-button-link"
                        data-uk-icon="icon: pencil"
                        onClick={() => handleRedirect('/categories-form', { categoryId: subcategory.subcategoryId })}
                      />
                    </div>
                    <div>
                      <Link href={'/delete/' + subcategory.subcategoryId} data-uk-icon="icon: trash"></Link>
                    </div>
                  </div>
                </div>
                {/* Second Child Content */}
                <div className="uk-accordion-content interior-sub-categories-container">
                  {
                    subcategory.interiorSubCategories?.map(interiorSubCategory => {
                      return (
                        <InteriorSubCategoryRow
                          key={interiorSubCategory.interiorsubcategoryId}
                          interiorSubCategory={interiorSubCategory}
                          handleRedirect={handleRedirect}
                        />
                      )
                    })
                  }
                </div>
                {/* End Second Child Content */}
              </li>
            </ul>
          )
        })
      }
    </>
  )
}

export default SubCategoryRow
