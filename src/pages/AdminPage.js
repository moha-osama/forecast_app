import { json } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Admin from "../component/admin/Admin";

const AdminPage = () => {
  const { currUser } = useAuth();
  if (!currUser) {
    throw json({ status: 200 });
  } else {
    return <Admin />;
  }
};

export default AdminPage;
