import Form from '@/models/ManageContentForm'
import React from 'react'

type Props = {
  handleFormChange: (value: string | boolean, key: keyof Form) => void,
  form: Form,
}
function DisplayOptionsCard() {
  return (
    <li
    >
      <a className="uk-accordion-title uk-text-uppercase">
        Display Options
      </a>
      <div className="uk-accordion-content">
      </div>
    </li>
  )
}

export default DisplayOptionsCard
