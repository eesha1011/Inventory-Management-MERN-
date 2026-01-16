const SalesCard = ({ title, value, subText, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
        <Icon className="w-6 h-6 text-green-500" />
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {value}
        </h3>
        {subText && (
          <p className="text-xs text-gray-400 mt-1">{subText}</p>
        )}
      </div>
    </div>
  )
}

export default SalesCard;