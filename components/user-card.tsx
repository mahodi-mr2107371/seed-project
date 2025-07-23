import React from 'react';
import { Mail, Calendar, User, CheckCircle, XCircle, MapPin, Phone } from 'lucide-react';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    joined: string;
    avatar: string;
}

type Props = {
    users?: User[];
}

function UserCard({ users }: Props) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users?.map((user) => (
                    <div
                        key={user.id}
                        className=" rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group hover:scale-105"
                    >
                        {/* Header with Avatar and Status */}
                        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-20">
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="relative">
                                    <div
                                        className="w-12 h-12 flex justify-center items-center rounded-full border-4 bg-amber-50 border-white shadow-lg"
                                    >{user.role === 'Student' ? '👩🏻‍⚕️' : '👨🏻‍🏫'}</div>
                                    <div className="absolute -top-1 -right-1">
                                        {user.status === 'Active' ? (
                                            <CheckCircle className="w-4 h-4 text-green-500 bg-white rounded-full" />
                                        ) : (
                                            <XCircle className="w-4 h-4 text-red-500 bg-white rounded-full" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="pt-8 pb-6 px-6 text-center">
                            {/* Name and Role */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {user.name}
                            </h3>
                            <div className="flex justify-center mb-4">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${user.role === 'Instructor'
                                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                                    : user.role === 'Admin'
                                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                    }`}>
                                    <User className="w-3 h-3 mr-1" />
                                    {user.role}
                                </span>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                    <span className="truncate">{user.email}</span>
                                </div>

                                {/* {user.phone && (
                                    <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                        <span>{user.phone}</span>
                                    </div>
                                )}

                                {user.location && (
                                    <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                        <span>{user.location}</span>
                                    </div>
                                )} */}

                                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                    <span>Joined {user.joined}</span>
                                </div>
                            </div>

                            {/* Stats Section */}
                            {/* {(user.coursesEnrolled !== undefined || user.coursesCompleted !== undefined) && (
                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {user.coursesEnrolled !== undefined && (
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                                    {user.coursesEnrolled}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    Enrolled
                                                </div>
                                            </div>
                                        )}
                                        {user.coursesCompleted !== undefined && (
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                                    {user.coursesCompleted}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    Completed
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )} */}

                            {/* Department */}
                            {/* {user.department && (
                                <div className="mb-4">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                        {user.department}
                                    </span>
                                </div>
                            )} */}

                            {/* Status Badge */}
                            <div className="flex justify-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    }`}>
                                    {user.status}
                                </span>
                            </div>

                            {/* Last Active */}
                            {/* {user.lastActive && (
                                <div className="mt-2">
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        Last active: {user.lastActive}
                                    </span>
                                </div>
                            )} */}
                        </div>

                        {/* Action Buttons */}
                        <div className="px-6 pb-6">
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    View Profile
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {users?.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                    <User className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No users found</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
            )}
        </div>
    );
}

export default UserCard;