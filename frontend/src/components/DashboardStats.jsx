const stats = [
    {title: "Products", value: 12},
    {title: "Revenue", value: "₹45,000"},
    {title: "Orders", value: 28},
    {title: "Customers", value: 16},
];

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">{stat.value}</h3>
                </div>
            ))}
        </div>
    )
}

export default DashboardStats;