export const getMaxActivity = (data) => {
    const activities = [
        { type: '미디어', percent: data[1].media },
        { type: '운동', percent: data[1].workout },
        { type: '힐링', percent: data[1].healing },
        { type: '공부', percent: data[1].study },
        { type: '참여', percent: data[1].part },
        { type: '외출', percent: data[1].out },
    ];
    activities.sort(function(a, b) { return b.percent - a.percent });
    
    return activities[0];
};