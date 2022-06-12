import '@/styles/globals.css'
import Head from 'next/head';
import { Nav, Footer,Layout} from '@/components'
import { wrapper } from '@/modules/store'
import PropTypes from "prop-types";
import Script from 'next/script'
import { AppProps } from 'next/app';
function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return (
  
  <div>
  <Nav/>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <Footer/>
    </div> 
  )
}

export default MyApp