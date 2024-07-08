import { Place } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';

const ServicesOverview = () => {

  const iconStyle = {
    mr: 2,
    fontSize: '44px'
  };

  const services = [
    { id: 1, title: 'Tax Services', icon: <Place sx={iconStyle} />},
    { id: 2, title: 'Tax Planning', icon: <Place sx={iconStyle} />},
    { id: 3, title: 'Tax Consulting', icon: <Place sx={iconStyle} />},
    { id: 4, title: 'Bookkeeping & Accounting', icon: <Place sx={iconStyle} />},
    { id: 5, title: 'Software Development', icon: <Place sx={iconStyle} />},
    { id: 6, title: 'Account Management', icon: <Place sx={iconStyle} />},
    { id: 7, title: 'Project Management', icon: <Place sx={iconStyle} />},
    { id: 8, title: 'Business Development', icon: <Place sx={iconStyle} />},
  ];

    
  return ( 
    <div className='container-services'>
      <div className="topic-header" id="topic-header-services">
        <h1>SERVICES OVERVIEW</h1>
        <h3 className='container-services-subtitle'>How Can Russell Help You?</h3>
        {/* <h5 className='container-services-subtitle-two'>Content</h5> */}
      </div>
      <div>
        <Grid container spacing={0}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Box>
                <Typography>{service.icon}</Typography>
                <Typography variant="h5">{service.title}</Typography>
                <Typography variant="body1">This is the description for the service.</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
 
export default ServicesOverview;
