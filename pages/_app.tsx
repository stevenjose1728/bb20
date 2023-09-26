import type { AppProps } from 'next/app'
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import '@/components/Spinner/Spinner.css'
import '@/styles/globals.css'
import { SpinnerProvider } from '@/context/SpinnerContext'
import Header from '@/components/Layout/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
