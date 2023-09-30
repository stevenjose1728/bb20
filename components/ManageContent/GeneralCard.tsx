import Form from '@/models/ManageContentForm';
import React, { useEffect, useMemo, useState } from 'react'
import ImageUploader from '../ImageUploader';
import dynamic from 'next/dynamic';

type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form,
  handleImageUpload: (thumbnail: string | null, key: keyof Form) => void
}
const CKEditor = dynamic(() => import('@/components/CKEditor'), { ssr: false });

function GeneralCard({ handleFormChange, form, handleImageUpload }: Props) {
  const filesCount = 5;
  const linksCount = 3;
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const AssociatedFiles = useMemo((): JSX.Element => {
    const files: React.JSX.Element[] = []
    for (let index = 0; index < filesCount; index++) {
      const element = <div
        data-uk-grid
        key={index}
        className='uk-child-width-1-3'
      >
        <div
          className="uk-margin"
        >
          <div
            data-uk-form-custom
          >
            <input
              type="file"
            />
            <button className="uk-button uk-button-secondary uk-text-uppercase" type="button">No file selected</button>
          </div>
        </div>
        <div>
          <input className="uk-checkbox" type="checkbox" readOnly />
        </div>
        <div>
          <input className="uk-input" type="text" readOnly />
        </div>
      </div>
      files.push(element)
    }

    return <>
      {
        files.map(element => element)
      }
    </>
  }, []);

  const LinksCustom = useMemo((): JSX.Element => {
    const files: React.JSX.Element[] = []
    for (let index = 0; index < linksCount; index++) {
      const element = <div
        data-uk-grid
        key={index}
        className='uk-child-width-1-2'
      >
        <div className="">
          <label className="uk-form-label uk-text-bold" htmlFor="form-title">
            Link {index + 1} URL
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-title"
              type="text"
            />
          </div>
        </div>
        <div className="">
          <label className="uk-form-label uk-text-bold" htmlFor="form-title">
            Link title {index + 1}
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-title"
              type="text"
            />
          </div>
        </div>
      </div>
      files.push(element)
    }

    return <>
      {
        files.map(element => element)
      }
    </>
  }, []);
  return (
    <li className="uk-open">
      <a className="uk-accordion-title uk-text-uppercase">general</a>
      <div className="uk-accordion-content">
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-title">
            Title <span className='uk-text-danger'>*</span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-title"
              type="text"
              value={form.title}
              onChange={e => handleFormChange(e.target.value, 'title')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-prettyUrl">
            Pretty URL
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-prettyUrl"
              type="text"
              value={form.prettyUrl}
              onChange={e => handleFormChange(e.target.value, 'prettyUrl')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-subtitle">
            Subtitle
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-subtitle"
              type="text"
              value={form.subtitle}
              onChange={e => handleFormChange(e.target.value, 'subtitle')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-headline">
            Headline
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-headline"
              type="text"
              value={form.headline}
              onChange={e => handleFormChange(e.target.value, 'headline')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-author">
            Author
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-author"
              type="text"
              value={form.author}
              onChange={e => handleFormChange(e.target.value, 'author')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
            Document Date
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-documentDate"
              type="date"
              value={form.documentDate}
              onChange={e => handleFormChange(e.target.value, 'documentDate')}
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
            Teaser
          </label>
          <div className="uk-form-controls">
            <textarea
              className="uk-textarea"
              value={form.teaser}
              onChange={e => handleFormChange(e.target.value, 'teaser')}
              rows={5}
            >

            </textarea>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-form-controls">
            <p className='uk-text-bold'>
              Select Teaser Thumbnail
              <span className='uk-text-small uk-text-light'> Teaser Thumbnail is only used when the content is set as featured</span>
            </p>
            <div
              data-uk-grid
              className='uk-child-width-1-2'
            >
              <div>
                <ImageUploader
                  onImageUpload={(thumbnail: string | null) => handleImageUpload(thumbnail, 'thumbnail')}
                  title=''
                  subtitle=''
                />
              </div>
              <div>
                <input
                  className="uk-input"
                  id="form-buttonTitle"
                  type="text"
                  value={form.buttonTitle}
                  placeholder='Title'
                  onChange={e => handleFormChange(e.target.value, 'buttonTitle')}
                />
                <input
                  className="uk-input"
                  id="form-buttonText"
                  type="text"
                  value={form.buttonText}
                  placeholder='Button Text'
                  onChange={e => handleFormChange(e.target.value, 'buttonText')}
                />
                <label
                  className='uk-text-bold'
                >
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    name="form-buttonOpenInNewWindow"
                    checked={form.buttonOpenInNewWindow}
                    onChange={e => handleFormChange(e.target.checked, 'buttonOpenInNewWindow')}
                  />
                  Open in new window
                </label>
                <label
                  className='uk-text-bold'
                >
                  <input
                    className="uk-checkbox uk-margin-left"
                    type="checkbox"
                    name="form-buttonOpenInNewWindow"
                    checked={form.buttonOpenInNewWindow}
                    onChange={e => handleFormChange(e.target.checked, 'buttonOpenInNewWindow')}
                  />
                  Share
                </label>
                <input
                  className="uk-input"
                  id="form-buttonLinkUrl"
                  type="text"
                  value={form.buttonLinkUrl}
                  placeholder='Enter full button link URL'
                  onChange={e => handleFormChange(e.target.value, 'buttonLinkUrl')}
                />
                <p className="uk-text-light uk-text-bold uk-text-center">or</p>
                <div className="uk-margin">
                  <div
                    data-uk-form-custom
                    className='uk-width-1-1'
                  >
                    <input type="file" aria-label="Custom controls" />
                    <button className="uk-button uk-button-secondary uk-text-uppercase uk-width-1-1" type="button" >choose file</button>
                  </div>
                </div>
                <div className="uk-margin uk-margin-top">
                  <button className="uk-button uk-button-primary uk-text-uppercase uk-width-1-1" type="button" >generate button</button>
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <CKEditor
                name="mainText"
                onChange={(data) => handleFormChange(data, 'mainText')}
                editorLoaded={editorLoaded}
                preview={true}
                value={form.mainText}
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
                Meta Description
                <span className='uk-text-light uk-text-small uk-margin-left'>If left blank, selected sub-categories or interior sub-categories meta description will be used instead</span>
              </label>
              <textarea
                className="uk-textarea"
                value={form.teaser}
                onChange={e => handleFormChange(e.target.value, 'teaser')}
                rows={5}
              >

              </textarea>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
                Select Images
              </label>
              <div
                data-uk-grid
                className='uk-child-width-1-2'
              >
                <div>
                  <ImageUploader
                    onImageUpload={(thumbnail: string | null) => handleImageUpload(thumbnail, 'firstImage')}
                    title=''
                    subtitle=''
                  />
                </div>
                <div>
                  <ImageUploader
                    onImageUpload={(thumbnail: string | null) => handleImageUpload(thumbnail, 'secondImage')}
                    title=''
                    subtitle=''
                  />
                </div>
              </div>
              <div>
                <label>
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={form.spanImageAcross}
                    onChange={e => handleFormChange(e.target.value, 'spanImageAcross')}
                  />
                  Span Image Across
                </label>
              </div>
              <div
                className='uk-margin-small-top'
              >
                <label>
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={form.alignLeft}
                    onChange={e => handleFormChange(e.target.value, 'alignLeft')}
                  />
                  Align Left
                </label>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    type="checkbox"
                    checked={form.alignRight}
                    onChange={e => handleFormChange(e.target.value, 'alignRight')}
                  />
                  Align Right
                </label>
              </div>
              <div>
                <div
                  data-uk-grid
                  className='uk-child-width-1-3 uk-margin-top'
                >
                  <div>
                    <p className="uk-text-bold">Select Associated Files</p>
                  </div>
                  <div>
                    <p className="uk-text-bold">
                      Show Terms of use
                    </p>
                  </div>
                  <div>
                    <p className="uk-text-bold">
                      Associated File Title
                    </p>
                  </div>
                </div>
                {AssociatedFiles}
              </div>
              <div>
                {LinksCustom}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GeneralCard
