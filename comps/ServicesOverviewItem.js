import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Backdrop } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const interFontFamily = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

const ServicesOverviewItem = ({ open, onClose, service }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={true}
      fullWidth
      maxWidth="md"  // Control the maximum width. Change to 'lg' or 'xl' for larger sizes
      PaperProps={{
        sx: {
          width: { xs: '90%', md: '80%' },
          maxHeight: {xs: '94vh', sm: '90vh'},
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          border: '3px solid black',
          borderRadius: '5%',
          padding: {xs: '10px', sm: '20px'},
          backgroundColor: 'white',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }
      }}
      components={{
        Backdrop: Backdrop,
      }}
      componentsProps={{
        backdrop: { 
          sx: {
            backgroundColor: '#F3F7F9',
            zIndex: (theme) => theme.zIndex.drawer - 1,
          }
        }
      }}
    >
      <ThemeProvider theme={interFontFamily}>
        <DialogTitle
          sx={{ 
            fontSize: { xs: '24px', sm: '40px', lg: '48px' }, 
            fontWeight: 'bold', 
            paddingBottom: { xs: '20px', sm: '30px' }
          }}>
          {service.icon} {service.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText 
            sx={{ 
              fontSize: {xs: '19px', sm: '24px', lg: '28px' }, 
              width: {xs: '98%', md: '80%', xl: '70%'}, 
              textAlign: 'left', 
              margin: 'auto',
              lineHeight: '1.8',
            }}>
            {service.description} {service.learnMoreText} {service.learnMoreLink ? <a href={service.learnMoreLink} target="_blank" rel="noopener noreferrer">{service.learnMoreLinkText}</a> : ''}
          </DialogContentText>
        </DialogContent>
      </ThemeProvider>
      <DialogActions>
        <Button
          onClick={onClose}
          autoFocus
          sx={{
            fontSize: {xs: '28px', sm: '30px'},
            minWidth: '160px',
          }}
        >
          <CloseIcon sx={{ fontSize: {xs: '28px', sm: '30px'} }} />
        Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServicesOverviewItem;
