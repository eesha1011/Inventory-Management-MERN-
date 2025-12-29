const AddProductModal = ({onclose}) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Add Product</h3>

                <form className="space-y-4">
                    <input type="text" placeholder="Product Name" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" />
                    <input type="text" placeholder="Category" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" />
                    <input type="text" placeholder="Price" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" />
                    <input type="text" placeholder="Stock" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" />

                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={onclose} className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded cursor-pointer">Cancel</button>

                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProductModal;