import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

function SimplePieChartComp(props) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart>
                <Pie dataKey="value" data={props.data} innerRadius={40} outerRadius={80} fill="#82ca9d">
                    {props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default SimplePieChartComp;