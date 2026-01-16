const Table = ({columns, data, renderActions}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    <tr>
                        {columns.map(col => (
                            <th className="px-4 py-3 text-left">
                                {col.label}
                            </th>
                        ))}
                        {renderActions && (
                            <th className="px-4 py-3 text-left">Actions</th>
                        )}
                    </tr>
                </thead>

                <tbody>
                    {data.map(item => (
                        <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 transition">
                            {columns.map(col => (
                                <td key={col.key} className="px-4 py-3">{item[col.key]}</td>
                            ))}
                            {renderActions && (
                                <td className="px-4 py-3 space-x-2">{renderActions(item)}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;