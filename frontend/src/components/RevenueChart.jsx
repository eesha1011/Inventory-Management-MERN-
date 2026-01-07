import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 18000 },
    { month: "Apr", revenue: 22000 },
]

const RevenueChart = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Monthly Revenue</h3>

            <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month"/>
                        <YAxis domain={["dataMin - 2000", "dataMax + 2000"]}/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevenueChart;