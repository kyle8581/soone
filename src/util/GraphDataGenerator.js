import { getActivityData, getSleepData } from "./DataParser";

export const getScoreGraphData = (id) => {
    // 개별 데이터
    const sleepScore = getSleepData(id).summary.score;
    const mealScore = 88;  // Temp
    const toiletScore = 60;  // Temp
    const exerciseScore = 95;  // Temp
    const medicineScore = 38;  // Temp
    const activityScore = getActivityData(id).summary[0].ac_score;

    // 전체 데이터
    const sleepScoreAll = getSleepData(id).all.score;
    const mealScoreAll = 78;  // Temp
    const toiletScoreAll = 55;  // Temp
    const exerciseScoreAll = 40;  // Temp
    const medicineScoreAll = 62;  // Temp
    const activityScoreAll = getActivityData(id).all[0].ac_score;

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