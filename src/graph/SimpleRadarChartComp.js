import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function SimpleRadarChartComp(props) {
    return (
        <ResponsiveContainer width="90%" aspect={1}>
            <RadarChart outerRadius="80%" data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="비율" dataKey="percent" fill="#4c9be0" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default SimpleRadarChartComp;