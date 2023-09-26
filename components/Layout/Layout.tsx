// src/components/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="uk-flex uk-flex-column uk-height-viewport">
      <div className="uk-child-width-expand@s" data-uk-grid>
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <main className="uk-width-expand@m">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
