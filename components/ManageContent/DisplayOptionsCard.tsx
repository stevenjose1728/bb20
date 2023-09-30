import { DisplayItemOptions, DisplayOptionsPostType, Featured } from '@/models/DisplayOptionsEnum'
import Form from '@/models/ManageContentForm'
import React from 'react'

type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form,
}
function DisplayOptionsCard({ form, handleFormChange }: Props) {
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
        categories
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
