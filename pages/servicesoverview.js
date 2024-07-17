import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import BalanceIcon from '@mui/icons-material/Balance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CoffeeIcon from '@mui/icons-material/Coffee';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PolylineIcon from '@mui/icons-material/Polyline';
import CampaignIcon from '@mui/icons-material/Campaign';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ServicesOverviewItem from '../comps/ServicesOverviewItem';

const interFontFamily = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

const ServicesOverview = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const handleClickOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const iconStyle = {
    mr: 2,
    fontSize: '44px'
  };

  const services = [
    { 
      id: 1, 
      title: 'Tax Services',
      description: 'Expert tax services for individuals, families, and businesses in compliance with the latest tax laws.',
      learnMore: true,
      learnMoreText: `Maximize tax savings and plan for future tax events effectively. Preparation and filing for most tax forms such as 1040 (Individual), 1065 (Partnership), 1120 (Corporation), 
      1120S (S-Corporation), 1041 (Trust), 709 (Gift Tax), 1099 (Payments), and more. Research into complex tax laws to make sure full compliance is met.`,
      icon: <BalanceIcon sx={iconStyle} />
    },
    { 
      id: 2, 
      title: 'Tax Planning', 
      description: 'Plan ahead for future tax events effectively to maximize tax savings.',
      learnMore: false,
      icon: <AttachMoneyIcon sx={iconStyle} />
    },
    { 
      id: 3, 
      title: 'Tax Consulting', 
      description: 'Special projects and consulting services for tax-related matters, including contracting based work.',
      learnMore: false,
      icon: <CoffeeIcon sx={iconStyle} />
    },
    { 
      id: 4, 
      title: 'Bookkeeping & Accounting', 
      description: 'Meet your financial reporting needs with accurate and timely bookkeeping and accounting. Including high proficiency in QuickBooks and QBO.',
      learnMore: false,
      icon: <KeyboardIcon sx={iconStyle} />
    },
    { 
      id: 6, 
      title: 'Software Development', 
      description: 'This is the description for the service.',
      learnMore: true,
      icon: <DeveloperBoardIcon sx={iconStyle} />
    },
    { 
      id: 7, 
      title: 'Product Development', 
      description: 'This is the description for the service.',
      learnMore: false,
      icon: <ImportantDevicesIcon sx={iconStyle} />
    },
    { 
      id: 8, 
      title: 'Account & Project Management', 
      description: 'This is the description for the service.',
      learnMore: false,
      icon: <DesignServicesIcon sx={iconStyle} />
    },
    { 
      id: 9, 
      title: 'Automation & Data Analysis', 
      description: 'This is the description for the service.',
      learnMore: false,
      icon: <PolylineIcon sx={iconStyle} />
    },
    { 
      id: 11, 
      title: 'Business Development', 
      description: 'Works with you to grow your business and reach your goals with an expert knowledge of the entire accounting industry from tax to software development.',
      learnMore: false,
      icon: <CampaignIcon sx={iconStyle} />
    },
    { 
      id: 12, 
      title: 'Other Services', 
      description: 'Service not listed? Contact us to see if we can help.',
      learnMore: false,
      icon: <AltRouteIcon sx={iconStyle} />
    },
  ];
    
  return ( 
    <div className='container-services'>
      <div className="topic-header" id="topic-header-services">
        <h1>SERVICES OVERVIEW</h1>
        <h3 className='container-services-subtitle'>How Can Russell Help You?</h3>
        {/* <h5 className='container-services-subtitle-two'>Content</h5> */}
      </div>
      <div>
        <Grid container spacing={0} sx={{ px: 6, pt: 4, pb: 6 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={12} md={12} lg={3} key={service.id}>
              <Card sx={{ 
                minWidth: { xs: 220, sm: 250, md: 250, lg: 280 }, 
                minHeight: { xs: 520, sm: 480 }, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: 'none',
                boxShadow: 'none',
                backgroundColor: '#F3F7F9',
                cursor: service.learnMore ? 'pointer' : 'default',
                '&:hover': {
                  '& .learnMoreBtn': {
                    opacity: 1,  // Make button fully visible on hover
                    transform: 'translate(-50%, -30%)'
                  },
                  backgroundColor: '#004C7F',
                  color: 'white',
                }
              }}>
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex', 
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  p: 6,
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative',
                  backgroundColor: service.id % 2 === 0 ? 'white' : '#dcdce6',
                  '&:hover': { 
                    bgcolor: '#004C7F',
                    color: 'white',
                  } 
                }}>
                  <Box
                    sx={{
                      textAlign: 'left',
                    }}
                  >
                    <Typography>
                      {service.icon}
                    </Typography>
                    <ThemeProvider theme={interFontFamily}>
                      <Typography 
                        variant="h5"
                        sx={{
                          py: 2,
                          fontWeight: 500,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body1">
                        {service.description}
                      </Typography>
                    </ThemeProvider>
                    {service.learnMore ? 
                      <Button
                        variant="contained"
                        className="learnMoreBtn"
                        onClick={() => handleClickOpen(service)}
                        sx={{
                          mt: 2,
                          position: 'absolute',
                          bottom: { xs: '10%', sm: '20%' },
                          left: '50%',
                          padding: { xs: '20px 40px', xl: '20px 40px' },
                          transform: 'translate(-70%, 30%)',
                          transition: 'opacity 0.3s ease, transform 0.3s ease',
                          opacity: 0,  // Start invisible
                          backgroundColor: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                          }
                        }}
                      >
                        Learn&nbsp;More
                      </Button>
                      : ''}
                    {selectedService && (
                      <ServicesOverviewItem
                        open={open}
                        service={selectedService}
                        onClose={handleClose}
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
 
export default ServicesOverview;
