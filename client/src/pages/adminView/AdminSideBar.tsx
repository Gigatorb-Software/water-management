import { FaTachometerAlt, FaBoxOpen, FaCheckCircle, FaChartPie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    id: "products",
    label: "Add Product",
    path: "/admin/addproduct",
    icon: <FaBoxOpen />,
  },
  // {
  //   id: "orders",
  //   label: "Orders",
  //   // path: "/admin/orders",
  //   icon: <FaCheckCircle />,
  // },
  {
    id: "services",
    label: "Services",
     path: "/admin/services",
    icon: <SupportAgentIcon />,
  },
  {
    id: "addTech",
    label: "Add Technician",
    path: "/admin/addTech",
    icon: <FaCheckCircle />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex flex-col gap-4">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            if (setOpen) setOpen(false); // Close sidebar on menu item click
          }}
          className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  // Close sidebar if clicking outside of it
  const handleBackdropClick = (e) => {
    if (e.target.id === "backdrop") {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sidebar with Backdrop */}
      {open && (
        <div
          id="backdrop"
          className="fixed inset-0 z-30 lg:hidden bg-black bg-opacity-50"
          onClick={handleBackdropClick} // Close on backdrop click
        >
          <aside className="fixed left-0 top-0 h-full w-64 bg-white p-6 shadow-lg z-40">
            {/* Close button */}
            {/* <button
              onClick={() => setOpen(false)} // Close sidebar on button click
              className="text-gray-700 hover:text-gray-900 mb-4"
            >
              <FaTimes size={24} />
            </button> */}
            <div
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaChartPie size={30} />
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <MenuItems setOpen={setOpen} />
          </aside>
        </div>
      )}

      {/* Fixed Desktop Sidebar */}
      <aside className="hidden z-50 lg:flex fixed left-0 top-0 h-full w-64 flex-col bg-white border-r p-6">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaChartPie size={30} />
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  );
}

export default AdminSideBar;
