import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
// import AdminSideBar from "./sidebar";
// import AdminHeader from "./header";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
    
  return (
    <div className="flex w-full min-h-screen   ">
      {/* Admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col lg:ml-64 overflow-x-auto"> {/* lg:ml-64 to account for the fixed sidebar width */}
        {/* Admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
