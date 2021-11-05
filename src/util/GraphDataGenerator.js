import { getActivityData, getExerciseData, getMealData, getMedicineData, getSleepData, getToiletData } from "./DataParser";

// 점수
export const getScoreGraphData = (id) => {
    const sleepData = getSleepData(id);
    const mealData = getMealData(id);
    const toiletData = getToiletData(id);
    const exerciseData = getExerciseData(id);
    const medicineData = getMedicineData(id);
    const activityData = getActivityData(id);

    // 개별 점수
    const sleepScore = sleepData.summary.score;
    const mealScore = mealData.summary.score;
    const toiletScore = toiletData.summary.score;
    const exerciseScore = exerciseData.summary.score;
    const medicineScore = medicineData.summary.score;
    const activityScore = activityData.summary[0].ac_score;

    // 전체 점수
    const sleepScoreAll = sleepData.all.score;
    const mealScoreAll = mealData.all.score;
    const toiletScoreAll = toiletData.all.score;
    const exerciseScoreAll = exerciseData.all.score;
    const medicineScoreAll = medicineData.all.score;
    const activityScoreAll = activityData.all[0].ac_score;

    const scoreData = [
        { habit: '수면', me: sleepScore, all: sleepScoreAll },
        { habit: '식사', me: mealScore, all: mealScoreAll },
        { habit: '배변', me: toiletScore, all: toiletScoreAll },
        { habit: '운동', me: exerciseScore, all: exerciseScoreAll },
        { habit: '약 복용', me: medicineScore, all: medicineScoreAll },
        { habit: '활동', me: activityScore, all: activityScoreAll },
    ];

    return scoreData;
};

// 일별 그래프
export const getSleepDailyGraphData = (id, week) => {
    const sleepDailyData = getSleepData(id).daily;

    const selectedData = sleepDailyData[week];
    const graphData = selectedData.map((data, index) => {
        return { day: `${week * 7 + index + 1}일`, start: data.down, length: data.length };
    });

    return graphData;
};
export const getToiletDailyGraphData = (id, week) => {
    const toiletDailyData = getToiletData(id).daily;

    const selectedData = toiletDailyData[week];
    const graphData = selectedData.map((data, index) => {
        return { day: `${week * 7 + index + 1}일`, count: data.length };
    });

    return graphData;
};
export const getExerciseDailyGraphData = (id, week) => {
    const exerciseDailyData = getExerciseData(id).daily;

    const selectedData = exerciseDailyData[week];
    const graphData = selectedData.map((data, index) => {
        return { day: `${week * 7 + index + 1}일`, count: data.length };
    });

    return graphData;
};
export const getMedicineDailyGraphData = (id, week) => {
    const medicineDailyData = getMedicineData(id).daily;

    const selectedData = medicineDailyData[week];
    const graphData = selectedData.map((data, index) => {
        return { day: `${week * 7 + index + 1}일`, count: data.length };
    });

    return graphData;
};