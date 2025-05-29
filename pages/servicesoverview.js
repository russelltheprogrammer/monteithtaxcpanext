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
import AssessmentIcon from '@mui/icons-material/Assessment';

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
      1120S (S-Corporation), 1041 (Trust), 709 (Gift Tax), 1099 (Payments), and more. I have experience in many different industries which can be viewed in the Industries section of the website.`,
      icon: <BalanceIcon sx={iconStyle} />
    },
    { 
      id: 2, 
      title: 'Software Development', 
      description: 'An accountant that also knows how to code? Yes, it is possible. Let me help you with your software engineering and web development needs.',
      learnMore: true,
      learnMoreText: `I am skilled in many areas of software development including front-end, back-end, and full-stack development. I have experience with many programming languages and 
      frameworks such as JavaScript, Typescript, Python, Robotic Process Automation, APIs, HTML, CSS, jQuery, Redux, MongoDB, Mongoose, Express.js, Node.js, React, Next.js, Auth0, Git, 
      Google Analytics, Tailwind CSS, Shadcn, ChatGPT, and more. I can help you with your website, web applications, or technology/software product. I have coded for startup companies,
      accounting technology companies, and freelance projects for private clients. Check out my github for more information by clicking this `,
      learnMoreLink: 'https://github.com/russelltheprogrammer',
      learnMoreLinkText: 'LINK.',
      icon: <DeveloperBoardIcon sx={iconStyle} />
    },
    { 
      id: 3, 
      title: 'Automation & Integrations', 
      description: 'Want to take your business to the next level by using the latest time and cost savings technologies and techniques?',
      learnMore: true,
      learnMoreText: `If you clicked "Learn More" then I hope that answer is YES! I have experience working with custom developed Python robots, Robotic Process Automation (RPA), and 
      API integrations. I have partnerships with some of the best accounting technology companies in the industry that specialize in these areas. 
      Let me help you take your business to the next level by automating your repetitive tasks to save you time so that you can focus on other, more value added areas of your business.`,
      icon: <PolylineIcon sx={iconStyle} />
    },
    { 
      id: 4, 
      title: 'Accounting & Tax Technology Consulting', 
      description: 'Starting a new company or need help evaluating your current technology stack?',
      learnMore: true,
      learnMoreText: `The accounting and tax technology industry is constantly changing and evolving. Does your tech stack need improvement? Modernization? Are you just starting out 
      and anxious about what software to choose? Do you want an independent evaluation to make sure you aren't being upsold by tech vendors? I can help you with all of these 
      questions, concerns, and more. I work full-time in the accounting technology space, and I constantly develop, research, meet with vendors, and use the latest technologies.`,
      icon: <AssessmentIcon sx={iconStyle} />
    },
    { 
      id: 6, 
      title: 'Product Development', 
      description: 'Building a new tax or accounting product? Let me help you with product design and development.',
      learnMore: true,
      learnMoreText: `I have experience working with accounting technology companies and startups to build new products. I have worked on some of the most cutting edge technologies in 
      the accounting industry from Robotic Process Automation to Artificial Intelligence to APIs to old school tax software. I keep up to date with all
      the software in the accounting industry from software that is decades old to software that has just entered the marketplace. Check out my own software that I built in 
      my spare time to help my clients estimate their quarterly and year-end taxes at`,
      learnMoreLink: 'https://taxprojection.com',
      learnMoreLinkText: 'TaxProjection.com.',
      icon: <ImportantDevicesIcon sx={iconStyle} />
    },
    { 
      id: 7, 
      title: 'Account Services & Project Management', 
      description: 'Overloaded with new work? Let me help you manage your projects and client accounts.',
      learnMore: true,
      learnMoreText: `I have worked in the client services industry for over a decade. I have polished my communication and soft skills to deliver the best possible service to my clients. I have
      worked through numerous tax seasons and have managed extreme workloads and stress while never missing a deadline. Let me help you free up
      time to focus on other areas of your business. I have experience working with a few different workflow management systems, one example being Clickup.`,
      icon: <DesignServicesIcon sx={iconStyle} />
    },
    { 
      id: 8, 
      title: 'Tax Planning', 
      description: 'Plan ahead for future tax events to effectively maximize your tax savings.',
      learnMore: true,
      learnMoreText: `Whether it be business structuring, retirement planning, equity compensation, estate planning, multi-state tax planning, living in a foreign country, or another related
      tax matter, I can help you plan ahead for it. I have experience working with many different types of clients, lets save you some money!`,
      icon: <AttachMoneyIcon sx={iconStyle} />
    },
    { 
      id: 9, 
      title: 'Tax Consulting & Advisory', 
      description: 'Special projects, expert knowledge, industry specialization, and consulting services for tax-related matters, including contract based work.',
      learnMore: false,
      icon: <CoffeeIcon sx={iconStyle} />
    },
    { 
      id: 11, 
      title: 'Bookkeeping & Accounting', 
      description: 'Meet your financial reporting needs with accurate and timely bookkeeping and accounting. Including high proficiency in QuickBooks and QBO.',
      learnMore: false,
      icon: <KeyboardIcon sx={iconStyle} />
    },
    { 
      id: 12, 
      title: 'Business Development', 
      description: 'I will work with you to grow your business and reach your goals with my expert knowledge of the entire accounting industry from tax to accounting to technology.',
      learnMore: false,
      icon: <CampaignIcon sx={iconStyle} />
    },
    { 
      id: 13, 
      title: 'Other Services', 
      description: 'Service not listed? Contact me to see if I can help.',
      learnMore: false,
      icon: <AltRouteIcon sx={iconStyle} />
    },
  ];
    
  return ( 
    <div className='container-services'>
      <div className="topic-header" id="topic-header-services">
        <h1>SERVICES OVERVIEW</h1>
        <h3 className='container-services-subtitle'>How Can Russell Help You?</h3>
      </div>
      <div>
        <Grid 
          container 
          spacing={0} 
          sx={{ px: {xs: 2, sm: 4, lg: 3, xl: 6 }, pt: 4, pb: 6 }}
        >
          {services.map((service) => (
            <Grid item xs={12} sm={12} md={12} lg={3} key={service.id}>
              <Card sx={{ 
                minWidth: { xs: 220, sm: 250, md: 250, lg: 280 }, 
                minHeight: { xs: 520, sm: 420, md: 380, lg: 520 }, 
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
                          pb: {xs: 2, lg: 1},
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
