const EmptyState = ({title, description, action}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
            {action && (
                <div className="mt-4">
                    {action}
                </div>
            )}
        </div>
    )
}

export default EmptyState;