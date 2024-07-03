import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import PlaceIcon from '@mui/icons-material/Place';

const ServicesIndustries = () => {

  const iconStyle = {
    mr: 2,
    fontSize: 'large'
  };

  const industries = [
    { id: 1, title: 'Accounting & Financial Services', icon: <CalculateIcon sx={iconStyle} />},
    { id: 2, title: 'Professional Services', icon: <PlaceIcon sx={iconStyle} />},
    { id: 3, title: 'Healthcare', icon: <PlaceIcon sx={iconStyle} />},
    { id: 4, title: 'Technology & Startups --Tax Software, Automation, Data Analysis, SAS', icon: <PlaceIcon sx={iconStyle} />},
    { id: 5, title: 'Foreign -- Expatriates', icon: <PlaceIcon sx={iconStyle} />},
    { id: 6, title: 'Small Businesses', icon: <PlaceIcon sx={iconStyle} />},
    { id: 7, title: 'Contractors & Freelancers', icon: <PlaceIcon sx={iconStyle} />},
    { id: 8, title: 'Real Estate', icon: <PlaceIcon sx={iconStyle} />},
    { id: 9, title: 'Tax Software', icon: <PlaceIcon sx={iconStyle} />},
  ];

  return (
    <div className='container-services'>
      <div className="topic-header">
        <h1>INDUSTRIES</h1>
        <h3 className='container-services-subtitle'>Featured Business Sectors Russell Has Worked With</h3>
        <h5 className='container-services-subtitle-two'>Business Type Not Listed? That doesn&rsquo;t mean Russell cannot help you. Contact him to find out more information.</h5>
      </div>
      <Box sx={{
        mt: 2,
        mb: 4,
        position: 'relative',
        textAlign: 'center',
        p: 4,
      }}>
        <Box sx={{
          width: 0,
          height: 0,
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
          borderBottom: '12px solid #fff',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(180deg)',
          zIndex: 1,
        }} />
        <Grid container spacing={4} justifyContent="flex-start">
          {industries.map((industry) => (
            <Grid item xs={12} sm={6} md={4} key={industry.id}>
              <Card sx={{ 
                minWidth: 275, 
                minHeight: 150, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: 'none',  // Explicitly removing border
                boxShadow: 'none'
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 1,  
                  }}>
                    {industry.icon}
                    <Typography variant="h6" component="div" sx={{ textAlign: 'left' }}>
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
