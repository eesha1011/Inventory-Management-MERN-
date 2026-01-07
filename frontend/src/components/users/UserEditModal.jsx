import { useEffect, useState } from "react";

const UserEditModal = ({initialData, onSave, onClose}) => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "User",
        // status: "Active",
    });

    useEffect(() => {
        if(initialData) {
            setForm(initialData);
        }
    }, [initialData]);

    // const handleChange = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value});
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);

        // if(initialData) {
        //     onUpdate(form);
        // } else {
        //     onAdd({...form, id:Date.now()});
        // }
    }

    // if(!form) return null;

    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    {initialData ? "Edit User" : "Add User"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" required />
                    <input type="email" name="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" required />

                    <select name="role" value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded" >
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                    <div className="flex justify-end gap-3 text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded cursor-pointer">Cancel</button>

                        <button type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white rounded cursor-pointer">
                            {initialData ? "Save" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserEditModal;