import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", amount: 4200 },
  { day: "Tue", amount: 3800 },
  { day: "Wed", amount: 2500 },
  { day: "Thu", amount: 4600 },
  { day: "Fri", amount: 5200 },
]

const PurchaseSummary = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition h-[300px]">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Purchase Summary</h3>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        $7.88m{" "}
                        <span className="text-red-500 text-sm ml-1">-95.76%</span>
                    </h2>
                </div>
            </div>

            <ResponsiveContainer width={"100%"} height={180}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="purchaseGradient" x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4}/>
                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4}/>
                        </linearGradient>
                    </defs>

                    <XAxis dataKey={"day"} tickLine={false} axisLine={false}/>
                    <YAxis hide/>
                    <Tooltip/>

                    <Area type={"monotone"} dataKey={"amount"} dot={{r: 2}} stroke="#6366f1" fill="url(#purchaseGradient)" strokeWidth={2} animationDuration={1200}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PurchaseSummary;