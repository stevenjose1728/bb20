import InteriorSubCategory from '@/models/InteriorSubCategory'
import SubCategory from '@/models/SubCategory'
import Link from 'next/link'
import React from 'react'
import InteriorSubCategoryRow from './InteriorSubCategoryRow'


type Props = {
  subCategories: Array<SubCategory & {
    interiorSubCategories?: InteriorSubCategory[]
  }>,
  handleRedirect: (url: string, categoryId: number) => void,
  loadInteriorCategories: (subCategoryId: number, categoryId: number) => void
}
function SubCategoryRow({ subCategories, loadInteriorCategories, handleRedirect }: Props) {
  return (
    <>
      {
        subCategories?.map(subcategory => {
          return (
            <ul
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
                    <div>
                      {subcategory.name}
                    </div>
                    <div className='uk-text-capitalize'>
                      <span className={(!subcategory.onDisplay ? 'red' : 'green') + '-circle'}></span>
                      {!subcategory.onDisplay ? 'hidden' : 'on display'}
                    </div>
                    <div>

                    </div>
                    <div>
                      <button
                        className="uk-button uk-button-link"
                        data-uk-icon="icon: pencil"
                        onClick={() => handleRedirect('/categories-form', subcategory.subcategoryId)}
                      />
                    </div>
                    <div>
                      <Link href={'/delete/' + subcategory.subcategoryId} data-uk-icon="icon: trash"></Link>
                    </div>
                  </div>
                </div>
                {/* Second Child Content */}
                <div className="uk-accordion-content">
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
