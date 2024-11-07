import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Select, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Example product data type
type Product = {
  srno: string;
  customer: string;
  serviceType: string;
  bookingDate: string;
  scheduleDate: string;
  technician: string;
  status: string;
};

const AdminService = () => {
  const navigate = useNavigate();


  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/products",
        {
          withCredentials: true, // Send the cookie along with the request
        }
      );
      console.log("response", response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // Static product data with initial values
  const [products, setProducts] = useState<Product[]>([
    { srno: "1", customer: "Ravi Sharma", serviceType: "Maintenance", bookingDate: "2023-11-01", scheduleDate: "2023-11-05", technician: "James", status: "Pending" },
    { srno: "2", customer: "Nitin Chaddha", serviceType: "Installation", bookingDate: "2023-11-02", scheduleDate: "2023-11-06", technician: "Rohit", status: "Confirmed" },
    { srno: "3", customer: "Amar Singh", serviceType: "Maintenance", bookingDate: "2023-11-03", scheduleDate: "2023-11-07", technician: "Raghav", status: "Cancelled" },
    { srno: "4", customer: "Kirti Shukla", serviceType: "Installation", bookingDate: "2023-11-04", scheduleDate: "2023-11-08", technician: "Amit", status: "Pending" },
    { srno: "5", customer: "Payal Tyagi", serviceType: "Maintenance", bookingDate: "2023-11-05", scheduleDate: "2023-11-09", technician: "Neelesh", status: "Confirmed" },
    // Add more rows as needed
  ]);

  // Dropdown options
  const serviceTypes = ["Maintenance", "Installation", "Repair"];
  const technicians = ["James", "Rohit", "Raghav", "Amit", "Neelesh"];
  const statuses = ["Pending", "Confirmed", "Cancelled"];

  // Approve button handler to update the status to "Confirmed"
  const handleApprove = (srno: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.srno === srno ? { ...product, status: "Confirmed" } : product
      )
    );
  };

  // Columns for the table
  const columns = useMemo<MRT_ColumnDef<Product>[]>(() => [
    { accessorKey: "srno", header: "Sr.No", size: 20 },
    { accessorKey: "customer", header: "Customer Name", size: 200 },
    {
      accessorKey: "serviceType",
      header: "Service Type",
      size: 200,
      Cell: ({ cell }) => (
        <Select
          value={cell.getValue<string>()}
          onChange={(e) => {
            const newValue = e.target.value;
            setProducts((prev) =>
              prev.map((product) =>
                product.srno === cell.row.original.srno
                  ? { ...product, serviceType: newValue }
                  : product
              )
            );
          }}
          sx={{ width: 120 }}
        >
          {serviceTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    { accessorKey: "bookingDate", header: "Booking Date", size: 200 },
    { accessorKey: "scheduleDate", header: "Schedule Date", size: 100 },
    {
      accessorKey: "technician",
      header: "Technician",
      size: 100,
      Cell: ({ cell }) => (
        <Select
          value={cell.getValue<string>()}
          onChange={(e) => {
            const newValue = e.target.value;
            setProducts((prev) =>
              prev.map((product) =>
                product.srno === cell.row.original.srno
                  ? { ...product, technician: newValue }
                  : product
              )
            );
          }}
          sx={{ width: 120 }}
        >
          {technicians.map((tech) => (
            <MenuItem key={tech} value={tech}>
              {tech}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 100,
      Cell: ({ cell }) => (
        <Select
          value={cell.getValue<string>()}
          onChange={(e) => {
            const newValue = e.target.value;
            setProducts((prev) =>
              prev.map((product) =>
                product.srno === cell.row.original.srno
                  ? { ...product, status: newValue }
                  : product
              )
            );
          }}
          sx={{ width: 120 }}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      accessorKey: "actions",
      header: "Action",
      size: 150,
      Cell: ({ row }) => (
        <Button
          variant="contained"
          
          onClick={() => handleApprove(row.original.srno)}
          disabled={row.original.status === "Confirmed"}
          className="!bg-cyan-600 !hover:bg-cyan-500 text-white rounded px-4 py-2"
        >
          Approve
        </Button>
      ),
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: products,
    enableExpanding: true,
    //note: performance of this example should be improved with hash maps. This is currently 0(n^2)
    //  getSubRows: (row) => data.filter((r) => r.managerId === row.id),
  });
  return <MaterialReactTable table={table} />;
};

export default AdminService;
