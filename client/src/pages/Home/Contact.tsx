import React from 'react';
import { TextField, Button, MenuItem, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUsForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      email: '',
      mobileNo: '',
      pincode: '',
      modelName: '',
      callType: '',
      message: '',
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      mobileNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be 10 digits').required('Required'),
      pincode: Yup.string().required('Required'),
      modelName: Yup.string().required('Required'),
      callType: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {/* <Typography variant="h4" sx={{ color: '#00acc1', fontWeight: 700, marginBottom: '10px' }}>
        Contact Us
      </Typography> */}

<Typography
          variant="h2"
          sx={{
            color: '#00acc1',
            fontFamily: 'serif',  // Match font family
            fontWeight: 'medium',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3rem' },  // Adjust font size to match
            marginTop: '20px',  // Optional: add top margin for spacing consistency
          }}
        >
          Contact Us
        </Typography>

      <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: '30px' }}>
        Have anything we can help you with? Just get in touch with us.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            id="customerName"
            name="customerName"
            label="*Customer Name"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.customerName && Boolean(formik.errors.customerName)}
            helperText={formik.touched.customerName && formik.errors.customerName}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          />
          <TextField
            fullWidth
            variant="standard"
            id="email"
            name="email"
            label="Email Id"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          />
          <TextField
            fullWidth
            variant="standard"
            id="mobileNo"
            name="mobileNo"
            label="*Mobile No"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.mobileNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          />
          <TextField
            fullWidth
            variant="standard"
            id="pincode"
            name="pincode"
            label="*Pincode"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
            helperText={formik.touched.pincode && formik.errors.pincode}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          />
          <TextField
            fullWidth
            select
            variant="standard"
            id="modelName"
            name="modelName"
            label="*Model Name"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.modelName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.modelName && Boolean(formik.errors.modelName)}
            helperText={formik.touched.modelName && formik.errors.modelName}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          >
            <MenuItem value="Model 1">Model 1</MenuItem>
            <MenuItem value="Model 2">Model 2</MenuItem>
            <MenuItem value="Model 3">Model 3</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            variant="standard"
            id="callType"
            name="callType"
            label="*Call Type"
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.callType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.callType && Boolean(formik.errors.callType)}
            helperText={formik.touched.callType && formik.errors.callType}
            sx={{
              flex: '0 1 48%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          >
            <MenuItem value="Inquiry">Inquiry</MenuItem>
            <MenuItem value="Complaint">Complaint</MenuItem>
            <MenuItem value="Service Request">Service Request</MenuItem>
          </TextField>
          <TextField
            fullWidth
            variant="standard"
            id="message"
            name="message"
            label="*Message"
            multiline
            rows={4}
            InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
            InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              width: '100%',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#9cc5e6',
              },
            }}
          />
        </Box>
        <Typography variant="caption" sx={{ color: '#666', display: 'block', marginTop: '8px' }}>
          *Required field
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: 50,
            backgroundColor: '#00acc1',
            padding: '10px 30px',
            fontSize: '16px',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: '#00acc1',
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactUsForm;
