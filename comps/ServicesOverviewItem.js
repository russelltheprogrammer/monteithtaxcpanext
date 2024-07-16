import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
          width: '90%',
          maxHeight: '90vh',  // Maximum height
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          border: '3px solid black',
          borderRadius: '5%',
          padding: '20px',
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
      <DialogTitle sx={{ fontSize: '34px', fontWeight: 'bold' }}>
        {service.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: '20px' }}>
          {service.description} {service.learnMoreText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            fontSize: '30px',
            minWidth: '160px',
          }}
        >
          <CloseIcon sx={{ fontSize: '30px' }} />
        Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServicesOverviewItem;
