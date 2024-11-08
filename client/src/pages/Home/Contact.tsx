import React from "react";
import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUsForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      customerName: "",
      email: "",
      mobileNo: "",
      pincode: "",
      modelName: "",
      callType: "",
      message: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mobileNo: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be 10 digits")
        .required("Required"),
      pincode: Yup.string().required("Required"),
      modelName: Yup.string().required("Required"),
      callType: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="max-w-[800px] mx-auto p-5 text-center my-1 ">
      {/* <h4 className="text-[#00acc1] font-bold mb-0 text-3xl">Contact Us</h4> */}
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
      <p className="text-[#666] mb-6">
        Have anything we can help you with? Just get in touch with us.
      </p>
      <form>
  {/* Row 1 */}
  <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 gap-6">
    <div className="flex flex-col w-full md:min-w-[48%] mb-4 md:mb-0">
      <label htmlFor="customerName" className="flex justify-start text-[#666]">
        *Customer Name
      </label>
      <input
        type="text"
        id="customerName"
        name="customerName"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.customerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.customerName && formik.errors.customerName && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.customerName}
        </p>
      )}
    </div>
    <div className="flex flex-col w-full md:min-w-[48%]">
      <label htmlFor="email" className="flex justify-start text-[#666]">
        Email Id
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.email}
        </p>
      )}
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 gap-6">
    <div className="flex flex-col w-full md:min-w-[48%] mb-4 md:mb-0">
      <label htmlFor="mobileNo" className="flex justify-start text-[#666]">
        *Mobile No
      </label>
      <input
        type="text"
        id="mobileNo"
        name="mobileNo"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.mobileNo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.mobileNo && formik.errors.mobileNo && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.mobileNo}
        </p>
      )}
    </div>
    <div className="flex flex-col w-full md:min-w-[48%]">
      <label htmlFor="pincode" className="flex justify-start text-[#666]">
        *Pincode
      </label>
      <input
        type="text"
        id="pincode"
        name="pincode"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.pincode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.pincode && formik.errors.pincode && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.pincode}
        </p>
      )}
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 gap-6">
    <div className="flex flex-col w-full md:min-w-[48%] mb-4 md:mb-0">
      <label htmlFor="modelName" className="flex justify-start text-[#666]">
        *Model Name
      </label>
      <select
        id="modelName"
        name="modelName"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.modelName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="Model 1">Model 1</option>
        <option value="Model 2">Model 2</option>
        <option value="Model 3">Model 3</option>
      </select>
      {formik.touched.modelName && formik.errors.modelName && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.modelName}
        </p>
      )}
    </div>
    <div className="flex flex-col w-full md:min-w-[48%]">
      <label htmlFor="callType" className="flex justify-start text-[#666]">
        *Call Type
      </label>
      <select
        id="callType"
        name="callType"
        className="w-full border border-gray-300 rounded px-2 py-1"
        value={formik.values.callType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="Inquiry">Inquiry</option>
        <option value="Complaint">Complaint</option>
        <option value="Service Request">Service Request</option>
      </select>
      {formik.touched.callType && formik.errors.callType && (
        <p className="text-red-500 text-sm text-start">
          {formik.errors.callType}
        </p>
      )}
    </div>
  </div>

  {/* Full Width Textarea */}
  <div className="flex flex-col mb-4">
    <label htmlFor="message" className="flex justify-start text-[#666]">
      *Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full border border-gray-300 rounded px-2 py-1"
      value={formik.values.message}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.message && formik.errors.message && (
      <p className="text-red-500 text-sm text-start">
        {formik.errors.message}
      </p>
    )}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-1 px-8 py-2  rounded-md bg-[#00acc1] text-white text-lg hover:bg-[#00acc1]"
  >
    Submit
  </button>
</form>


     
    </div>
    // <Box sx={{ maxWidth: 800, margin: '0 auto', padding: '20px', textAlign: 'center' }}>
    //   <Typography variant="h4" sx={{ color: '#00acc1', fontWeight: 700, marginBottom: '10px' }}>
    //     Contact Us
    //   </Typography>
    //   <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: '30px' }}>
    //     Have anything we can help you with? Just get in touch with us.
    //   </Typography>
    //   <form onSubmit={formik.handleSubmit}>
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         gap: '16px',
    //         justifyContent: 'space-between',
    //       }}
    //     >
    //       <TextField
    //         fullWidth
    //         variant="standard"
    //         id="customerName"
    //         name="customerName"
    //         label="*Customer Name"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.customerName}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.customerName && Boolean(formik.errors.customerName)}
    //         helperText={formik.touched.customerName && formik.errors.customerName}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       />
    //       <TextField
    //         fullWidth
    //         variant="standard"
    //         id="email"
    //         name="email"
    //         label="Email Id"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.email}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.email && Boolean(formik.errors.email)}
    //         helperText={formik.touched.email && formik.errors.email}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       />
    //       <TextField
    //         fullWidth
    //         variant="standard"
    //         id="mobileNo"
    //         name="mobileNo"
    //         label="*Mobile No"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.mobileNo}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
    //         helperText={formik.touched.mobileNo && formik.errors.mobileNo}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       />
    //       <TextField
    //         fullWidth
    //         variant="standard"
    //         id="pincode"
    //         name="pincode"
    //         label="*Pincode"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.pincode}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.pincode && Boolean(formik.errors.pincode)}
    //         helperText={formik.touched.pincode && formik.errors.pincode}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       />
    //       <TextField
    //         fullWidth
    //         select
    //         variant="standard"
    //         id="modelName"
    //         name="modelName"
    //         label="*Model Name"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.modelName}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.modelName && Boolean(formik.errors.modelName)}
    //         helperText={formik.touched.modelName && formik.errors.modelName}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       >
    //         <MenuItem value="Model 1">Model 1</MenuItem>
    //         <MenuItem value="Model 2">Model 2</MenuItem>
    //         <MenuItem value="Model 3">Model 3</MenuItem>
    //       </TextField>
    //       <TextField
    //         fullWidth
    //         select
    //         variant="standard"
    //         id="callType"
    //         name="callType"
    //         label="*Call Type"
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.callType}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.callType && Boolean(formik.errors.callType)}
    //         helperText={formik.touched.callType && formik.errors.callType}
    //         sx={{
    //           flex: '0 1 48%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       >
    //         <MenuItem value="Inquiry">Inquiry</MenuItem>
    //         <MenuItem value="Complaint">Complaint</MenuItem>
    //         <MenuItem value="Service Request">Service Request</MenuItem>
    //       </TextField>
    //       <TextField
    //         fullWidth
    //         variant="standard"
    //         id="message"
    //         name="message"
    //         label="*Message"
    //         multiline
    //         rows={4}
    //         InputLabelProps={{ shrink: true, sx: { fontSize: '1.25rem' } }} // Increase label font size
    //         InputProps={{ sx: { fontSize: '1.25rem' } }} // Increase input text size
    //         value={formik.values.message}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.message && Boolean(formik.errors.message)}
    //         helperText={formik.touched.message && formik.errors.message}
    //         sx={{
    //           width: '100%',
    //           '& .MuiInput-underline:before': {
    //             borderBottomColor: '#9cc5e6',
    //           },
    //         }}
    //       />
    //     </Box>
    //     <Typography variant="caption" sx={{ color: '#666', display: 'block', marginTop: '8px' }}>
    //       *Required field
    //     </Typography>
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       sx={{
    //         borderRadius: 50,
    //         backgroundColor: '#00acc1',
    //         padding: '10px 30px',
    //         fontSize: '16px',
    //         marginTop: '20px',
    //         '&:hover': {
    //           backgroundColor: '#00acc1',
    //         },
    //       }}
    //     >
    //       Submit
    //     </Button>
    //   </form>
    // </Box>
  );
};

export default ContactUsForm;
