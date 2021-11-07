import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

function SimpleAreaChartComp(props) {
    return (
        <ResponsiveContainer width="90%" aspect={2}>
            <AreaChart data={props.data}>
                <XAxis dataKey="day" tick={false} height={0}/>
                <YAxis width={30}/>
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default SimpleAreaChartComp;