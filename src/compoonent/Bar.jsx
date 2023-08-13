import React from 'react';
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid } from 'recharts';

const Bars = () => {

	// Sample data
	const data = [
		{ name: '20', x: 10, y: 15, z:30  },
		{ name: '', x: 20, y:25 , z:40  },
		{ name: '25', x: 30, y: 35, z:50  },
		{ name: '', x: 40, y: 45, z: 60 },
		{ name: '35', x: 50, y: 55, z: 70 },
		{ name: '', x: 60, y: 65, z: 80 },
		{ name: '40', x: 70, y: 75, z: 90 },
		{ name: '', x: 80, y: 85, z: 100 },
		{ name: '60', x: 90, y: 95, z: 110 },
        { name: '', x: 100, y: 105, z: 120 },
        { name: '65', x: 110, y: 115, z: 130 },
	];

	return (
		<BarChart width={550} height={200} data={data} margin={{ top: 20, right: 30, bottom: 10, left: 10 }} >
			<CartesianGrid />
			<XAxis dataKey="name"  axisLine='none'/>
			<YAxis />
			<Bar dataKey="x" stackId="a" fill="#283883" barSize={17} />
			<Bar dataKey="y" stackId="a" fill="#5c20c4" />
            <Bar dataKey='z' stackId='a' fill="#8ca9df" />
		</BarChart>
	);
}

export default Bars;
