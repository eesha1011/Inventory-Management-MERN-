import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import api from "../../services/api";

// const data = [
//   { name: "Electronics", value: 40 },
//   { name: "Fashion", value: 30 },
//   { name: "Books", value: 20 },
// ];

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

const CategoryPie = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategoryPie = async () => {
      try {
        const response = await api.get("/dashboard/category-pie");
        setData(response.data);
      } catch (error) {
        console.error("Category pie error 👉", error);
      }
    }

    fetchCategoryPie()
    
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Products by Category</h3>

      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
                {data.map(( _, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CategoryPie;