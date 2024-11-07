import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { apiGetUserById } from "../../services/UserAPIs/User";
import { apiCreateServices } from "../../services/AdminAPIs/AdminServices";

interface FormValues {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  category: string;
  postalCode: string;
  state: string;
  city: string;
  serviceType: string;
  requestType: string;
  street: string;
  country: string;
  productId: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number should be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  category: Yup.string().required("Category is required"),
  pinCode: Yup.string().required("Pin code is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  requestType: Yup.string().required("Select Service or New Purchase"),
  serviceType: Yup.string().required("Select Service Type"),
  address1: Yup.string().required("Address is required"),
});

const ServiceForm: React.FC = () => {
  //   const { data } = useParams();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({});
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      category: "",
      postalCode: "",
      state: "",
      city: "",
      serviceType: "",
      requestType: "",
      street: "",
      country: "",
      productId: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      //         try {
      //             const response = await apiCreateServices({
      //               customerId: userId, // Replace with actual customer ID
      //               productId: values.productId,
      //               serviceType: values.serviceType,
      //               receipt: "ytegrwtyu", // Replace with actual receipt number
      //               serviceStatus: "pending",
      //             });
      //     console.log("API response:", response.data);
      //     // Handle success or error based on the API response
      //   } catch (error) {
      //     console.error("Error submitting form:", error);
      //     // Handle error, e.g., display an error message to the user
      //   }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response: AxiosResponse = await apiGetUserById(userId);
          const userData = response?.data?.data;

          setFormData(userData?.data);

          // Update formik values with fetched data
          formik.setValues({
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            mobileNumber: userData.phone || "",
            email: userData.email || "",
            category: userData.category || "",
            postalCode: userData.address.postalCode || "",
            state: userData.address.state || "",
            city: userData.address.city || "",
            serviceType: userData.serviceType || "",
            requestType: userData.requestType || "",
            street: userData.address.street || "",
            country: userData.address.country || "",
            productId: userData.productId || "",
          });

          console.log("Fetched user data:", userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [userId]); // Run this effect when `data` changes

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("customerId", userId); // Replace `userId` with the actual customer ID
    formData.append("productId", 4);
    formData.append("serviceType", formik.values.serviceType);
    formData.append("serviceStatus", "pending");

    // Assuming `formik.values.receipt` holds the PDF file
    const pdfFile = formik.values.receipt;

    if (pdfFile) {
      formData.append("receipt", pdfFile); // Attach the PDF file to FormData
    }

    try {
      // Send a POST request with FormData
      const response = await axios.post(
        "http://localhost:3000/api/createService",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(/WaterBackground.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        py: { xs: 4, sm: 8, lg: 12 }, // Responsive padding
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
        }}
      ></Box>

      {/* Form Container */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            p: { xs: 2, sm: 3 }, // Responsive padding
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", color: "#1a202c" }}
            >
              Submit Your Account
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#00ACC1" }}>
              For Our Services{" "}
              <Link href="#" underline="hover" sx={{ color: "#3182ce" }}></Link>
            </Typography>
          </Box>

          {/* Form */}
          {/* <form onSubmit={formik.handleSubmit}> */}
          <form onSubmit={handleFormSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
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
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
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
                    error={
                      formik.touched.mobileNumber &&
                      Boolean(formik.errors.mobileNumber)
                    }
                    helperText={
                      formik.touched.mobileNumber && formik.errors.mobileNumber
                    }
                    InputLabelProps={{ sx: { fontSize: 12 } }}
                    inputProps={{ sx: { fontSize: 12 } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="productId"
                    name="productId"
                    label="ProductId"
                    placeholder="Enter your ProductId"
                    value={formik.values.productId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.productId &&
                      Boolean(formik.errors.productId)
                    }
                    helperText={
                      formik.touched.productId && formik.errors.productId
                    }
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
                {/* <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel sx={{ fontSize: 12 }} id="category-label">
                      Purifier You Own
                    </InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      name="category"
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.category &&
                        Boolean(formik.errors.category)
                      }
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
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="street"
                    name="street"
                    label="Enter street"
                    placeholder="Enter your street"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.street && Boolean(formik.errors.street)
                    }
                    helperText={formik.touched.street && formik.errors.street}
                    InputLabelProps={{ sx: { fontSize: 12 } }}
                    inputProps={{ sx: { fontSize: 12 } }}
                  />
                </Grid>
              </Grid>

              {/* State and City */}
              <Grid container spacing={2}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="state"
                    name="state"
                    label="Enter state"
                    placeholder="Enter your state"
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

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="postalCode"
                    name="postalCode"
                    label="Enter Postal Code"
                    placeholder="Enter your postalCode"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.postalCode &&
                      Boolean(formik.errors.postalCode)
                    }
                    helperText={
                      formik.touched.postalCode && formik.errors.postalCode
                    }
                    InputLabelProps={{ sx: { fontSize: 12 } }}
                    inputProps={{ sx: { fontSize: 12 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="country"
                    name="country"
                    label="country"
                    placeholder="Enter your country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                    InputLabelProps={{ sx: { fontSize: 12 } }}
                    inputProps={{ sx: { fontSize: 12 } }}
                  />
                </Grid>
              </Grid>

              {/* Address Fields */}
              <Grid container spacing={2}></Grid>
              <input
                type="file"
                name="receipt"
                className="border border-gray-300 rounded-md"
                onChange={(event) => {
                  formik.setFieldValue("receipt", event.currentTarget.files[0]);
                }}
              />

              {/* Service Type */}
              <FormControl fullWidth size="small">
                <InputLabel sx={{ fontSize: 12 }} id="serviceType-label">
                  Selected Service
                </InputLabel>
                <Select
                  labelId="serviceType-label"
                  id="serviceType"
                  name="serviceType"
                  value={formik.values.serviceType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.serviceType &&
                    Boolean(formik.errors.serviceType)
                  }
                  label="Service Type"
                  sx={{ fontSize: 12 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="installation">Installation</MenuItem>
                  {/* <MenuItem value="service2">Service 2</MenuItem>
                                    <MenuItem value="service3">Service 3</MenuItem> */}
                </Select>
                {formik.touched.serviceType && formik.errors.serviceType && (
                  <Typography variant="caption" color="error">
                    {formik.errors.serviceType}
                  </Typography>
                )}
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#0891b2", // cyan-600 hex value
                  color: "white", // text color white
                  "&:hover": {
                    backgroundColor: "white", // hover bg color white
                    color: "#0891b2", // text color on hover (cyan-600)
                    border: "1px solid #0891b2", // border color on hover
                  },
                }}
              >
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
