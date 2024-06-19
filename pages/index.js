import Image from 'next/image';
import Contact from './contact';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgb(76, 128, 153)',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgb(76, 128, 153)',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function Home() {

  return (
    <div className="home-content-container">
      <div className="home-intro-container">
          <br/>
            <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
            <h3>A niche tax and technology accounting practice</h3>
          <br/>
          <span>
            <CustomButton variant="contained" size="large" >SCHEDULE A FREE CONSULTATION TODAY</CustomButton>
          </span>
          <br/>
          <br/>
      </div>
      <div className="homepage-image-container">
        <div className="homepage-image-wrapper">
        <Image 
          id="homepage-image" 
          src="/homepageimage.jpg" 
          alt="Home Page Img" 
          layout="responsive"
          width={800} 
          height={300} 
          priority={false}
        />
        </div>
      </div>
        <br />
        <br />
        <br />
          <Image 
            id="homepage-logo-img" 
            src="/homepagelogoimage.png" 
            alt="Home Page Logo" 
            width={760} 
            height={200} 
          />
          <Contact header={"homepage"} homepagelink={"homepage"} logo={"homepage"} />
    </div>
  )
}
