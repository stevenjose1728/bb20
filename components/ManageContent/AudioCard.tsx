import Form from '@/models/ManageContentForm'
import React from 'react'

type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form
}
function AudioCard({ handleFormChange, form }: Props) {
  return (
    <li
    >
      <a className="uk-accordion-title uk-text-uppercase">
        audio
        <span className="uk-margin-left uk-text-light uk-text-small">(optional)</span>
      </a>
      <div className="uk-accordion-content">
        <div className="uk-margin" data-uk-margin>
          <div>
            <span className="uk-text-normal uk-text-bold">
              Select Video File
            </span>
            <span className='uk-text-light uk-text-small uk-margin-left'>
              MP3 format only. File will display any encoded title and encoded title and artist info (unless "Hide" is checked below or a different artist/title is entered below)
            </span>
          </div>
          <div data-uk-form-custom>
            <input type="file" aria-label="Custom controls" />
            <button className="uk-button uk-button-secondary" type="button">Select file</button>
          </div>
        </div>
        <div className="uk-margin">
          <div
            data-uk-grid
            className='uk-child-width-1-2'
          >
            <div>
              <div className="uk-margin">
                <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
                  Audio artist
                </label>
                <span className="uk-text-small uk-text-light uk-margin-left">
                  Text entered here displays with audio controls, and will override any encoded artist info
                </span>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-audioArtist"
                    type="text"
                    value={form.audioArtist}
                    onChange={e => handleFormChange(e.target.value, 'audioArtist')}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="uk-margin">
                <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
                  Audio artist
                </label>
                <span className="uk-text-small uk-text-light uk-margin-left">
                  Text entered here displays with audio controls, and will override any encoded artist info
                </span>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-audioArtistTwo"
                    type="text"
                    value={form.audioArtistTwo}
                    onChange={e => handleFormChange(e.target.value, 'audioArtistTwo')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-margin">
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name="form-hideAudioTitleAndArtistInformation"
              checked={form.hideAudioTitleAndArtistInformation}
              onChange={e => handleFormChange(e.target.checked, 'hideAudioTitleAndArtistInformation')}
            />
            Hide Audio Title and Artist Information?
            <span className="uk-text-light uk-text-small uk-margin-left">
              Hides audio title and artist info, whether encoded in file or manually overriden
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
              name="form-autoStartAudio"
              checked={form.autoStartAudio}
              onChange={e => handleFormChange(e.target.checked, 'autoStartAudio')}
            />
            Auto Start Audio?
            <span className="uk-text-light uk-text-small uk-margin-left">
              Audio will begin playing when page is loaded.
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
              name="form-loopVideo"
              checked={form.loopVideo}
              onChange={e => handleFormChange(e.target.checked, 'loopVideo')}
            />
            Loop Video?
            <span className="uk-text-light uk-text-small uk-margin-left">
              Audio will repeat continuosly
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
              name="form-displayAnimation"
              checked={form.displayAnimation}
              onChange={e => handleFormChange(e.target.checked, 'displayAnimation')}
            />
            Display animation?
          </label>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" htmlFor="form-documentDate">
            Initial Volume
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="form-initialVolume"
              type="number"
              value={form.initialVolume}
              max={100}
              onChange={e => handleFormChange(e.target.value, 'initialVolume')}
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default AudioCard
