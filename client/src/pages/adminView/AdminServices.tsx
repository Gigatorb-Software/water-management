import { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from "react-router-dom";
import { apiGetAllServices } from "../../services/AdminAPIs/AdminServices";
import { apiGetAllTechnician } from "../../services/AdminAPIs/Technician"; // Assuming this is the API for technicians

type Service = {
  id: string;
  customerName: string;
  serviceType: string;
  bookingDate: string;
  scheduleDate: string;
  technician: string;
  serviceStatus: string;
  receipt: string | null;
};

const AdminService = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [technicians, setTechnicians] = useState<string[]>([]);

  const fetchServices = async () => {
    try {
      const response = await apiGetAllServices();
      const transformedServices = response.data.data.map((service: any) => ({
        ...service,
        customerName: `${service.User.firstName} ${service.User.lastName}`,
        bookingDate: new Date(service.bookingDate).toLocaleDateString("en-GB"),
      }));

      setServices(transformedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchTechnicians = async () => {
    try {
      const response = await apiGetAllTechnician();
      const technicianNames = response.data.data.map(
        (tech: { firstName: string; lastName: string }) =>
          `${tech.firstName} ${tech.lastName}`
      );
      setTechnicians(technicianNames);
    } catch (error) {
      console.error("Error fetching technicians:", error);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchTechnicians();
  }, []);

  const handleTechnicianChange = (id: string, newTechnician: string) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, technician: newTechnician } : service
      )
    );
  };

  const handleScheduleDateChange = (id: string, newDate: string) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, scheduleDate: newDate } : service
      )
    );
  };

  const handleApprove = (id: string) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, status: "Confirmed" } : service
      )
    );
  };

  return (
    <>
   <TableContainer component={Paper} className="my-4">
 <Typography
        variant="h2"
        sx={{
          color: '#00acc1',
          fontFamily: 'serif',  // Match font family
          fontWeight: 'medium',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: { xs: '1.875rem', md: '2.25rem' },  // Adjust font size to match
          marginTop: '20px',  // Optional: add top margin for spacing consistency
        }}
      >
        Service Lists
      </Typography>

  <Table sx={{ minWidth: 650 }} aria-label="admin service table">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>ID</TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Customer Name
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Service Type
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Booking Date
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Schedule Date
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Technician
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Status
        </TableCell>
        
        <TableCell align="center" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          PDF
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: "600", fontFamily: 'serif' }}>
          Action
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {services.map((service) => (
        <TableRow key={service.id}>
          <TableCell  sx={{ fontFamily: 'serif' }}>{service.id}</TableCell>
          <TableCell  sx={{ fontFamily: 'serif' }}>{service.customerName}</TableCell>
          <TableCell  sx={{ fontFamily: 'serif' }}>{service.serviceType}</TableCell>
          <TableCell  sx={{ fontFamily: 'serif' }}>{service.bookingDate}</TableCell>
          <TableCell  sx={{ fontFamily: 'serif' }}>
            <TextField
              type="date"
              value={service.scheduleDate || ""}
              onChange={(e) =>
                handleScheduleDateChange(service.id, e.target.value)
              }
              sx={{ width: 130, fontFamily: 'serif',}}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  fontFamily: 'serif',
                  fontSize: '0.875rem'   // This should apply the serif font to the input
                },
              }}
            />
          </TableCell>
          <TableCell>
            <Select
              value={service.technician || ""}
              onChange={(e) =>
                handleTechnicianChange(service.id, e.target.value)
              }
              sx={{ width: 150, fontFamily: 'serif' }}
              displayEmpty
            >
              <MenuItem value="" disabled  sx={{  fontFamily: 'serif' }}>
                Select Technician
              </MenuItem>
              {technicians.map((tech) => (
                <MenuItem key={tech} value={tech} sx={{  fontFamily: 'serif' }}>
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </TableCell>
          <TableCell  sx={{ fontFamily: 'serif' }}>{service.serviceStatus}</TableCell>
          <TableCell align="center"  sx={{ fontFamily: 'serif' }}>
            {service.receipt ? (
              <InsertDriveFileIcon
              onClick={() => window.open(service?.receipt, "_blank")}
              style={{ cursor: 'pointer', color: '#0891b2', fontFamily: 'serif' }}
              size={24}
            />
            ) : (
              <Typography variant="body2" color="textSecondary"  sx={{ fontFamily: 'serif' }}>
                No PDF Available
              </Typography>
            )}
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              onClick={() => handleApprove(service.id)}
              disabled={service.serviceStatus === "Confirmed"}
              className="!bg-cyan-600 !hover:bg-cyan-500 text-white rounded px-4 py-2"
              sx={{ fontFamily: 'serif' }}
            >
              Approve
            </Button>
          </TableCell>
          
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </>
  );
};

export default AdminService;
