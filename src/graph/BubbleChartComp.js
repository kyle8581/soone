import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, ResponsiveContainer } from 'recharts';

function BubbleChartComp(props) {
    return (
        <ResponsiveContainer width="100%" height={10}>
            <ScatterChart>
                <XAxis type="category" dataKey="day" height={0} tick={false} tickLine={false} axisLine={false}/>
                <YAxis dataKey="index" name="수면 시간" width={0} tick={false} tickLine={false} axisLine={false}/>
                <ZAxis dataKey="length" range={[0, 15]} allowDataOverflow={true}/>
                <Scatter data={props.data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
}

export default BubbleChartComp;