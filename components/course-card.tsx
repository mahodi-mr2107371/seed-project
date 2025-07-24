import React from 'react';
import { Mail, Calendar, User, CheckCircle, XCircle, MapPin, Phone, UserSquare } from 'lucide-react';

type Course = {
    course_name: string;
    category: string;
    instuctor: string;
    status: 'Published' | 'Draft';
    date_published?: string;
}

type Props = {
    courses: Course[];
}

function CourseCard({ courses }: Props) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.course_name}
                        className=" rounded-xl shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
                    >
                        {/* Main Content */}
                        <div className="pt-8 pb-6 px-6 text-center">
                            {/* Name and Role */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {course.course_name}
                            </h3>
                            <div className="flex justify-center mb-4">
                                {course.category}
                            </div>

                            {/* Status */}
                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                                    <UserSquare className="w-4 h-4 mr-2 text-gray-400" />
                                    <span className="truncate">{course.instuctor}</span>
                                </div>
                            </div>



                            {/* Status Badge */}
                            <div className="flex justify-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${course.status === 'Published'
                                    ? 'bg-green-100 text-green-800 '
                                    : 'bg-red-500 text-gray-100'
                                    }`}>
                                    {course.status}
                                </span>
                            </div>
                        </div>
                        {/* <div className="flex justify-center mb-4">
                            created at: {course.date_published}
                        </div> */}

                        {/* Action Buttons */}
                        <div className="px-6 pb-6">
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    Edit
                                </button>
                                <button className="flex-1 bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    Delete
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {courses.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                    <User className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
            )}
        </div>
    );
}

export default CourseCard;