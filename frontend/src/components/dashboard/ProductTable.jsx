const ProductTable = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mt-8 overflow-x-auto"> 
            <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-100">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    <tr>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Stock</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        <td className="px-4 py-3">Laptop</td>
                        <td className="px-4 py-3">Electronics</td>
                        <td className="px-4 py-3">$1200</td>
                        <td className="px-4 py-3">12</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        <td className="px-4 py-3">Shoes</td>
                        <td className="px-4 py-3">Fashion</td>
                        <td className="px-4 py-3">$80</td>
                        <td className="px-4 py-3">40</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        <td className="px-4 py-3">Phone</td>
                        <td className="px-4 py-3">Electronics</td>
                        <td className="px-4 py-3">$900</td>
                        <td className="px-4 py-3">18</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;