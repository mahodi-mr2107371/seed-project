"use client"

import { TrendingUp, BookOpen } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"

export const description = "A radial chart showing course status distribution"

// Course Object type
type Course = {
    course_name: string;
    category: string;
    instructor: string;
    status: 'Published' | 'Draft';
}

type Props = {
    courses: Course[];
}

const chartConfig = {
    published: {
        label: "Published",
        color: "hsl(var(--chart-1))",
    },
    draft: {
        label: "Draft",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function CourseStatusRadialChart() {
    const [courses, setCourses] = useState<Course[]>([]);

    // Fetch from localStorage on component mount
    useEffect(() => {
        const storedCourses = localStorage.getItem('courses');
        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
        }
    }, []);
    // Calculate course statistics
    const publishedCount = courses.filter(course => course.status === 'Published').length
    const draftCount = courses.filter(course => course.status === 'Draft').length
    const totalCourses = courses.length
    const publishedPercentage = totalCourses > 0 ? ((publishedCount / totalCourses) * 100).toFixed(1) : 0

    const chartData = [{
        status: "courses",
        published: publishedCount,
        draft: draftCount
    }]


    return (
        <Card className="flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="items-center pb-0">
                <CardTitle>Course Status Overview</CardTitle>
                <CardDescription>Distribution of Published and Draft Courses</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius={80}
                        outerRadius={130}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 16}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {totalCourses}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Courses
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="published"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--theme-accent)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="draft"
                            fill="hsl(0, 84%, 60%)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    <BookOpen className="h-4 w-4" />
                    {publishedPercentage}% of courses are published
                </div>
                <div className="flex flex-col gap-1 text-muted-foreground leading-none">
                    <span>
                        <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                        Published: {publishedCount} courses</span>
                    <span>
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                        Draft: {draftCount} courses</span>
                </div>

            </CardFooter>
        </Card>
    )
}