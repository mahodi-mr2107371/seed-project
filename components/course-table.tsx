import { Edit, Trash } from 'lucide-react';
import React from 'react'

type Course = {
    course_name: string;
    category: string;
    instuctor: string;
    status: 'All Courses' | 'Published' | 'Draft';
}

type Props = {
    courses: Course[];
}

function CourseTable({ courses }: Props) {
    return (
        <div className="w-full overflow-auto">
            <table className="w-full">
                <thead className="bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100 border-b border-gray-200 sticky top-0">
                    <tr>
                        <th className="text-left py-3 px-6 font-medium">Course Name</th>
                        <th className="text-left py-3 px-6 font-medium">Category</th>
                        <th className="text-left py-3 px-6 font-medium">Instructor</th>
                        <th className="text-left py-3 px-6 font-medium">Status</th>
                        <th className="text-left py-3 px-6 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                    {courses.map((course, index) => (
                        <tr
                            key={`${course.course_name}-${index}`}
                            className="border-b border-gray-100 dark:hover:bg-gray-50 dark:hover:text-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-200"
                        >
                            <td className="py-4 px-6 font-medium">{course.course_name}</td>
                            <td className="py-4 px-6">{course.category}</td>
                            <td className="py-4 px-6">{course.instuctor}</td>
                            <td className="py-4 px-6">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${course.status === 'Published'
                                    ? 'bg-green-100 text-green-800'
                                    : course.status === 'Draft'
                                        ? 'bg-orange-100 text-orange-800'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    {course.status}
                                </span>
                            </td>
                            <td className="py-4 px-6">
                                <div className='flex gap-2'>
                                    <button
                                        className="p-1 hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-100 rounded transition-colors duration-200"
                                        title="Edit course"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        className="p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors duration-200 text-red-600 dark:text-red-400"
                                        title="Delete course"
                                    >
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseTable;