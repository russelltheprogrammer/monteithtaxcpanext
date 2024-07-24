import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return ( 
    <>
      <Head>
        <title>Russell Monteith CPA | Tax & Technology</title>
        <meta
          name="description"
          content="Virtual based tax accountant and technology professional that provides tax and technology solutions and services for individuals and businesses. 
                Offers free consultations."
          key="desc"
        />
      </Head>
      <div>
        <Navbar />
        { children }
        <Footer />
      </div>
    </>
  );
}
 
export default Layout;
