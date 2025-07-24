'use client';
import React, { useEffect } from 'react'
import { users } from '@/data/users';
import { courses } from '@/data/courses';
import { latestCourses } from '@/data/latest-courses';

export default function DataFetch() {
    // Users fetching logic
    users
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        console.log(localStorage.getItem('users'));
    }, [users]);
    // Course fetching logic
    courses
    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
        console.log(localStorage.getItem('courses'));

    }, [courses]);
    // Course fetching logic
    latestCourses
    useEffect(() => {
        localStorage.setItem('latestCourses', JSON.stringify(latestCourses));
        // console.log(latestCourses);
        console.log(localStorage.getItem('latestCourses'));


    }, [latestCourses]);

    return (
        <div className='hidden'>
            {/* This component is used to fetch and store data in localStorage */}
        </div>)
}
