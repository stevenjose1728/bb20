import { DisplayItemOptions, DisplayOptionsPostType, Featured } from '@/models/DisplayOptionsEnum'
import CategoryForm from '@/models/ManageContentCategoriesForm'
import Form from '@/models/ManageContentForm'
import React from 'react'
import CategoriesData from '@/data/CategoriesData.json';
import { DisplayOptions } from '@/models/DisplayEnum';

const { data: categories, subCategories, interiorSubCategories } = CategoriesData
type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form,
  addCategory: () => void
  handleCategoriesFormChange: (value: string | number, key: keyof CategoryForm, index: number) => void,
  memoCategories: (index: number) => {
    categories: typeof categories,
    subCategories: typeof subCategories,
    interiorSubCategories: typeof interiorSubCategories
  },
  handleRemoveCategory: (index: number) => void
}
function DisplayOptionsCard({ form, handleFormChange, addCategory, handleCategoriesFormChange, memoCategories, handleRemoveCategory }: Props) {
  return (
    <li
    >
      <a className="uk-accordion-title uk-text-uppercase">
        Display Options
      </a>
      <div className="uk-accordion-content">
        <div className="uk-margin">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name="form-displayOptionShowComment"
              checked={form.displayOptionShowComment}
              onChange={e => handleFormChange(e.target.checked, 'displayOptionShowComment')}
            />
            Show Comment
            <span className="uk-text-light uk-text-small uk-margin-left">
              When checked, associated comments will be shown. When not checked, comments will not be shown and new comments cannot be created
            </span>
          </label>
        </div>
        <div className="uk-margin">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name="form-displayOptionNoNewComments"
              checked={form.displayOptionNoNewComments}
              onChange={e => handleFormChange(e.target.checked, 'displayOptionNoNewComments')}
            />
            No New Comments
            <span className="uk-text-light uk-text-small uk-margin-left">
              When checked, new comments cannot be created.
            </span>
          </label>
        </div>
        <div className="separator"></div>
        <div className="categories-container">
          <h5 className="uk-text-bold">
            Select Category
            <span className='uk-margin-small-left uk-text-danger'>*</span>
          </h5>
          {
            form.categories.map((element, i) => {
              return (
                <div
                  className="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-margin-remove-top uk-margin-top-small"
                  data-uk-grid
                  key={i}
                >
                  <div className="">
                    <label className="uk-form-label" htmlFor="form-stacked-select">Category</label>
                    <div className="uk-form-controls">
                      <select
                        className="uk-select"
                        id="form-stacked-select"
                        value={element.category}
                        onChange={e => handleCategoriesFormChange(parseInt(e.target.value), 'category', i)}
                      >
                        {
                          memoCategories(i).categories?.map(category => {
                            return (
                              <option
                                value={category.id}
                                key={category.id}
                              >
                                {category.name}
                              </option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <label className="uk-form-label" htmlFor="form-stacked-select-sub-category">Sub-Category</label>
                    <div className="uk-form-controls">
                      <select
                        className="uk-select"
                        id="form-stacked-select-sub-category"
                        onChange={e => handleCategoriesFormChange(parseInt(e.target.value), 'subCategory', i)}
                        disabled={!element.category || !memoCategories(i).subCategories.length}
                      >
                        {
                          memoCategories(i).subCategories?.map(category => {
                            return (
                              <option
                                key={category.id}
                                value={category.id}
                              >
                                {category.name}
                              </option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <label className="uk-form-label" htmlFor="form-stacked-select-interior-sub-category">Interior Sub Category</label>
                    <div className="uk-form-controls">
                      <select
                        className="uk-select"
                        id="form-stacked-select-interior-sub-category"
                        onChange={e => handleCategoriesFormChange(parseInt(e.target.value), 'interiorSubCategory', i)}
                        disabled={!element.category || !element.subCategory || !memoCategories(i).interiorSubCategories.length}
                      >
                        {
                          memoCategories(i).interiorSubCategories?.map(category => {
                            return (
                              <option
                                key={category.id}
                                value={category.id}
                              >
                                {category.name}
                              </option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <label className="uk-form-label" htmlFor="form-stacked-select-interior-sub-category">Display</label>
                    <div
                      className="uk-form-controls uk-text-capitalize uk-margin-small-top"
                    >
                      <button
                        className="uk-button uk-button-link"
                        onClick={() => handleCategoriesFormChange(element.onDisplay === DisplayOptions.HIDDEN ? DisplayOptions.DISPLAY : DisplayOptions.HIDDEN, 'onDisplay', i)}
                      >
                        <span className={(element.onDisplay === DisplayOptions.HIDDEN ? 'red' : 'green') + '-circle'}></span>
                        {element.onDisplay}
                      </button>
                      {
                        form.categories.length > 1 && (
                          <button
                            className="uk-button uk-button-text uk-button-small"
                            data-uk-icon="icon: trash"
                            onClick={() => handleRemoveCategory(i)}
                          >

                          </button>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
          <button
            className="uk-button uk-button-text uk-margin-top"
            onClick={addCategory}
          >
            Add Category
          </button>
        </div>
        <div className="separator"></div>
        <div className="uk-margin">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name={"form-displayItem-" + DisplayItemOptions.hide}
              checked={form.displayItem === DisplayItemOptions.hide}
              onChange={() => handleFormChange(DisplayItemOptions.hide, 'displayItem')}
            />
            Hide item
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-left uk-margin-right"
              type="checkbox"
              name={"form-displayItem-" + DisplayItemOptions.display}
              checked={form.displayItem === DisplayItemOptions.display}
              onChange={() => handleFormChange(DisplayItemOptions.display, 'displayItem')}
            />
            Display Item
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-left uk-margin-right"
              type="checkbox"
              name={"form-displayItem-" + DisplayItemOptions.withInDateRange}
              checked={form.displayItem === DisplayItemOptions.withInDateRange}
              onChange={() => handleFormChange(DisplayItemOptions.withInDateRange, 'displayItem')}
            />
            Display Item Within Date Range
          </label>
        </div>
        <div className="uk-margin">
          <span className='uk-text-light uk-margin-right'>Home Page:</span>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name={"form-homePage-" + Featured.notFeatured}
              checked={form.homePage === Featured.notFeatured}
              onChange={() => handleFormChange(Featured.notFeatured, 'homePage')}
            />
            Not Featured
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-homePage-" + Featured.featured}
              checked={form.homePage === Featured.featured}
              onChange={() => handleFormChange(Featured.featured, 'homePage')}
            />
            Feature Item
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-homePage-" + Featured.withInDateRange}
              checked={form.homePage === Featured.withInDateRange}
              onChange={() => handleFormChange(Featured.withInDateRange, 'homePage')}
            />
            Feature Item Within Date Range
          </label>
        </div>
        <div className="uk-margin">
          <span className='uk-text-light uk-margin-right uk-text-small'>Content Landing Page:</span>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox"
              type="checkbox"
              name={"form-homePage-" + Featured.notFeatured}
              checked={form.homePage === Featured.notFeatured}
              onChange={() => handleFormChange(Featured.notFeatured, 'homePage')}
            />
            Not featured
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-homePage-" + Featured.featured}
              checked={form.homePage === Featured.featured}
              onChange={() => handleFormChange(Featured.featured, 'homePage')}
            />
            Feature Item
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-homePage-" + Featured.withInDateRange}
              checked={form.homePage === Featured.withInDateRange}
              onChange={() => handleFormChange(Featured.withInDateRange, 'homePage')}
            />
            Feature Item Within Date Range
          </label>
        </div>
        <div className="uk-margin">
          <div>
            <label
              className='uk-text-bold'
            >
              <input
                className="uk-checkbox uk-margin-right"
                type="checkbox"
                name={"form-unlockedPost"}
                checked={form.unlockedPost}
                onChange={(e) => handleFormChange(e.target.checked, 'unlockedPost')}
              />
              Unlocked post
              <span className="uk-text-small uk-text-light uk-margin-left">
                Post will be visible to users who are not logged in
              </span>
            </label>
          </div>
          <div>
            <label
              className='uk-text-bold'
            >
              <input
                className="uk-checkbox uk-margin-right"
                type="checkbox"
                name={"form-enableMlsSearch"}
                checked={form.enableMlsSearch}
                onChange={(e) => handleFormChange(e.target.checked, 'enableMlsSearch')}
              />
              Enable MLS Search
            </label>
          </div>
          <div>
            <label
              className='uk-text-bold'
            >
              <input
                className="uk-checkbox uk-margin-right"
                type="checkbox"
                name={"form-packageTemplate"}
                checked={form.packageTemplate}
                onChange={(e) => handleFormChange(e.target.checked, 'packageTemplate')}
              />
              Package Template
            </label>
          </div>
        </div>
        <div className="uk-margin">
          <span className='uk-text-light uk-margin-right uk-text-small'>
            Post Type:
          </span>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name={"form-postType-" + DisplayOptionsPostType.template}
              checked={form.postType === DisplayOptionsPostType.template}
              onChange={() => handleFormChange(DisplayOptionsPostType.template, 'postType')}
            />
            Template
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-postType-" + DisplayOptionsPostType.page}
              checked={form.postType === DisplayOptionsPostType.page}
              onChange={() => handleFormChange(DisplayOptionsPostType.page, 'postType')}
            />
            Page
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-postType-" + DisplayOptionsPostType.staticDocument}
              checked={form.postType === DisplayOptionsPostType.staticDocument}
              onChange={() => handleFormChange(DisplayOptionsPostType.staticDocument, 'postType')}
            />
            Static Document
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-postType-" + DisplayOptionsPostType.externalUrl}
              checked={form.postType === DisplayOptionsPostType.externalUrl}
              onChange={() => handleFormChange(DisplayOptionsPostType.externalUrl, 'postType')}
            />
            External URL
          </label>
        </div>
      </div>
    </li>
  )
}

export default DisplayOptionsCard
