'use client';
import React, { useEffect, useState } from 'react';
import { Search, Plus, Home, PlayCircle, Users, Settings, User } from 'lucide-react';
import UserTable from '@/components/user-table';
import UserCard from '@/components/user-card';
import CourseTable from '@/components/course-table';
import CourseCard from '@/components/course-card';

type Course = {
    course_name: string;
    category: string;
    instuctor: string;
    status: 'Published' | 'Draft';
    date_published?: string;
}

const Courses = () => {
    const [activeTab, setActiveTab] = useState('All Courses');
    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState([] as Course[]);;

    // getting courses from localStorage for persistence
    useEffect(() => {
        const storedCourses = localStorage.getItem('courses');

        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
        }
    }, []);


    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.category.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === 'Published') {
            return matchesSearch && course.status === 'Published';
        } else if (activeTab === 'Draft') {
            return matchesSearch && course.status === 'Draft';
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
                        <h1 className="text-2xl font-bold">Courses</h1>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
                            Add Course
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 mb-4">
                        <button
                            onClick={() => setActiveTab('All Courses')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'All Courses' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-amber-700 dark:hover:text-gray-300'}`}
                        >
                            All Courses
                        </button>
                        <button
                            onClick={() => setActiveTab('Published')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'Published' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Published
                        </button>
                        <button
                            onClick={() => setActiveTab('Draft')}
                            className={`pb-2 border-b-2 font-medium ${activeTab === 'Draft' ? 'border-blue-500 text-blue-600' : 'border-transparent  hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Draft
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
                    <CourseTable courses={filteredCourses}></CourseTable>
                </div>

                {/* Card mobile view */}
                <div className="md:hidden flex-1 overflow-auto">
                    <CourseCard courses={filteredCourses}></CourseCard>
                </div>
            </div>
        </div>
    );
};

export default Courses;