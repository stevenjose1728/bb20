import type { AppProps } from 'next/app'
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import '@/components/Spinner.css'
import '@/styles/globals.css'
import { SpinnerProvider } from '@/context/SpinnerContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpinnerProvider>
      <Component {...pageProps} />
    </SpinnerProvider>
  )
}
