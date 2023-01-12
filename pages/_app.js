import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import '../styles/normalize.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return ( <>
    <Script strategy="beforeInteractive">
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-ND8KTL2');
    `}
    </Script>
    <Component {...pageProps} />
    <Analytics />
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ND8KTL2" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
  </> )
}

export default MyApp
