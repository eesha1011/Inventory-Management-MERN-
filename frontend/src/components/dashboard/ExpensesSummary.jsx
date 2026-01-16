import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
 
const data = [
  { name: "Office Expenses", value: 180 },
  { name: "Professional Expenses", value: 140 },
  { name: "Salary Expenses", value: 81 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

const ExpenseSummary = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition h-[300px] relative">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Expense Summary</h3>

      <div className="flex items-center justify-between">
        
        <div className="relative w-[180px] h-[180px]">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                    <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value">
                    {data.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* <p className="text-sm text-gray-400">Average</p> */}
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">$401</p>
            </div>
        </div>

        <div className="space-y-3 text-xs">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
              <span className="text-gray-600 dark:text-gray-100">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Average: <span className="font-semibold text-gray-800">$401.00</span>
      </div>
    </div>
  )
}

export default ExpenseSummary;