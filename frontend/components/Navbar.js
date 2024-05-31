import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-xl font-bold cursor-pointer">
            E-Commerce
          </div>
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/profile">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                Profile
              </div>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                Products
              </div>
            </Link>
          </li>
          <li>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => setShowLogoutMenu(!showLogoutMenu)}
              />
              {showLogoutMenu && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <div
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
