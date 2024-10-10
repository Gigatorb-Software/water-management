import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
    Container,
    Link,
    Grid,
} from '@mui/material';

interface FormValues {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    category: string;
    pinCode: string;
    state: string;
    city: string;
    serviceType: string;
    requestType: string;
    address1: string;
    address2: string;
    nearbyPlace: string;
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.string()
        .required('Mobile number is required')
        .matches(/^\d{10}$/, 'Mobile number should be 10 digits'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    category: Yup.string().required('Category is required'),
    pinCode: Yup.string().required('Pin code is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    requestType: Yup.string().required('Select Service or New Purchase'),
    serviceType: Yup.string().required('Select Service Type'),
    address1: Yup.string().required('Address is required'),
});

const ServiceForm: React.FC = () => {
    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            category: '',
            pinCode: '',
            state: '',
            city: '',
            serviceType: '',
            requestType: '',
            address1: '',
            address2: '',
            nearbyPlace: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
            // Handle form submission logic here
        },
    });

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://html.ditsolution.net/drtheme/dreamhub/purify/assets/images/slider/hero-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                py: { xs: 4, sm: 8, lg: 12 }, // Responsive padding
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                }}
            ></Box>

            {/* Form Container */}
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 3,
                        p: { xs: 2, sm: 3 }, // Responsive padding
                    }}
                >
                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#1a202c' }}>
                            Submit Your Account
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, color: '#00ACC1' }}>
                            For Our Services{' '}
                            <Link href="#" underline="hover" sx={{ color: '#3182ce' }}>
                                
                            </Link>
                        </Typography>
                    </Box>

                    {/* Form */}
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* Full Name */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        placeholder="Enter your First Name"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        placeholder="Enter your last name"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Mobile Number and Pin Code */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        label="10 Digit Mobile Number"
                                        placeholder="Enter your 10-digit mobile number"
                                        value={formik.values.mobileNumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="pinCode"
                                        name="pinCode"
                                        label="Enter Pin Code"
                                        placeholder="Enter your pin code"
                                        value={formik.values.pinCode}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                                        helperText={formik.touched.pinCode && formik.errors.pinCode}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Email Address and Category */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="email"
                                        name="email"
                                        label="Email Address"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel sx={{ fontSize: 12 }} id="category-label">
                                            Select Category
                                        </InputLabel>
                                        <Select
                                            labelId="category-label"
                                            id="category"
                                            name="category"
                                            value={formik.values.category}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.category && Boolean(formik.errors.category)}
                                            label="Select Category"
                                            sx={{ fontSize: 12 }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="category1">Category 1</MenuItem>
                                            <MenuItem value="category2">Category 2</MenuItem>
                                            <MenuItem value="category3">Category 3</MenuItem>
                                        </Select>
                                        {formik.touched.category && formik.errors.category && (
                                            <Typography variant="caption" color="error">
                                                {formik.errors.category}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>

                            {/* State and City */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel sx={{ fontSize: 12 }} id="state-label">
                                            Select State
                                        </InputLabel>
                                        <Select
                                            labelId="state-label"
                                            id="state"
                                            name="state"
                                            value={formik.values.state}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.state && Boolean(formik.errors.state)}
                                            label="Select State"
                                            sx={{ fontSize: 12 }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="state1">State 1</MenuItem>
                                            <MenuItem value="state2">State 2</MenuItem>
                                            <MenuItem value="state3">State 3</MenuItem>
                                        </Select>
                                        {formik.touched.state && formik.errors.state && (
                                            <Typography variant="caption" color="error">
                                                {formik.errors.state}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="city"
                                        name="city"
                                        label="Enter City"
                                        placeholder="Enter your city"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Address Fields */}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="address1"
                                        name="address1"
                                        label="Address 1"
                                        placeholder="Enter your address"
                                        value={formik.values.address1}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address1 && Boolean(formik.errors.address1)}
                                        helperText={formik.touched.address1 && formik.errors.address1}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="address2"
                                        name="address2"
                                        label="Address 2 (Optional)"
                                        placeholder="Enter additional address info"
                                        value={formik.values.address2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        InputLabelProps={{ sx: { fontSize: 12 } }}
                                        inputProps={{ sx: { fontSize: 12 } }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Nearby Place */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    id="nearbyPlace"
                                    name="nearbyPlace"
                                    label="Nearby Place"
                                    placeholder="Enter a nearby place"
                                    value={formik.values.nearbyPlace}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ sx: { fontSize: 12 } }}
                                    inputProps={{ sx: { fontSize: 12 } }}
                                />
                            </Grid>

                            {/* Request Type */}
                            <Box>
                                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                    Request Type
                                </Typography>
                                <RadioGroup
                                    row
                                    id="requestType"
                                    name="requestType"
                                    value={formik.values.requestType}
                                    onChange={formik.handleChange}
                                >
                                    <FormControlLabel
                                        value="service"
                                        control={<Radio />}
                                        label="Service"
                                        sx={{ mr: 2 }}
                                    />
                                    <FormControlLabel
                                        value="newPurchase"
                                        control={<Radio />}
                                        label="New Purchase"
                                        sx={{ mr: 2 }}
                                    />
                                </RadioGroup>
                            </Box>

                            {/* Service Type */}
                            <FormControl fullWidth size="small">
                                <InputLabel sx={{ fontSize: 12 }} id="serviceType-label">
                                    Service Type
                                </InputLabel>
                                <Select
                                    labelId="serviceType-label"
                                    id="serviceType"
                                    name="serviceType"
                                    value={formik.values.serviceType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.serviceType && Boolean(formik.errors.serviceType)}
                                    label="Service Type"
                                    sx={{ fontSize: 12 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="service1">Service 1</MenuItem>
                                    <MenuItem value="service2">Service 2</MenuItem>
                                    <MenuItem value="service3">Service 3</MenuItem>
                                </Select>
                                {formik.touched.serviceType && formik.errors.serviceType && (
                                    <Typography variant="caption" color="error">
                                        {formik.errors.serviceType}
                                    </Typography>
                                )}
                            </FormControl>

                            {/* Submit Button */}
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceForm;
