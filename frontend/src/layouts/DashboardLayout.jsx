import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const linkClass = "block px-4 py-2 rounded hover:bg-gray-800 transition dark:hover:bg-gray-700";

const DashboardLayout = ({children}) => {
    return(
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <aside className="w-64 bg-gray-900 dark:bg-gray-900 text-white p-4">
                <h1 className="text-xl font-bold mb-1">Inventory</h1>

                <nav className="space-y-2 ">
                    <NavLink to={"/"} end className={({isActive}) => `${linkClass} ${isActive ? "bg-gray-800 dark:bg-gray-700 text-green-400" : ""}`}>Dashboard</NavLink>
                    <NavLink to={"/products"} end className={({isActive}) => `${linkClass} ${isActive ? "bg-gray-800 dark:bg-gray-700 text-green-400" : ""}`}>Products</NavLink>
                    <NavLink to={"/users"} end className={({isActive}) => `${linkClass} ${isActive ? "bg-gray-800 dark:bg-gray-700 text-green-400" : ""}`}>Users</NavLink>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <Navbar/>
                <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 ">
                    {children}
                </main>
            </div>

        </div>
    );
};

export default DashboardLayout;