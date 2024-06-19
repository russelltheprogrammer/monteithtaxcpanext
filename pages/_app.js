import Layout from '../comps/Layout';
import '../styles/globals.scss';
import '../styles/navbar.scss';

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
