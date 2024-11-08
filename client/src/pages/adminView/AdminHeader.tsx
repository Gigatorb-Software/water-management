import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { LuAlignJustify } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function AdminHeader({ setOpen }: any) {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
     localStorage.removeItem("token");
     navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow border-b">
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden block text-gray-700 hover:text-gray-900 font-serif"
      >
        <LuAlignJustify />

        <span className="sr-only">Toggle Menu</span>
      </button>
      <div className="flex-1 flex justify-end">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500  text-white rounded px-4 py-2 font-serif"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
