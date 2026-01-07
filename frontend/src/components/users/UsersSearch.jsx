const UsersSearch = ({search, setSearch}) => {
    return (
        <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded px-3 py-1 w-64 focus:outline-none focus:ring"/>
    )
}

export default UsersSearch;