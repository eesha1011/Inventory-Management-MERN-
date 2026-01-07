import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {

    const {search, setSearch} = useContext(SearchContext);
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
            {/*Global Search (for users, products, etc.) */}
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded px-3 py-1 w-64 focus:outline-none focus:ring" />

            {/* Right side */}
            <div className="flex items-center gap-4">
        
                {/* Theme Toggle */}
                <button onClick={() => {toggleTheme();}} className="px-3 py-1 text-sm rounded bg-gray-200 cursor-pointer dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (<Moon className="w-5 h-5 text-gray-800" />)}
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Admin
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">A</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;