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
          content="Virtual tax accountant and technology professional providing tax, technology, consulting, and contracting services for 
            individuals and businesses. Offers free consultations."
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
