export const getMaxActivity = (data) => {
    const activities = [
        { type: '미디어', percent: data[1].media },
        { type: '운동', percent: data[1].workout },
        { type: '힐링', percent: data[1].healing },
        { type: '공부', percent: data[1].study },
        { type: '참여', percent: data[1].part },
        { type: '외출', percent: data[1].out },
    ];

    return activities.sort((a, b) => a.percent < b.percent)[0];
};