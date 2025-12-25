import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <NavLink to="/" className="text-2xl font-bold text-gray-800">
        ShopNow
      </NavLink>

      {/* Center - Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `cursor-pointer transition ${
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `cursor-pointer transition ${
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `cursor-pointer transition ${
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            Users
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <NavLink
          to="/login"
          className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
