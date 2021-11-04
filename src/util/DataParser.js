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
    // const daily = require(`../data/${id}/meal/daily.json`);
    // const summary = require(`../data/${id}/meal/monthly.json`);
    // const outlier = require(`../data/${id}/meal/outlier.json`);
    // const all = require(`../data/all_user/meal/all_user_average.json`);

    return {  };
}
export function getToiletData(id) {
    // const daily = require(`../data/${id}/toilet/daily.json`);
    // const summary = require(`../data/${id}/toilet/monthly.json`);
    // const outlier = require(`../data/${id}/toilet/outlier.json`);
    // const all = require(`../data/all_user/toilet/all_user_average.json`);

    return {  };
}
export function getExerciseData(id) {
    // const daily = require(`../data/${id}/exercise/daily.json`);
    // const summary = require(`../data/${id}/exercise/monthly.json`);
    // const outlier = require(`../data/${id}/exercise/outlier.json`);
    // const all = require(`../data/all_user/exercise/all_user_average.json`);

    return {  };
}
export function getMedicineData(id) {
    // const daily = require(`../data/${id}/medicine/daily.json`);
    // const summary = require(`../data/${id}/medicine/monthly.json`);
    // const outlier = require(`../data/${id}/medicine/outlier.json`);
    // const all = require(`../data/all_user/medicine/all_user_average.json`);

    return { };
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
    const data = [0, 7, 11]; // Temp

    return convertArray(data);
}

// 순위
export function getRankData(id) {
    const data = require(`../default/extra/rank.json`); // Temp

    return data;
}