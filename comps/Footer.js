import React, { useEffect, useState } from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const copyrightIconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          color: 'black',
          marginRight: '5px',
        },
      },
    },
  },
});

const linkedInIconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '50px',
          color: 'black',
          transition: 'color 0.3s',
          '&:hover': {
            color: 'rgb(13, 110, 253)',
          },
        },
      },
    },
  },
});

const Footer = () => {

  const url = 'https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/'
  const year = new Date().getFullYear();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth > 550);
  };
    
  useEffect(() => {
    checkScreenSize(); // Check on initial mount
    window.addEventListener('resize', checkScreenSize); // Check on resize
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
    
  return ( 
    <div className="footer-container">
      <div className="footer-container-wrapper">
        <div className='footer-text'>
          {isLargeScreen ?
            <ThemeProvider theme={copyrightIconTheme}>
              <CopyrightIcon />
            </ThemeProvider>
            : null
          }
                    Copyright {year} - All Rights Reserved - RUSSELL MONTEITH CPA PLLC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ThemeProvider theme={linkedInIconTheme}>
              <LinkedInIcon className='footer-icon' />
            </ThemeProvider>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;
