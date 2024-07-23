import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Contact from './contact';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ConsultationButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  padding: '20px 60px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgb(76, 128, 153)',
  borderColor: 'rgb(56, 108, 133)',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgb(26, 78, 103)',
    borderColor: 'rgb(16, 68, 93)',
    boxShadow: 'none',
    padding: '20px 100px',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgb(16, 68, 93)',
    borderColor: 'rgb(6, 58, 83)',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(93, 146, 171, 0.5)',
  },
  '@media (max-width: 600px)': {
    padding: '20px 30px',
    '&:hover': {
      padding: '20px 30px',
    }
  }
});

const ScrollToTopButton = styled(IconButton)({
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  borderRadius: '0px',
  padding: '10px',
  border: '1px solid black',
  display: 'none', // Initially hidden
  zIndex: 1000,
  backgroundColor: 'rgb(76, 128, 153)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(26, 78, 103)',
  },
});

export default function Home() {

  const contactRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const scrollToTopRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth > 700);
  };

  useEffect(() => {
    checkScreenSize(); // Check on initial mount
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      threshold: 0.5,
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
        <h1>RUSSELL MONTEITH CPA PLLC</h1>
        <h3>
          AN <span>EXPERT</span> IN <span>TAX & ACCOUNTING</span> AND THE <span>TECHNOLOGY</span> THAT DRIVES IT
        </h3>
        <br/>
      </div>
      <div className='homepage-consultation-button-container'>
        <ConsultationButton variant="contained" size="large" onClick={scrollToContact}>
            SCHEDULE A FREE CONSULTATION TODAY
        </ConsultationButton>
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
      <div ref={imageWrapperRef}>
        <Image 
          id="homepage-logo-img" 
          src="/homepagelogoimage.png" 
          alt="Home Page Logo" 
          width={760} 
          height={200}
        />
      </div>
      <div ref={contactRef}></div>
      <Contact header={'homepage'} homepagelink={'homepage'} logo={'homepage'} />
      {isLargeScreen && showScrollToTopButton && (
        <ScrollToTopButton
          onClick={scrollToTop}
          ref={scrollToTopRef}
          style={{ display: showScrollToTopButton ? 'block' : 'none' }}
        >
          <KeyboardDoubleArrowUpIcon sx={{ fontSize: 35 }} />
        </ScrollToTopButton>
      )}
    </div>
  )
}
