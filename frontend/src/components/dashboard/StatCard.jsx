const StatCard = ({title, value}) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {title}
            </p>
            <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                {value}
            </h3>
        </div>
    )
}

export default StatCard;