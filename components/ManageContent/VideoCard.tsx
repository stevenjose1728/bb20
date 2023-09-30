import Form from '@/models/ManageContentForm'
import React from 'react'
import ImageUploader from '../ImageUploader'

type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form,
  handleImageUpload: (thumbnail: string | null, key: keyof Form) => void
}
function VideoCard({ handleFormChange, form, handleImageUpload }: Props) {
  return (
    <li
    >
      <a className="uk-accordion-title uk-text-uppercase">
        video
        <span className="uk-margin-left uk-text-light uk-text-small">(optional)</span>
      </a>
      <div className="uk-accordion-content">
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-title">
            Select Video File(s)
          </label>
          <div className="uk-margin" data-uk-margin>
            <div>
              <span className='uk-text-light uk-text-small'>H.264 (.mp4, .m4v, .t4v)</span>
            </div>
            <div data-uk-form-custom>
              <input type="file" aria-label="Custom controls" />
              <button className="uk-button uk-button-secondary" type="button">Select file</button>
            </div>
          </div>
        </div>
        <div className="uk-margin" data-uk-margin>
          <div>
            <span className='uk-text-light uk-text-small'>Flash video (.flv)</span>
          </div>
          <div data-uk-form-custom>
            <input type="file" aria-label="Custom controls" />
            <button className="uk-button uk-button-secondary" type="button">Select file</button>
          </div>
        </div>
        <div className="uk-margin" data-uk-margin>
          <div>
            <span className='uk-text-light uk-text-small'>Ogg Theora (.ogg, .ogv)</span>
          </div>
          <div data-uk-form-custom>
            <input type="file" aria-label="Custom controls" />
            <button className="uk-button uk-button-secondary" type="button">Select file</button>
          </div>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label className="uk-form-label uk-text-bold uk-text-capitalize" htmlFor="form-author">
            Video width
            <span className="uk-text-small uk-text-light uk-margin-left">
              (in pixels) (in left blank, will default to 460px)
            </span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-videoWidth"
              type="text"
              value={form.videoWidth}
              onChange={e => handleFormChange(e.target.value, 'videoWidth')}
            />
          </div>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label className="uk-form-label uk-text-bold uk-text-capitalize" htmlFor="form-author">
            Video height
            <span className="uk-text-small uk-text-light uk-margin-left">
              (in pixels) (in left blank, will default to 260px)
            </span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-videoHeight"
              type="text"
              value={form.videoHeight}
              onChange={e => handleFormChange(e.target.value, 'videoHeight')}
            />
          </div>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox"
              type="checkbox"
              name="form-autoStartVideo"
              checked={form.autoStartVideo}
              onChange={e => handleFormChange(e.target.checked, 'autoStartVideo')}
            />
            <span className="uk-margin-small-left">
              Autostart video?
            </span>
          </label>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox"
              type="checkbox"
              name="form-loopVideo"
              checked={form.loopVideo}
              onChange={e => handleFormChange(e.target.checked, 'loopVideo')}
            />
            <span className="uk-margin-small-left">
              Loop video?
            </span>
          </label>
        </div>
        <div className="uk-margin uk-width-1-2">
          <label className="uk-form-label uk-text-bold uk-text-capitalize" htmlFor="form-author">
            Video height
            <span className="uk-text-small uk-text-light uk-margin-left">
              (in pixels) (in left blank, will default to 260px)
            </span>
          </label>
          <div className="uk-form-controls">
            <ImageUploader
              onImageUpload={(thumbnail: string | null) => handleImageUpload(thumbnail, 'firstImage')}
              title='Select video player content image'
              subtitle=''
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold uk-text-capitalize" htmlFor="form-documentDate">
            Video caption
          </label>
          <div className="uk-form-controls">
            <textarea
              className="uk-textarea"
              value={form.videoCaption}
              onChange={e => handleFormChange(e.target.value, 'videoCaption')}
              rows={5}
            >

            </textarea>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoCard
