import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ComputerIcon from '@mui/icons-material/Computer';

const ServicesIndustries = () => {

  const iconStyle = {
    mr: 2,
    fontSize: '50px'
  };

  const industries = [
    { id: 0, title: 'Accounting & Financial Services', icon: <CalculateIcon sx={iconStyle} />},
    { id: 1, title: 'Other Professional Services', icon: <MiscellaneousServicesIcon sx={iconStyle} />},
    { id: 2, title: 'Healthcare', icon: <LocalHospitalIcon sx={iconStyle} />},
    { id: 3, title: 'Technology & Startups', icon: <DeviceHubIcon sx={iconStyle} />},
    { id: 4, title: 'Foreign Including Expatriates', icon: <PublicIcon sx={iconStyle} />},
    { id: 5, title: 'Small Businesses', icon: <BusinessIcon sx={iconStyle} />},
    { id: 6, title: 'Contractors & Freelancers', icon: <BusinessCenterIcon sx={iconStyle} />},
    { id: 7, title: 'Real Estate', icon: <HomeWorkIcon sx={iconStyle} />},
    { id: 8, title: 'Tax Software, Automation, Data', icon: <ComputerIcon sx={iconStyle} />},
  ];

  return (
    <div className='container-services'>
      <div className="topic-header" id="topic-header-services">
        <h1>INDUSTRIES</h1>
        <h3 className='container-services-subtitle'>Featured Business Sectors Russell Has Worked With</h3>
        <h5 className='container-services-subtitle-two'>Business Type Not Listed? That doesn&rsquo;t mean Russell cannot help you. Contact him to find out more information.</h5>
      </div>
      <Box sx={{
        mt: 2,
        mb: 4,
        position: 'relative',
        textAlign: 'center',
        py: 4,
        px: {xs: 4, lg: 10}
      }}>
        <Grid container spacing={2} justifyContent="flex-start">
          {industries.map((industry) => (
            <Grid item xs={12} sm={6} md={4} key={industry.id}>
              <Card sx={{ 
                minWidth: { xs: 220, sm: 250, md: 250, lg: 280 }, 
                minHeight: 150, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: 'none',  // Explicitly removing border
                boxShadow: 'none',
                backgroundColor: '#F3F7F9',
              }}>
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%', 
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    pl: '2%',
                    mb: 1,
                    textAlign: 'left' ,  
                  }}>
                    {industry.icon}
                    <Typography 
                      variant="h6" 
                      component="div" 
                      sx={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '24px',
                      }}>
                      {industry.title}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
 
export default ServicesIndustries;
