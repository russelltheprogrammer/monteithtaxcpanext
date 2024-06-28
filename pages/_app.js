import Layout from '../comps/Layout';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/home.scss';
import '../styles/about.scss';
import '../styles/contact.scss';
import '../styles/footer.scss';

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
