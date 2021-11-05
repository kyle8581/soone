import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function TimeBarChartComp(props) {
    const formatYAxis = (value) => {
        if (value === 24) return "0시";
        if (value === 25) return "1시";
        if (value === 26) return "2시";
        if (value === 27) return "3시";
        if (value === 28) return "4시";
        if (value === 29) return "5시";
        if (value === 30) return "6시";
        if (value === 31) return "7시";
        if (value === 32) return "8시";
        if (value === 33) return "9시";
        if (value === 34) return "10시";
        return value + "시";
    }
    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <BarChart data={props.data}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis type="number" tickCount={16} width={40} tickLine={false} axisLine={false} domain={[19, 34]} tickFormatter={formatYAxis} allowDataOverflow={true} reversed/>
                <Tooltip />
                <Bar dataKey="start" stackId="time" fill="#8884d800" />
                <Bar dataKey="length" stackId="time" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TimeBarChartComp;