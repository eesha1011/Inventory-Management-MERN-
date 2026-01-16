const ConfirmModal = ({title, message, onConfirm, onCancel}) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{message}</p>

                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onCancel} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;