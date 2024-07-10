import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const interFontFamily = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

const ServicesOverview = () => {

  const iconStyle = {
    mr: 2,
    fontSize: '44px'
  };

  const services = [
    { 
      id: 1, 
      title: 'Tax Services',
      description: 'Expert tax services', 
      icon: <BalanceIcon sx={iconStyle} />
    },
    { 
      id: 2, 
      title: 'Tax Planning', 
      description: 'This is the description for the service.', 
      icon: <AttachMoneyIcon sx={iconStyle} />
    },
    { 
      id: 3, 
      title: 'Tax Consulting', 
      description: 'This is the description for the service.', 
      icon: <CoffeeIcon sx={iconStyle} />
    },
    { 
      id: 4, 
      title: 'Bookkeeping & Accounting', 
      description: 'This is the description for the service.', 
      icon: <KeyboardIcon sx={iconStyle} />
    },
    { 
      id: 6, 
      title: 'Software Development', 
      description: 'This is the description for the service.', 
      icon: <DeveloperBoardIcon sx={iconStyle} />
    },
    { 
      id: 7, 
      title: 'Product Development', 
      description: 'This is the description for the service.', 
      icon: <ImportantDevicesIcon sx={iconStyle} />
    },
    { 
      id: 8, 
      title: 'Account & Project Management', 
      description: 'This is the description for the service.', 
      icon: <DesignServicesIcon sx={iconStyle} />
    },
    { 
      id: 9, 
      title: 'Automation & Data Analysis', 
      description: 'This is the description for the service.', 
      icon: <PolylineIcon sx={iconStyle} />
    },
    { 
      id: 11, 
      title: 'Business Development', 
      description: 'This is the description for the service.', 
      icon: <CampaignIcon sx={iconStyle} />
    },
    { 
      id: 12, 
      title: 'Other Services', 
      description: 'This is the description for the service.', 
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
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Card sx={{ 
                minWidth: { xs: 220, sm: 250, md: 250, lg: 280 }, 
                minHeight: 400, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: 'none',
                boxShadow: 'none',
                backgroundColor: '#F3F7F9',
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
                    <Button
                      variant="contained"
                      className="learnMoreBtn"
                      sx={{
                        mt: 2,
                        position: 'absolute',
                        bottom: '20%',
                        left: '50%',
                        padding: '15px 30px',
                        transform: 'translate(-70%, 30%)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        opacity: 0,  // Start invisible
                        backgroundColor: 'secondary.main',
                        '&:hover': {
                          backgroundColor: 'secondary.dark',
                        }
                      }}
                    >
                        Learn More
                    </Button>
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
