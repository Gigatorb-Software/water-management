import {
  FaTachometerAlt,
  FaBoxOpen,
  FaCheckCircle,
  FaChartPie,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdDashboardCustomize, MdSettings } from "react-icons/md";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: "products",
    label: "Products",
    icon: <FaBoxOpen />,
    subItems: [
      { id: "addProduct", label: "Add Product", path: "/admin/addproduct" },
      { id: "productList", label: "Product List", path: "/admin/productlist" },
    ],
  },
  {
    id: "services",
    label: "Services",
    path: "/admin/services",
    icon: <SupportAgentIcon />,
  },
  {
    id: "addTech",
    label: "Technician",
    icon: <MdSettings />,
    subItems: [
      { id: "addTech", label: "Add Technician", path: "/admin/addTech" },
      { id: "techList", label: "Technician List", path: "/admin/techList" },
    ],
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [menuId]: !prevOpenSubmenus[menuId],
    }));
  };

  return (
    <nav className="mt-8 flex flex-col gap-4 font-serif">
      {adminSidebarMenuItems.map((menuItem) => (
        <div key={menuItem.id} className="flex flex-col">
          <div
            onClick={() => {
              if (menuItem.subItems) {
                toggleSubmenu(menuItem.id); // Toggle submenu for this specific item
              } else {
                navigate(menuItem.path);
                if (setOpen) setOpen(false); // Close sidebar on menu item click
              }
            }}
            className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
          >
            <span className="text-xl">{menuItem.icon}</span>
            <span>{menuItem.label}</span>
            {menuItem.subItems && (
              <span className="ml-auto">
                {openSubmenus[menuItem.id] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}
          </div>

          {/* Submenu for this specific item */}
          {menuItem.subItems && openSubmenus[menuItem.id] && (
            <div className="flex flex-col ml-8 gap-2">
              {menuItem.subItems.map((subItem) => (
                <div
                  key={subItem.id}
                  onClick={() => {
                    navigate(subItem.path);
                    if (setOpen) setOpen(false); // Close sidebar on submenu item click
                  }}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
                >
                  <span className="text-base text-gray-600">{subItem.label}</span>
                </div>
              ))}
            </div>
          )}
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
            <div
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaChartPie size={30} />
              <h1 className="text-2xl font-bold font-serif">Admin Panel</h1>
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
          <h1 className="text-2xl font-bold font-serif">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  );
}

export default AdminSideBar;
