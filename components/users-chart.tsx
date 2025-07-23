"use client"

import { Users, UserCheck } from "lucide-react"
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

export const description = "A radial chart showing user status distribution"

// User Object type
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    joined: string;
    avatar: string;
}

const chartConfig = {
    active: {
        label: "Active",
        color: "hsl(142, 76%, 36%)", // Green for active users
    },
    inactive: {
        label: "Inactive",
        color: "hsl(0, 84%, 60%)", // Red for inactive users
    },
} satisfies ChartConfig

export function UsersChart() {
    const [users, setUsers] = useState<User[]>([]);

    // Fetch from localStorage on component mount
    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    // Calculate user statistics
    const activeCount = users.filter(user => user.status === 'Active').length
    const inactiveCount = users.filter(user => user.status === 'Inactive').length
    const totalUsers = users.length
    const activePercentage = totalUsers > 0 ? ((activeCount / totalUsers) * 100).toFixed(1) : 0

    const chartData = [{
        status: "users",
        active: activeCount,
        inactive: inactiveCount
    }]

    return (
        <Card className="flex flex-col hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="items-center pb-0">
                <CardTitle>User Status Overview</CardTitle>
                <CardDescription>Distribution of Active and Inactive Users</CardDescription>
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
                                                    {totalUsers}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Users
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="active"
                            stackId="a"
                            cornerRadius={5}
                            fill="hsl(142, 76%, 36%)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="inactive"
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
                    <UserCheck className="h-4 w-4" />
                    {activePercentage}% of users are active
                </div>
                <div className="flex flex-col gap-1 text-muted-foreground leading-none">
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
                        Active: {activeCount} users
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                        Inactive: {inactiveCount} users
                    </span>
                </div>
            </CardFooter>
        </Card>
    )
}