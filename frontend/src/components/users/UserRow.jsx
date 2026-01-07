import UserActions from "./UserActions"

const UserRow = ({user, onEdit, onToggleStatus, onDelete}) => {
    return (
        <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 transition overflow-x-auto">
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">{user.status}</td>
            <td className="p-3">
                <UserActions user={user} onEdit={onEdit} onToggleStatus={onToggleStatus} onDelete={onDelete}/>
            </td>

            {/* <td className="p-3">
                <span className={`px-2 py-1 rounded text-sm ${user.role === "Admin" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>{user.role}</span>
            </td>
            <td className="p-3">
                <span className={`px-2 py-1 rounded text-sm ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{user.status}</span>
            </td> */}

        </tr>
    )
}

export default UserRow;