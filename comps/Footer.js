const Footer = () => {

    const year = new Date().getFullYear();
    
    return ( 
        <div className="footer-container">
            <div className="gradient-container-bottom"></div>
            <i className="fas fa-copyright"></i>Copyright {year} - All Rights Reserved - RUSSELL MONTEITH CPA PLLC
        </div>
     );
}
 
export default Footer;