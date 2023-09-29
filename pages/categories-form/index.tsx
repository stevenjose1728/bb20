import React, { useContext, useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import ImageUploader from '@/components/ImageUploader';
import Layout from '@/components/Layout/Layout'
import { SpinnerContext } from '@/context/SpinnerContext';
import { CategoryService } from '@/services';
import { Category } from '@/models/Category';

type Form = {
  thumbnail: string,
  mainCategoryDescription: string,
  category: number | null,
  featuredInHeaderAndFooter: boolean,
  featuredInTheBannerIcons: boolean,
  featuredInTheTilesSection: boolean,
  name: string,
  landingPageHeadline: string,
  subCategoryDescription: string,
  active: boolean,
  static: boolean
}
const CKEditor = dynamic(() => import('@/components/CKEditor'), { ssr: false });
function index() {
  const initialFormState: Form = {
    thumbnail: '',
    mainCategoryDescription: '',
    category: null,
    featuredInHeaderAndFooter: false,
    featuredInTheBannerIcons: false,
    featuredInTheTilesSection: false,
    name: '',
    landingPageHeadline: '',
    subCategoryDescription: '',
    active: false,
    static: false
  }
  const { startLoading, stopLoading } = useContext(SpinnerContext);
  const [categories, setCategories] = useState<Category[]>([])
  const [form, setForm] = useState<Form>(initialFormState);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const loadCategories = async () => {
    try {
      startLoading();
      const _categories = await CategoryService.getCategories() as Category[];
      setCategories(_categories)
    } catch (e) {
      console.log('>>: error > ', e)
    } finally {
      stopLoading()
    }
  }
  useEffect(() => {
    loadCategories();
    setEditorLoaded(true);
  }, []);
  const handleFormChange = (value: string | boolean, key: keyof Form) => {
    setForm({
      ...form,
      [key]: value
    })
  }
  const handleImageUpload = (thumbnail: string | null) => {
    if (thumbnail) {
      setForm({
        ...form,
        thumbnail
      })
    }
  };
  return (
    <Layout>
      <div
        className='uk-padding'
      >
        <h2>Create/Edit Categories</h2>
        <div className="uk-margin uk-width-1-4">
          <label className="uk-form-label" htmlFor="form-categories">Categories</label>
          <div className="uk-form-controls">
            <select
              className="uk-select"
              id="form-categories"
              value={form.category || ''}
              onChange={e => handleFormChange(e.target.value, 'category')}
            >
              {
                categories.map(element => {
                  return (
                    <option
                      value={element.categoryId}
                    >
                      {element.categoryName}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div data-uk-grid>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                onChange={e => handleFormChange(e.target.checked, 'featuredInHeaderAndFooter')}
                checked={form.featuredInHeaderAndFooter}
              />
              Featured in header and footer
            </label>
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                onChange={e => handleFormChange(e.target.checked, 'featuredInTheBannerIcons')}
                checked={form.featuredInTheBannerIcons}
              />
              Featured in the banner icons section
            </label>
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                onChange={e => handleFormChange(e.target.checked, 'featuredInTheTilesSection')}
                checked={form.featuredInTheTilesSection}
              />
              Featured in the titles section
            </label>
          </div>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Name <span className='uk-text-danger'>*</span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Some Name..."
              onChange={e => handleFormChange(e.target.value, 'name')}
              value={form.name}
            />
          </div>
        </div>
        <ImageUploader onImageUpload={handleImageUpload} />
        <p className="uk-text-bold uk-text-capitalize uk-margin-remove-left uk-padding-remove-left uk-margin-remove-bottom">Main Category Landing Page Description</p>
        <div className="uk-padding">
          <CKEditor
            name="description"
            onChange={(data) => handleFormChange(data, 'mainCategoryDescription')}
            editorLoaded={editorLoaded}
            preview={true}
            value={form.mainCategoryDescription}
          />
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-capitalize" htmlFor="form-stacked-text">
            main-category landing page headline
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-stacked-text"
              type="text"
              onChange={e => handleFormChange(e.target.value, 'landingPageHeadline')}
              value={form.landingPageHeadline}
            />
          </div>
        </div>
        <p className="uk-text-bold uk-text-capitalize uk-margin-remove-left uk-padding-remove-left uk-margin-remove-bottom">
          sub-category langing page description
        </p>
        <div className="uk-padding">
          <CKEditor
            name="subCategoryDescription"
            onChange={(data) => handleFormChange(data, 'subCategoryDescription')}
            editorLoaded={editorLoaded}
            preview={true}
            value={form.subCategoryDescription}
          />
        </div>

        <div data-uk-grid>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              onChange={e => handleFormChange(e.target.checked, 'active')}
              checked={form.active}
            />
            Active
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              onChange={e => handleFormChange(e.target.checked, 'static')}
              checked={form.static}
            />
            Static
          </label>
        </div>
      </div>
    </Layout>
  )
}

export default index
