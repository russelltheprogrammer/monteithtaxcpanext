import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useEffect } from 'react';
import ContactInfo from '../comps/ContactInfo';
import ContactHomePageLink from '../comps/ContactHomePageLink';
import ContactFormField from '../comps/ContactFormField';
import Image from 'next/image';
import { Box, Button, Typography, Grid } from '@mui/material';

const Contact = (props) => {

  const [isVerified, setIsVerified] = useState(false);
  const [values, setValues] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '', subject: '', message: ''
  });
  const [contactSubmit, setContactSubmit] = useState(false);
  const [headerState, setHeaderState] = useState(true);
  const [homepagelinkState, setHomepagelinkState] = useState(true);
  const [logoState, setLogoState] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=> {
    if (props.header === 'homepage') {
      setHeaderState(false);
    }
    if (props.homepagelink === 'homepage') {
      setHomepagelinkState(false);
    }
    if (props.logo === 'homepage') {
      setLogoState(false);
    }
  },[props.header, props.homepagelink, props.logo]);

  const handleValueChange = (name) => {
    return ({ target: {value} }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setIsVerified(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isVerified) {
      const response = await fetch('/api/contactsubmission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.ok && result.status === 'Message Sent') {
        setContactSubmit(true);
        setError(false);
      } else {
        setError(true);
        setContactSubmit(false);
      }
    }
    else {
      console.log('reCAPTCHA not verified');
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
            : ''}
          <br/><br/><br/>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={headerState ? 'contact-page-container' : ''}>
        {headerState ?
          <div className="topic-header">
            <h1>CONTACT</h1> 
          </div>   
          : <div></div>}
        <div id="container-contact" className="container-fluid">
          <div className="col justify-content-md-center">
            <ContactInfo />
          </div>
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: {xs: '90%', sm: '580px', md: '800px'},
            margin: 'auto',
            padding: '40px',
            backgroundColor: '#4c8099',
            borderRadius: '10px',
            border: '2px solid black',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h1" gutterBottom color="white"></Typography>
            </Grid>
            <ContactFormField 
              xs={12}
              sm={6}
              label={'First Name'}
              name={'firstName'}
              value={values.firstName}
              onChange={handleValueChange('firstName')}
              required
            />
            <ContactFormField 
              xs={12}
              sm={6}
              label={'Last Name'}
              name={'lastName'}
              value={values.lastName}
              onChange={handleValueChange('lastName')}
              required
            />
            <ContactFormField 
              xs={12}
              label={'Email Address'}
              name={'email'}
              value={values.email}
              onChange={handleValueChange('email')}
              required
            />
            <ContactFormField 
              xs={12}
              label={'Phone Number'}
              name={'phoneNumber'}
              value={values.phoneNumber}
              onChange={handleValueChange('phoneNumber')}
            />
            <ContactFormField 
              xs={12}
              label={'Subject'}
              name={'subject'}
              value={values.subject}
              onChange={handleValueChange('subject')}
              required
            />
            <ContactFormField 
              xs={12}
              label={'Message'}
              name={'message'}
              value={values.message}
              onChange={handleValueChange('message')}
              required
              multiline
              rows={8}
            />
            <Grid item xs={12}>
              <Typography 
                variant="body2" 
                sx={{
                  fontSize: '22px', 
                  color: 'black',
                }}>
                  * Box must be filled out
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReCAPTCHA 
                className="container-recaptcha" 
                sitekey={process.env.NEXT_PUBLIC_PUBLIC_RECAPTCHA_SITE_KEY} 
                onChange={handleRecaptchaChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={!isVerified}
                sx={{ 
                  backgroundColor: 'black', 
                  color: 'white', 
                  marginTop: '20px',
                  padding: '10px',
                  '&:hover': { 
                    backgroundColor: '#333333',
                  }
                }}
                fullWidth
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
 
export default Contact;

