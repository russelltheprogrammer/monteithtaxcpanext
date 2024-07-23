import { Divider, List, ListItem, ListItemText, Typography, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const interFontFamily = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

const Resources = () => {

  const resources = [
    {
      title: 'Internal Revenue Service',
      subtitle: '',
      link: 'http://www.irs.gov'
    },
    {
      title: 'IRS Direct Pay - ',
      subtitle: 'Pay IRS taxes directly via the web (no sign-up necessary)',
      link: 'https://www.irs.gov/payments/direct-pay'
    },
    {
      title: 'New York State Department Of Taxation and Finance',
      link: 'https://www.tax.ny.gov/'
    },
    {
      title: 'NYS Department Of Taxation and Finance Online Services - ',
      subtitle: 'Create an online account and pay NYS taxes directly via the web',
      link: 'https://www.tax.ny.gov/online/'
    },
    {
      title: 'TaxProjection.com - ',
      subtitle: 'Tax tool made by me to help my clients estimate their quarterly taxes',
      link: 'http://www.taxprojection.com'
    },
    {
      title: 'Verify My CPA License',
      link: 'https://eservices.nysed.gov/professions/verification-search'
    },
    {
      title: 'Github - ',
      subtitle: 'My programming development applications & projects',
      link: 'https://github.com/russelltheprogrammer'
    },
    {
      title: 'LinkedIn - ',
      subtitle: 'Connect With Me',
      link: 'https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/'
    },
  ];
    
  return ( 
    <div className='container-resources'>
      <div className="topic-header">
        <h1>USEFUL RESOURCES</h1>
      </div>
      <List>
        {resources.map((resource, index) => (
          <div key={index}>
            <Divider 
              sx={{ 
                width: {xs: '80%', xl: '70%'}, 
                mx: 'auto', 
                borderBottomWidth: '5px',
              }} />
            <ThemeProvider theme={interFontFamily}>
              <ListItem 
                sx={{ 
                  width: {xs: '80%', xl: '70%'}, 
                  mx: 'auto', 
                  py: { xs: 3, sm: 2 } 
                }}>
                <ListItemText
                  primary={
                    <Typography variant="h6" color="textPrimary" sx={{ fontSize: '22px' }}>
                      {resource.title}<span style={{ fontSize: '20px'}}>{resource.subtitle}</span>
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: '20px' }}>
                      <Link href={resource.link} target="_blank" rel="noopener">
                    Read More
                      </Link>
                    </Typography>
                  }
                />
              </ListItem>
            </ThemeProvider>
            {index === resources.length - 1 ? 
              <Divider 
                sx={{ 
                  width: {xs: '80%', xl: '70%'}, 
                  mx: 'auto', 
                  borderBottomWidth: '5px',
                }} /> 
              : ''}
          </div>
        ))}
      </List>
    </div>
  );
}
 
export default Resources;
