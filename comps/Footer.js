const Footer = () => {

    const year = new Date().getFullYear();
    
    return ( 
        <div className="footer-container">
            <div className="footer-container-wrapper">
                <i className="fas fa-copyright"></i> Copyright {year} - All Rights Reserved - RUSSELL MONTEITH CPA PLLC
            </div>
        </div>
     );
}
 
export default Footer;