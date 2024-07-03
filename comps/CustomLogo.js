import Image from 'next/image';

const CustomLogo = ({isDrawer}) => {
  return ( 
    <span id="navbar-logo-span">
      <Image id={isDrawer ? 'navbar-logo-img-drawer' : 'navbar-logo-img' } className="navbar-logo-span-item" src="/navbarlogoimage.png" width={100} height={25} alt="Logo" />
      <Image id={isDrawer ? 'navbar-logo-wordmark-drawer' : 'navbar-logo-wordmark'} className="navbar-logo-span-item" src="/navbarlogowordmark.png" width={100} height={25} alt="Logo"/>
      <span className="hidden">My Logo</span>
    </span>
  );
}
 
export default CustomLogo;
