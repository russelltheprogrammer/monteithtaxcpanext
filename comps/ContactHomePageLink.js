import Link from 'next/link';

const ContactHomePageLink = ({props}) => {
    
  if (props) {
    return ( 
      <div>
        Click here to go back to the <Link href="/">homepage</Link>.
      </div>
    );
  }
  else if (!props) {
    return (
      <div></div>
    )
  }
}
 
export default ContactHomePageLink;
