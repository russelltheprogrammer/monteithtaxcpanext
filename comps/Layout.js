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
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
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