// import React, { useState } from 'react';


const Userspage = () => {
    const allUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Subscriber' },
        // เพิ่มผู้ใช้ตามที่ต้องการ
    ];

    // const [searchTerm, setSearchTerm] = useState('');
    // const [users, setUsers] = useState(allUsers);

    // const handleSearch = (event) => {
    //     const term = event.target.value.toLowerCase();
    //     setSearchTerm(term);
    //     setUsers(
    //         allUsers.filter(
    //             user =>
    //                 user.name.toLowerCase().includes(term) ||
    //                 user.email.toLowerCase().includes(term) ||
    //                 user.role.toLowerCase().includes(term)
    //         )
    //     );
    // };
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-left text-gray-600">
                            <th className="py-3 px-4 border-b">ID</th>
                            <th className="py-3 px-4 border-b">Name</th>
                            <th className="py-3 px-4 border-b">Email</th>
                            <th className="py-3 px-4 border-b">Role</th>
                            <th className="py-3 px-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.length > 0 ? (
                            allUsers.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{user.id}</td>
                                    <td className="py-2 px-4 border-b">{user.name}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.role}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <button
                                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="ml-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Userspage