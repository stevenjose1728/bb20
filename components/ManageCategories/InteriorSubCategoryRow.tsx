import InteriorSubCategory from '@/models/InteriorSubCategory'
import Link from 'next/link'
import React from 'react'

type Props = {
  interiorSubCategory: InteriorSubCategory,
  handleRedirect: (url: string, params: object) => void,
}
function InteriorSubCategoryRow({ interiorSubCategory, handleRedirect }: Props) {
  return (
    <div
      className="uk-grid-column-small uk-grid-row-large uk-child-width-1-5@s uk-text-center"
      data-uk-grid
    >
      <p className="uk-text-small">
        {interiorSubCategory.name}
      </p>
      <div className='uk-text-capitalize'>
        <p className="uk-text-small">
          <span className={(!interiorSubCategory.onDisplay ? 'red' : 'green') + '-circle'}></span>
          {!interiorSubCategory.onDisplay ? 'hidden' : 'on display'}
        </p>
      </div>
      <div>

      </div>
      <div>
        <button
          className="uk-button uk-button-link"
          data-uk-icon="icon: pencil"
          onClick={() => handleRedirect('/categories-form', { interiorSubCategory: interiorSubCategory.interiorsubcategoryId, subCategoryId: interiorSubCategory.subcategoryId })}
        />
      </div>
      <div>
        <Link href={'/delete/' + interiorSubCategory.interiorsubcategoryId} data-uk-icon="icon: trash"></Link>
      </div>
    </div>
  )
}

export default InteriorSubCategoryRow
