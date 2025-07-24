"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { BookOpen, Users, Circle } from "lucide-react"

type Course = {
    id: string;
    course_name: string;
    instructor: string;
    enrolled_students: number;
    status: 'Published' | 'Draft';
    created_at: string;
}


export function LatestCoursesTable() {

    const [courses, setCourses] = useState<Course[]>([]);
    // getting latest courses from localStorage for persistence
    useEffect(() => {
        const storedCourses = localStorage.getItem('latestCourses');
        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
        }
    }, []);


    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle>Latest Courses</CardTitle>
                <CardDescription>Recently added courses in the platform</CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6">
                {/* Desktop Table View - Hidden on mobile */}
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-4 font-medium text-muted-foreground">Course Title</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Instructor</th>
                                <th className="text-center p-4 font-medium text-muted-foreground">Enrolled Students</th>
                                <th className="text-right p-4 font-medium text-muted-foreground">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-b hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                                >
                                    <td className="p-4">
                                        <div className="font-medium hover:text-primary transition-colors duration-200">
                                            {course.course_name}
                                        </div>
                                    </td>
                                    <td className="p-4">{course.instructor}</td>
                                    <td className="p-4 text-center">
                                        <span className="font-semibold">{course.enrolled_students}</span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105 ${course.status === 'Published'
                                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                            }`}>
                                            {course.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View - Visible only on mobile */}
                <div className="sm:hidden space-y-4 p-4">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="border rounded-lg p-4 hover:bg-muted/50 transition-all duration-200 cursor-pointer hover:shadow-md"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-base flex-1 pr-2">
                                    {course.course_name}
                                </h3>
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${course.status === 'Published'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    <Circle className={`w-2 h-2 mr-1 fill-current ${course.status === 'Published' ? 'text-green-600' : 'text-gray-600'
                                        }`} />
                                    {course.status}
                                </span>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    <span>{course.instructor}</span>
                                </div>

                                <div className="flex items-center text-muted-foreground">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span className="font-medium">{course.enrolled_students} students enrolled</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}