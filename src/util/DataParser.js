import { convertArray } from "../util/TitleConverter";

// 습관
export function getSleepData(id) {
    const daily = require(`../data/${id}/sleep/daily.json`);
    const summary = require(`../data/${id}/sleep/monthly.json`);
    const outlier = require(`../data/${id}/sleep/outlier.json`);
    const all = require(`../data/all_user/sleep/all_user_average.json`);

    return { daily, summary, outlier, all };
}
export function getMealData(id) {
    const daily = require(`../tempData/meal/daily.json`); // Temp
    const summary = require(`../tempData/meal/monthly.json`); // Temp
    const outlier = require(`../tempData/meal/outlier.json`); // Temp
    const all = require(`../tempData/meal/all_user_average.json`); // Temp

    return { daily, summary, outlier, all };
}
export function getToiletData(id) {
    const daily = require(`../tempData/toilet/daily.json`); // Temp
    const summary = require(`../tempData/toilet/monthly.json`); // Temp
    const outlier = require(`../tempData/toilet/outlier.json`); // Temp
    const all = require(`../tempData/toilet/all_user_average.json`); // Temp

    return { daily, summary, outlier, all };
}
export function getExerciseData(id) {
    const daily = require(`../tempData/exercise/daily.json`); // Temp
    const summary = require(`../tempData/exercise/monthly.json`); // Temp
    const outlier = require(`../tempData/exercise/outlier.json`); // Temp
    const all = require(`../tempData/exercise/all_user_average.json`); // Temp

    return { daily, summary, outlier, all };
}
export function getMedicineData(id) {
    const daily = require(`../tempData/medicine/daily.json`); // Temp
    const summary = require(`../tempData/medicine/monthly.json`); // Temp
    const outlier = require(`../tempData/medicine/outlier.json`); // Temp
    const all = require(`../tempData/medicine/all_user_average.json`); // Temp

    return { daily, summary, outlier, all };
}
export function getActivityData(id) {
    const daily = require(`../data/${id}/activity/daily_act.json`);
    const summary = require(`../data/${id}/activity/act.json`);
    const sooneSummary = require(`../data/${id}/activity/soone_act.json`);
    const all = require(`../data/all_user/act/summary.json`);

    return { daily, summary, sooneSummary, all };
}

// 채팅
export function getChatData(id) {
    const conversation = require(`../data/${id}/chat/conv.json`);
    const summary = require(`../data/${id}/chat/msg_score.json`);

    return { conversation, summary };
}

// 타이틀
export function getTitleData(id) {
    const data = require(`../tempData/extra/title.json`); // Temp

    return convertArray(data);
}

// 순위
export function getRankData(id) {
    const data = require(`../tempData/extra/rank.json`); // Temp

    return data;
}