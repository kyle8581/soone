import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartComp(props) {
    return (
        <ResponsiveContainer width="90%" aspect={0.9}>
            <RadarChart outerRadius="80%" data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="habit" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="전체" dataKey="all" fill="#000000" fillOpacity={0.2} />
                <Radar name="나" dataKey="me" fill="#4c9be0" fillOpacity={0.7}/>
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChartComp;