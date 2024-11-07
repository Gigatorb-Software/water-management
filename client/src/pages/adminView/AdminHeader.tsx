import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { LuAlignJustify } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function AdminHeader({ setOpen }: any) {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow border-b">
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden block text-gray-700 hover:text-gray-900"
      >
        <LuAlignJustify />

        <span className="sr-only">Toggle Menu</span>
      </button>
      <div className="flex-1 flex justify-end">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500  text-white rounded px-4 py-2"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
