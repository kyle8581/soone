import { Treemap, ResponsiveContainer } from 'recharts';

function TreeMapChartComp(props) {
    return (
        <ResponsiveContainer width="100%" height={50}>
            <Treemap data={props.data} dataKey="percent" stroke="#fff" fill="#8884d8"/>
        </ResponsiveContainer>
    )
}

export default TreeMapChartComp;