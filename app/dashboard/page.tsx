import { CourseStatusRadialChart } from '@/components/course-chart';
import { SummaryCards } from '@/components/summary-cards';
import { UsersChart } from '@/components/users-chart';
import { LatestCoursesTable } from '@/components/latest-courses-table';
import { NewSignupsCard } from '@/components/new-signups-card';
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex flex-col w-full h-screen overflow-auto pb-5'>
            {/* Header */}
            <header className="px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className='flex-1'>
                <div className='max-w-7xl mx-auto p-6 space-y-8'>
                    {/* Summary Cards Section */}
                    <section>
                        <SummaryCards />
                    </section>

                    {/* Analytics Section */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold">Analytics Overview</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {/* Charts take 2 columns */}
                            <div className='grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-6'>
                                <CourseStatusRadialChart />
                                <UsersChart />
                            </div>

                            {/* New Signups Card takes 1 column */}
                            <div className='md:col-span-1'>
                                <NewSignupsCard />
                            </div>
                        </div>
                    </section>

                    {/* Latest Courses Section */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold">Recent Activity</h2>
                        <LatestCoursesTable />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;