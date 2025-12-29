import EmptyState from "./EmptyState";


const ProductList = () => {

    const products = [];

    if (products.length === 0) {
        return (
            <EmptyState title={"No products found"} description={"Start by adding your first product."} />
        )
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    <tr>
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Stock</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 transition">
                        <td className="px-4 py-3">Laptop</td>
                        <td className="px-4 py-3">Electronics</td>
                        <td className="px-4 py-3">$1200</td>
                        <td className="px-4 py-3">12</td>
                        <td className="px-4 py-3 space-x-2">
                            <button className="text-blue-600 dark:text-blue-400 cursor-pointer">Edit</button>
                            <button className="text-red-600 dark:text-red-400 cursor-pointer">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;