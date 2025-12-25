import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
