import React from 'react'
type Props = {
    users: any[];
}
function UserTable({ users }: Props) {
    return (
        <table className="w-full">
            <thead className="bg-gray-50 text-gray-800 dark:bg-gray-800  dark:text-gray-100 border-b border-gray-200 sticky top-0">
                <tr>
                    <th className="text-left py-3 px-6 font-medium">Name</th>
                    <th className="text-left py-3 px-6 font-medium">Email</th>
                    <th className="text-left py-3 px-6 font-medium">Role</th>
                    <th className="text-left py-3 px-6 font-medium">Status</th>
                    <th className="text-left py-3 px-6 font-medium">Joined</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 dark:hover:bg-gray-50 dark:hover:text-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-200">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg">
                                    {user.role === 'Student' ? '👩🏻‍⚕️' : '👨🏻‍🏫'}
                                </div>
                                <span className="font-medium">{user.name}</span>
                            </div>
                        </td>
                        <td className="py-4 px-6">{user.email}</td>
                        <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${user.role === 'Instructor'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                                }`}>
                                {user.role}
                            </span>
                        </td>
                        <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${user.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-800 text-red-100'
                                }`}>
                                {user.status}
                            </span>
                        </td>
                        <td className="py-4 px-6">{user.joined}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable