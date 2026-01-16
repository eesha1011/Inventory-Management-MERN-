const MiniStatCard = ({
    title,
    leftLabel,
    leftValue,
    leftChange,
    rightLabel,
    rightValue,
    rightChange,
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow h-[150px]">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <span className="text-xs text-gray-400">22-29 Oct 2023</span>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">{leftLabel}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{leftValue}</p>
                    <p className={`text-xs ${leftChange.includes("+") ? "text-green-500" : "text-red-500"}`}>{leftChange}</p>
                </div>

                <div className="text-right">
                    <p className="text-sm text-gray-500">{rightLabel}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{rightValue}</p>
                    <p className={`text-xs ${rightChange.includes("+") ? "text-green-500" : "text-red-500"}`}>{rightChange}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniStatCard;