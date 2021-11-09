import { getActivityData, getExerciseData, getMealData, getMedicineData, getSleepData, getToiletData } from "./DataParser";

// 점수 그래프
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

// 분석 그래프
export const getSleepLengthGraphData = (id) => {
    const sleepDailyData = getSleepData(id).daily;

    var graphData = [];
    for (const week of sleepDailyData) {
        for (const day of week) {
            graphData.push({ day: graphData.length + 1, index: 1, value: day.length });
        }
    }

    return graphData;
};
export const getToiletTimeGraphData = (id) => {
    const toiletSummaryData = getToiletData(id).summary;

    const graphData = [
        { name: `${toiletSummaryData.top_5[0]}시`, percent: 10 },
        { name: `${toiletSummaryData.top_5[1]}시`, percent: 9 },
        { name: `${toiletSummaryData.top_5[2]}시`, percent: 8 },
        { name: `${toiletSummaryData.top_5[3]}시`, percent: 7 },
        { name: `${toiletSummaryData.top_5[4]}시`, percent: 6 },
    ];

    return graphData;
};
export const getExerciseTimeGraphData = (id) => {
    const exerciseSummaryData = getExerciseData(id).summary;

    const graphData = [
        { name: `${exerciseSummaryData.top_3[0]}시`, percent: 3 },
        { name: `${exerciseSummaryData.top_3[1]}시`, percent: 2 },
        { name: `${exerciseSummaryData.top_3[2]}시`, percent: 1 },
    ];

    return graphData;
};
export const getMedicineTimeGraphData = (id) => {
    const medicineSummaryData = getMedicineData(id).summary;

    const graphData = [
        { name: `${medicineSummaryData.top_3[0]}시`, percent: 3 },
        { name: `${medicineSummaryData.top_3[1]}시`, percent: 2 },
        { name: `${medicineSummaryData.top_3[2]}시`, percent: 1 },
    ];

    return graphData;
};
export const getActivityPercentageGraphData = (id) => {
    const activityData = getActivityData(id);
    const activityPercentData = activityData.summary[1];
    const activityPercentDataAll = activityData.all[1];

    const graphData = [
        { habit: '미디어', me: activityPercentData.media, all: activityPercentDataAll.media },
        { habit: '운동', me: activityPercentData.workout, all: activityPercentDataAll.workout },
        { habit: '힐링', me: activityPercentData.healing, all: activityPercentDataAll.healing },
        { habit: '공부', me: activityPercentData.study, all: activityPercentDataAll.study },
        { habit: '참여', me: activityPercentData.part, all: activityPercentDataAll.part },
        { habit: '외출', me: activityPercentData.out, all: activityPercentDataAll.out },
    ];

    return graphData;
};

// 일별 그래프
export const getSleepDailyGraphData = (id, week) => {
    const sleepDailyData = getSleepData(id).daily;

    const selectedData = sleepDailyData[week];
    const graphData = selectedData.map((data, index) => {
        return { day: `${week * 7 + index + 1}일`, start: data.down >= 19 ? data.down : data.down + 24, length: data.length };
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

// 순이 활동
export const getSonneActivityGraphData = (id) => {
    const sooneActivityData = getActivityData(id).sooneSummary;

    const graphData = [
        { name: '힐링 프로그램', value: sooneActivityData.soone_healing },
        { name: '미디어 프로그램', value: sooneActivityData.soone_media },
        { name: '운동 프로그램', value: sooneActivityData.soone_workout },
    ];

    return graphData;
};