"use client"

import { BookOpen, Users, GraduationCap, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

type Course = {
    course_name: string;
    category: string;
    instructor: string;
    status: 'Published' | 'Draft';
}

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    joined: string;
    avatar: string;
}

export function SummaryCards() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    // Fetch data from localStorage on component mount
    useEffect(() => {
        const storedCourses = localStorage.getItem('courses');
        const storedUsers = localStorage.getItem('users');

        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
        }
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    // Calculate statistics
    const totalCourses = courses.length;
    const totalStudents = users.filter(user => user.role === 'Student').length;
    const activeInstructors = users.filter(
        user => user.role === 'Instructor' && user.status === 'Active'
    ).length;

    // Calculate percentage changes (mock data - replace with actual historical data)
    const coursesChange = 12.5; // positive change
    const studentsChange = -2.3; // negative change
    const instructorsChange = 8.7; // positive change

    const summaryData = [
        {
            title: "Total Courses",
            value: totalCourses,
            icon: BookOpen,
            change: coursesChange,
            changeLabel: "from last month",
            iconColor: "text-blue-600",
            iconBgColor: "bg-blue-100",
        },
        {
            title: "Total Students",
            value: totalStudents,
            icon: GraduationCap,
            change: studentsChange,
            changeLabel: "from last month",
            iconColor: "text-green-600",
            iconBgColor: "bg-green-100",
        },
        {
            title: "Active Instructors",
            value: activeInstructors,
            icon: Users,
            change: instructorsChange,
            changeLabel: "from last month",
            iconColor: "text-purple-600",
            iconBgColor: "bg-purple-100",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {summaryData.map((item, index) => {
                const Icon = item.icon;
                const isPositive = item.change > 0;
                const TrendIcon = isPositive ? TrendingUp : TrendingDown;

                return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {item.title}
                            </CardTitle>
                            <div className={`${item.iconBgColor} p-2 rounded-lg`}>
                                <Icon className={`h-4 w-4 ${item.iconColor}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {item.value.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                                <TrendIcon
                                    className={`h-4 w-4 ${isPositive ? 'text-green-600' : 'text-red-600'
                                        }`}
                                />
                                <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {isPositive ? '+' : ''}{item.change}%
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    {item.changeLabel}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}