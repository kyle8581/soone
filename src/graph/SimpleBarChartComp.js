import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function SimpleBarChartComp(props) {
    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <BarChart data={props.data}>
                <XAxis dataKey="day"/>
                <YAxis type="number" width={40}/>
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SimpleBarChartComp;