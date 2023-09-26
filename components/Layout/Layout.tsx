// src/components/Layout.tsx
import Link from 'next/link';
import React from 'react';

type LayoutProps = {
  children: JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="uk-flex uk-flex-column uk-height-viewport">
      <div className="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
        {/* Sidebar */}
        <aside className="uk-width-auto@m">
          <h3 className="uk-margin-remove-bottom">Menu</h3>
          <ul className="uk-nav uk-nav-default uk-margin-remove-top">
            <li>
              <a href="#">Manage Categories</a>
            </li>
            <li>
              <a href="#">Manage Content</a>
            </li>
          </ul>
        </aside>
        {/* Content */}
        <main className="uk-width-expand@m">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
