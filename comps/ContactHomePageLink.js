const ContactHomePageLink = ({props}) => {
    
    if(props){
        return ( 
            <div>
            Click here to go back to the <a>homepage</a>.
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