import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
  backgroundColor: '#82AEC7',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputBase-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px #82AEC7 inset',
    WebkitTextFillColor: 'white',
  },
});

const ContactFormField = ({ xs, sm, label, name, value, onChange, required, multiline, rows }) => {
  return ( 
    <Grid item xs={xs} sm={sm}>
      <StyledTextField
        fullWidth
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        multiline={multiline}
        rows={rows}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{
          style: { color: 'white' },
        }}
      />
    </Grid>
  );
}
 
export default ContactFormField;
