import { useEffect, useState } from "react"
import EmptyState from "../components/EmptyState"
import PageHeader from "../components/PageHeader"
import DashboardLayout from "../layouts/DashboardLayout"
import api from "../services/api"

const Inventory = () => {

    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products", error);
                
            }
        }

        fetchProducts();
    }, []);

    const toggleCheckbox = (_id) => {
        setSelected((prev) => prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]);
    };

    return (
        <DashboardLayout>
            <PageHeader title={"Inventory"}/>

            <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
                {products.length === 0 ? (
                    <EmptyState title={"Inventory Module"} description={"No products found."}/>
                ) : (
                    <ul className="space-y-3">
                        {products.map((product) => (
                            <li key={product._id} className="flex items-center gap-3 border p-3 rounded-lg dark:border-gray-700">
                                <input type="checkbox" checked={selected.includes(product._id)} onChange={() => toggleCheckbox(product._id)} className="w-4 h-4" />

                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-gray-100">{product.name}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">{product.category}  • {product.stock}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </DashboardLayout>
    )
}

export default Inventory;