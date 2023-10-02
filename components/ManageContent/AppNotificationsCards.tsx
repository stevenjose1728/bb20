import { AppNotificationOptions } from '@/models/AppNotificationsEnum'
import Form from '@/models/ManageContentForm'
import React from 'react'


type Props = {
  form: Form,
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
}
function AppNotificationsCards({ form, handleFormChange }: Props) {
  return (
    <li
    >
      <a className="uk-accordion-title uk-text-uppercase">
        app notifications section
        <span className="uk-margin-left uk-text-light uk-text-small"></span>
      </a>
      <div className="uk-accordion-content">
        <div className="uk-margin">
          <span className='uk-text-light uk-margin-right uk-text-small'>Content Landing Page:</span>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right"
              type="checkbox"
              name={"form-dashboardNotifications-" + AppNotificationOptions.ON}
              checked={form.dashboardNotifications === AppNotificationOptions.ON}
              onChange={() => handleFormChange(AppNotificationOptions.ON, 'dashboardNotifications')}
            />
            On
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-dashboardNotifications-" + AppNotificationOptions.OFF}
              checked={form.dashboardNotifications === AppNotificationOptions.OFF}
              onChange={() => handleFormChange(AppNotificationOptions.OFF, 'dashboardNotifications')}
            />
            Off
          </label>
          <label
            className='uk-text-bold'
          >
            <input
              className="uk-checkbox uk-margin-right uk-margin-left"
              type="checkbox"
              name={"form-dashboardNotifications-" + AppNotificationOptions.HIGH_PRIORITY}
              checked={form.dashboardNotifications === AppNotificationOptions.HIGH_PRIORITY}
              onChange={() => handleFormChange(AppNotificationOptions.HIGH_PRIORITY, 'dashboardNotifications')}
            />
            High Priority
          </label>
        </div>
      </div>
    </li>
  )
}

export default AppNotificationsCards
