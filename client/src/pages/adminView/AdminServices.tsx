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
console.log('transformedServices', transformedServices)
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
    variant="h5"
    component="h2"
    sx={{ fontWeight: "600", m: 2, textAlign: "center" }}
    className="text-xl text-[#0891b2] font-semibold mb-4"
  >
    Service List
  </Typography>
  <Table sx={{ minWidth: 650 }} aria-label="admin service table">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "600" }}>ID</TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Customer Name
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Service Type
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Booking Date
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Schedule Date
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Technician
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: "600" }}>
          Status
        </TableCell>
        
        <TableCell align="center" sx={{ fontWeight: "600" }}>
          PDF
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: "600" }}>
          Action
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {services.map((service) => (
        <TableRow key={service.id}>
          <TableCell>{service.id}</TableCell>
          <TableCell>{service.customerName}</TableCell>
          <TableCell>{service.serviceType}</TableCell>
          <TableCell>{service.bookingDate}</TableCell>
          <TableCell>
            <TextField
              type="date"
              value={service.scheduleDate || ""}
              onChange={(e) =>
                handleScheduleDateChange(service.id, e.target.value)
              }
              sx={{ width: 150 }}
              InputLabelProps={{ shrink: true }}
            />
          </TableCell>
          <TableCell>
            <Select
              value={service.technician || ""}
              onChange={(e) =>
                handleTechnicianChange(service.id, e.target.value)
              }
              sx={{ width: 150 }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Technician
              </MenuItem>
              {technicians.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </TableCell>
          <TableCell>{service.serviceStatus}</TableCell>
          <TableCell align="center">
            {service.receipt ? (
              <InsertDriveFileIcon
              onClick={() => window.open(service?.receipt, "_blank")}
              style={{ cursor: 'pointer', color: '#0891b2' }}
              size={24}
            />
            ) : (
              <Typography variant="body2" color="textSecondary">
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
