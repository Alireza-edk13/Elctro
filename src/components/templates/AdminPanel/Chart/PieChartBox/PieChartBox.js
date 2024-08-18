"use client";
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "هدفون",
        "ماه قبل": 4000,
        "همین ماه": 2400,
        amt: 2400,
    },
    {
        name: "لب تاپ",
        "ماه قبل": 3000,
        "همین ماه": 1398,
        amt: 2210,
    },
    {
        name: "موبایل",
        "ماه قبل": 2000,
        "همین ماه": 5800,
        amt: 2290,
    },
    {
        name: "لوازم جانبی",
        "ماه قبل": 2780,
        "همین ماه": 3908,
        amt: 2000,
    },
];

export default function PieChartBox() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={500}
                data={data}
            >
                <Bar  dataKey="همین ماه" fill="#7B1FA2"/>
                <Bar  dataKey="ماه قبل" fill="#272729" />

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip  cursor={{ fill:'#7B1FA2'}} />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    )
}
