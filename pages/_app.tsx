import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GA_ID.toString() })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
