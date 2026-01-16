import { Box, IndianRupee, Package, ShoppingCart, Users } from "lucide-react";



const DashboardStats = ({productsCount, usersCount}) => {

    const stats = [
        {title: "Products", value: productsCount, icon: Package, color: "bg-blue-100 text-blue-600"},
        {title: "Revenue", value: "₹45,000", icon: IndianRupee, color: "bg-green-100 text-green-600"},
        {title: "Orders", value: 28, icon: ShoppingCart, color: "bg-purple-100 text-purple-600"},
        {title: "Customers", value: usersCount, icon: Users, color: "bg-orange-100 text-orange-600"},
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.color}`}>
                            <Icon className="w-6 h-6"/>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                            <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">{stat.value}</h3>
                        </div>
                    </div>
                    
                )
            }
            )}
        </div>
    )
}

export default DashboardStats;