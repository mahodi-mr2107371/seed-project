import React from 'react'
type User = {
    id: number;
    role: String
    name: string;
    email: string;
}

const Users = () => {
    // Sample user data
    const users: User[] = [
        { id: 1, name: 'John Doe', role: "Student", email: 'example@gmail.com' },
        { id: 2, name: 'Jane Smith', role: "Instructor", email: 'example@gmail.com' },
        { id: 3, name: 'Alice Johnson', role: "Student", email: 'example@gmail.com' },
        { id: 4, name: 'Bob Brown', role: "Student", email: 'example@gmail.com' },
    ];

    return (
        <div>
            {/* Page Title and add members section */}
            <div className='flex w-full justify-between items-center p-2'>
                <h1 className="text-2xl font-bold">Users</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add User
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users;

// Users
{/* {users.map((user) => {
                return (
                    <div key={user.id} className="p-4 border-b border-gray-200 dark:border-gray-600">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user.role}</p>
                    </div>
                )
            })} */}