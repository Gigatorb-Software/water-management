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
import { apiGetAllServices, apiUpdateServiceStatus } from "../../services/AdminAPIs/AdminServices";
import { apiGetAllTechnician } from "../../services/AdminAPIs/Technician"; // Assuming this is the API for technicians
import toast from "react-hot-toast";

type Service = {
  payload(id: string, payload: any): void;
  id: string;
  customerName: string;
  serviceType: string;
  bookingDate: string;
  scheduledDate: string;
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
      toast.error(error.response.data.message);

    }
  };

  console.log('services', services )

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
      toast.error(error.response.data.message);

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
        service.id === id ? { ...service, scheduledDate: newDate } : service
      )
    );
  };

  const updateServiceStatus = async (id: string, services: any) => {
    try {
     
      const payload = {
        scheduledDate : services.scheduledDate,
            serviceStatus : "confirmed",
            technicianId : services.technicianId
    }
      const response = await apiUpdateServiceStatus(id, payload);
      if (response.status === 200) {
        const updatedService = response.data.data;
        toast.success(response.data.message);
        
        setServices((prev) =>
          prev.map((service) =>
            service.id === id
              ? { ...service, serviceStatus: 'confirmed' }
              : service
          )
        );
        
      }
    } catch (error) {
      console.error("Error updating service status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleApprove = (id: string, payload: any) => {
     updateServiceStatus(id, payload);
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
    <TableCell sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>ID</TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Customer Name
    </TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Service Type
    </TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Booking Date
    </TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Schedule Date
    </TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Technician
    </TableCell>
    <TableCell align="left" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      Status
    </TableCell>
    <TableCell align="center" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
      PDF
    </TableCell>
    <TableCell align="center" sx={{ fontWeight: "600", fontFamily: 'serif', whiteSpace: 'nowrap' }}>
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
              value={service.scheduledDate || ""}
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
              <Typography variant="body2" color="textSecondary">
                No PDF 
              </Typography>
            )}
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              onClick={() => handleApprove(service.id, service)}
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
