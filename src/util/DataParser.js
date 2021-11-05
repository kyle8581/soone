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
    const daily = require(`../data/${id}/meal/daily.json`);
    const summary = require(`../data/${id}/meal/monthly.json`);
    const outlier = require(`../data/${id}/meal/outlier.json`);
    const all = require(`../data/all_user/meal/all_user_average.json`);

    return { daily, summary, outlier, all };
}
export function getToiletData(id) {
    const daily = require(`../data/${id}/toilet/daily.json`);
    const summary = require(`../data/${id}/toilet/monthly.json`);
    const outlier = require(`../data/${id}/toilet/outlier.json`);
    const all = require(`../data/all_user/toilet/all_user.json`);

    return { daily, summary, outlier, all };
}
export function getExerciseData(id) {
    const daily = require(`../data/${id}/workout/daily.json`);
    const summary = require(`../data/${id}/workout/monthly.json`);
    const outlier = require(`../data/${id}/workout/outlier.json`);
    const all = require(`../data/all_user/workout/all_user.json`);

    return { daily, summary, outlier, all };
}
export function getMedicineData(id) {
    const daily = require(`../data/${id}/pill/daily.json`);
    const summary = require(`../data/${id}/pill/monthly.json`);
    const outlier = require(`../data/${id}/pill/outlier.json`);
    const all = require(`../data/all_user/pill/all_user.json`);

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
    const data = require(`../data/${id}/title/title.json`);

    return convertArray(data);
}

// 순위
export function getRankData(id) {
    const data = require(`../data/all_user/ranking/ranking.json`);

    return data;
}