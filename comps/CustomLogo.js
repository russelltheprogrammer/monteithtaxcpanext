import Image from 'next/image';

const CustomLogo = () => {
    return ( 
        <span id="navbar-logo-span">
            <Image id="navbar-logo-img" className="navbar-logo-span-item" src="/navbarlogoimage.png" width={100} height={25} alt="Logo" />
            <Image id="navbar-logo-wordmark" className="navbar-logo-span-item" src="/navbarlogowordmark.png" width={100} height={25} alt="Logo"/>
            <span className="hidden">My Logo</span>
        </span>
     );
}
 
export default CustomLogo;