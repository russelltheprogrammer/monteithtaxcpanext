import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return ( 
        <>
        <Head>
            <title>Russell Monteith CPA | Digital Tax Accountant</title>
            <meta
                name="description"
                content="Virtual based tax accountant that provides tax preparation services for individuals and businesses globally. 
                Offers free consultations."
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