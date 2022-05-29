import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux-store'

import Navbar from '../components/navbar'
import Toaster from '../components/toaster'
import { ReactElement, ReactNode } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Navbar />
    <Toaster />
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
