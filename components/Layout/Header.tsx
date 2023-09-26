import React from 'react'

export default function Header() {
  return (
    <header className="uk-navbar-container header" data-uk-navbar="true">
      <div className="uk-width-1-3@m" data-uk-grid>
        <div className="uk-card uk-card-body uk-padding-remove-top uk-padding-small">
          <span className="uk-badge">LOGOUT</span>
          <br />
          <span className="uk-badge">LAYOUT PAGES</span>
        </div>
      </div>
      <div
        className='uk-width-1-7@m'
      >
        right
      </div>
    </header>
  )
}
