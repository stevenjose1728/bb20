import React, { useContext } from 'react';
import { SpinnerContext } from '../context/SpinnerContext';
const Layout = () => {
  const { isLoading }: any = useContext(SpinnerContext);

  return (
    <>
      {isLoading && (
        <div className="modal-overlay">
          <div className="modal-spinner">
            <div className="uk-spinner"></div>
            <div data-uk-spinner="ratio: 3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
