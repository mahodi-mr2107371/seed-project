"use client"

import { UserPlus, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

type WeeklySignup = {
    day: string;
    count: number;
    isToday?: boolean; // Added this property to the type
}

// Generate dummy signup data for the week
const generateWeeklySignups = (): WeeklySignup[] => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date().getDay();

    return days.map((day, index) => ({
        day,
        count: Math.floor(Math.random() * 20) + 5,
        isToday: index === (today === 0 ? 6 : today - 1)
    }));
};

export function NewSignupsCard() {
    const [weeklySignups, setWeeklySignups] = useState<WeeklySignup[]>([]);
    const [totalSignups, setTotalSignups] = useState(0);
    const [percentageChange, setPercentageChange] = useState(0);

    useEffect(() => {
        const signups = generateWeeklySignups();
        setWeeklySignups(signups);

        const total = signups.reduce((acc, day) => acc + day.count, 0);
        setTotalSignups(total);

        // Mock percentage change
        setPercentageChange(23.5);
    }, []);

    const maxCount = Math.max(...weeklySignups.map(d => d.count), 1); // Added fallback to prevent division by zero

    return (
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                    New Signups This Week
                </CardTitle>
                <div className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                    <UserPlus className="h-4 w-4 text-blue-600" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold mb-2">
                    {totalSignups}
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">+{percentageChange}%</span>
                    <span className="text-muted-foreground">from last week</span>
                </div>

                {/* Mini bar chart */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Daily signups</span>
                        <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            avg: {Math.round(totalSignups / 7)}/day
                        </span>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                        {weeklySignups.map((day, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full flex flex-col items-center relative group">
                                    {/* Tooltip */}
                                    <div className="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                        {day.count} signups
                                    </div>
                                    <div
                                        className={`w-full rounded-t transition-all duration-300 hover:opacity-80 ${day.isToday ? 'bg-blue-500' : 'bg-gray-300'
                                            }`}
                                        style={{
                                            height: `${(day.count / maxCount) * 100}%`,
                                            minHeight: '4px'
                                        }}
                                    />
                                </div>
                                <span className={`text-xs ${day.isToday ? 'font-semibold' : 'text-muted-foreground'}`}>
                                    {day.day}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}