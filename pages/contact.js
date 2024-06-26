import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useEffect } from "react";
import ContactInfo from "../comps/ContactInfo";
import ContactHomePageLink from "../comps/ContactHomePageLink";
import Image from 'next/image';

const Contact = (props) => {

const [isVerified, setIsVerified] = useState(false);
const [values, setValues] = useState({
    firstname: '', lastname: '', email: '', phonenumber: '', subject: '', message: ''
});
const [contactSubmit, setContactSubmit] = useState(false);
const [headerState, setHeaderState] = useState(true);
const [homepagelinkState, setHomepagelinkState] = useState(true);
const [logoState, setLogoState] = useState(true);
const [error, setError] = useState(false);

useEffect(()=> {
    if(props.header === "homepage") {
        setHeaderState(false);
    }
    if(props.homepagelink === "homepage") {
        setHomepagelinkState(false);
    }
    if(props.logo === "homepage") {
        setLogoState(false);
    }
},[props.header, props.homepagelink, props.logo]);

const handleValueChange = (name) => {
    return ({ target: {value} }) => {
        setValues(oldValues => ({...oldValues, [name]: value }));
    }
};

const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    if(isVerified){
       const response = await fetch("/api/contactsubmission", {
           method: "POST",
           headers: {
               "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify(values),
       });
       const result = await response.json();
       if (response.ok && result.status === "Message Sent") {
            setContactSubmit(true);
            setError(false);
        } else {
            setError(true);
            setContactSubmit(false);
    }
    }
    else{
        console.log("reCAPTCHA not verified");
    }
};

    if (error) {
        return (
            <div id="contact-after-submit-error">
                There has been an error. Please try again or contact the system administrator.
            </div>
        );
    }  else if (contactSubmit) {
        return (
            <div>
                <div className="topic-header">
                </div>
                <div id="container-contact" className="container-fluid">
                        <div id="container-after-submit">
                        <br/>
                        Thank you for contacting Russell Monteith CPA PLLC. Your message has been successfully sent. Russell will respond to you as soon as possible. Thank you for your interest.
                        <ContactHomePageLink props={homepagelinkState} />
                        </div>
                        <br/><br/><br/>
                        <ContactInfo />
                        {logoState
                            ? <Image id="homepage-logo-img" src="/homepagelogoimage.png" alt="Home Page Logo" width={780} height={200} /> 
                            : ""}
                    </div>
            </div>
         );
        }
    else {
        return (
            <div>
                <div className="topic-header">
                    {headerState ? <h1>CONTACT</h1> : <div></div>}
                </div>
                <div id="container-contact" className="container-fluid">
                    <div className="col justify-content-md-center">
                        <div className="row-1"></div>
                        <ContactInfo />
                        <div className="row-1"></div>
                        <div id="container-submit" className="row-4">
                            <form onSubmit={handleSubmit}>
                                <label id="contact-label-fullName">Full Name<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="firstname" placeholder="First Name" value={values.firstname} onChange={handleValueChange('firstname')} style={{width: "40%"}} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" required name="lastname" placeholder="Last Name" value={values.lastname} onChange={handleValueChange('lastname')} style={{width: "40%"}} />
                                <br/>
                                <br/>
                                <label id="contact-label-email">Email Address<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="email" required name="email" placeholder="Email Address" value={values.email} onChange={handleValueChange('email')} style={{width: "83%"}} />
                                <br/>
                                <br/>
                                <label id="contact-label-phoneNumber">Phone Number</label>
                                <br/>
                                <input type="phonenumber" placeholder="Phone Number" value={values.phonenumber} onChange={handleValueChange('phonenumber')} style={{width: "83%"}} />
                                <br/>
                                <br/>
                                <label id="contact-label-subject">Subject<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="subject" placeholder="Subject Line" value={values.subject} onChange={handleValueChange('subject')} style={{width: "83%"}} />
                                <br/>
                                <br/>
                                <label id="contact-label-message">Message<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <textarea id="contact-message-textarea" rows="5" type="text" required name="message" placeholder="Message" value={values.message} onChange={handleValueChange('message')} />
                                <br/>
                                <label style={{color: "red"}}>*Box must be filled out</label>
                                <br/>
                                <br/>
                                <button type="submit" disabled={!isVerified} id="contact-submit-btn" className="btn btn-lg">SUBMIT</button>
                                <br/>
                                <br/>
                                <ReCAPTCHA 
                                className="container-recaptcha" 
                                sitekey={process.env.NEXT_PUBLIC_PUBLIC_RECAPTCHA_SITE_KEY} 
                                onChange={handleRecaptchaChange}
                                />
                            </form>
                            <br/><br/>
                        </div>
                        <div className="row-1"></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;

