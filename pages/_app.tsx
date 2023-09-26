import type { AppProps } from 'next/app'
import "uikit/dist/css/uikit.min.css";
import '@/components/Spinner/Spinner.css'
import '@/styles/globals.css'
import { SpinnerProvider } from '@/context/SpinnerContext'
import Header from '@/components/Layout/Header';
import Icons from 'uikit/dist/js/uikit-icons';
import { useCallback, useEffect } from 'react';

// loads the Icon plugin
export default function App({ Component, pageProps }: AppProps) {
  const importUIkit = useCallback(async () => {
    const UIkit = (await import('uikit')).default;
    UIkit.use(Icons);
  }, []);

  useEffect(() => {
    importUIkit();
  }, [importUIkit]);
  return (
    <>
      <SpinnerProvider>
        <div className="root">
          <div className='header-container'>
            <Header />
          </div>
          <div className="container">
            <div className='sub-container'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </SpinnerProvider>
    </>
  )
}
