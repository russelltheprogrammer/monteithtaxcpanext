import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Contact from './contact';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '10px 20px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgb(76, 128, 153)',
  borderColor: 'rgb(56, 108, 133)',
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
    backgroundColor: 'rgb(109, 163, 188)',
    borderColor: 'rgb(89, 143, 168)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgb(109, 163, 188)',
    borderColor: 'rgb(73, 126, 151)',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(93, 146, 171)',
  },
});

export default function Home() {

  const contactRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('logo-image-animation');
        } else {
          entry.target.classList.remove('logo-image-animation');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Adjust as needed
    });

    const currentRef = imageWrapperRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="home-content-container">
      <div className="home-intro-container">
          <br/>
            <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
            <h3>A niche tax and technology business</h3>
          <br/>
          <span>
            <CustomButton variant="contained" size="large" onClick={scrollToContact}>
              SCHEDULE A FREE CONSULTATION TODAY
            </CustomButton>
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
        <div ref={imageWrapperRef}>
          <Image 
            id="homepage-logo-img" 
            src="/homepagelogoimage.png" 
            alt="Home Page Logo" 
            width={760} 
            height={200}
          />
          </div>
          <Contact header={"homepage"} homepagelink={"homepage"} logo={"homepage"} />
          <div ref={contactRef}></div>
    </div>
  )
}
