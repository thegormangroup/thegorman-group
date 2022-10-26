import { Analytics } from '@vercel/analytics/react'
import '../styles/normalize.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return ( <>
    <Component {...pageProps} />
    <Analytics />
  </> )
}

export default MyApp
