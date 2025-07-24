'use client';
import React, { useEffect, useState } from 'react';
import { Search, Plus, Home, PlayCircle, Users, Settings, User } from 'lucide-react';
import UserTable from '@/components/user-table';
import UserCard from '@/components/user-card';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    joined: string;
    avatar: string;
}

const Members = () => {
    const [activeTab, setActiveTab] = useState('All members');
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([] as User[]);;

    // getting users from localStorage for persistence
    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        // console.log(storedUsers);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    // Active tab filtering logic
    const filteredUsers = users!.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === 'Instructors') {
            return matchesSearch && user.role === 'Instructor';
        } else if (activeTab === 'Students') {
            return matchesSearch && user.role === 'Student';
        }
        return matchesSearch;
    });

    return (
        <div className="flex p-5 h-screen ">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="border-b px-6 py-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Members</h1>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
                            Add member
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 mb-4">
                        <button
                            onClick={() => setActiveTab('All members')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'All members' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-amber-700 dark:hover:text-gray-300'}`}
                        >
                            All members
                        </button>
                        <button
                            onClick={() => setActiveTab('Instructors')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'Instructors' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Instructors
                        </button>
                        <button
                            onClick={() => setActiveTab('Students')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'Students' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Students
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute text-gray-800 dark:text-gray-100 left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search members"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border text-gray-800 dark:text-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Table Desktop View */}
                <div className="hidden md:flex md:flex-1 md:overflow-auto">
                    <UserTable users={filteredUsers}></UserTable>
                </div>

                {/* Table mobile view */}
                <div className="md:hidden flex-1 overflow-auto">
                    <UserCard users={filteredUsers}></UserCard>
                </div>
            </div>
        </div>
    );
};

export default Members;