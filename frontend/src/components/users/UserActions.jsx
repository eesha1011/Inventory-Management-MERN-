const UserActions = ({user, onEdit, onToggleStatus, onDelete}) => {
    return (
        <div className=" flex gap-3">
            <button onClick={onEdit} className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">Edit</button>

            <button onClick={() => onToggleStatus(user.id)} className="text-sm text-yellow-600 dark:text-yellow-400 cursor-pointer hover:underline">{user.status === "Active" ? "Block" : "Unblock"}</button>

            <button onClick={() => onDelete(user.id)} className="text-sm text-red-600 dark:text-red-400 cursor-pointer hover:underline">Delete</button>
        </div>
    )
}

export default UserActions;