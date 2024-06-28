import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = () => {

const email = 'info@monteithtaxcpa.com';
const phone = '347-508-3407';

    return ( 
        <div className='contact-info-container'>
            <div className='contact-info-wrapper'>
                <h2 className="contact-info-title">Contact Information</h2>
                    <div className='contact-info-items-container'>
                        <div className='contact-info-item'>
                            <EmailIcon style={{ fontSize: '32px', alignItems: 'center', justifyContent: 'center' }} />&nbsp;&nbsp;<a href={`mailto:${email}`}>{email}</a>
                        </div>
                        <div className='contact-info-item'>
                            <PhoneEnabledIcon style={{ fontSize: '32px', alignItems: 'center', justifyContent: 'center' }} />&nbsp;&nbsp;<a href={`tel:${phone}`}>{phone}</a>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default ContactInfo;