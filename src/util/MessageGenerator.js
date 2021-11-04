import { getActivityData, getExerciseData, getMealData, getMedicineData, getSleepData, getToiletData } from "./DataParser";

export const generateSleepMessage = (id) => {
    const data = getSleepData(id);
    const summary = data.summary;
    const outlier = data.outlier;

    if (summary.score >= 90) return "아주 완벽한 수면 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";
    else if (summary.avg_length <= 5) return "최근 피곤하시지 않으셨나요? 충분한 숙면을 해야 내일도 활기차게 시작할 수 있어요!";
    else if (summary.avg_down > 23.5 || (summary.avg_down >= 0 && summary.avg_down < 6)) return "일찍 자고 일찍 일어나는 습관이 중요해요! 밤에는 순이와 함께 잠자리에 들어봐요 :)";
    else if (outlier.up.length > 7 || outlier.down.length > 7 || outlier.length.length > 7) return "불규칙적으로 잠을 주무시는 것 같아요 ㅠㅠ 순이와 함께 규칙적인 수면 습관을 만들어보아요!";
    else return "특별한 수면 습관이 발견되지 않았어요!";
};
export const generateMealMessage = (id) => {
    const data = getMealData(id);
    const summary = data.summary;
    const outlier = data.outlier;

    if (summary.score >= 90) return "아주 완벽한 식사 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";
    else if (summary.avg_dnr - 18 > 2) return "저녁을 너무 늦게 드시면 건강에 좋지 않아요 ㅠㅠ 저녁 6시에 순이와 함께 저녁 드실래요?";
    else if (outlier.brkfst.length > 7) return "아침을 안 드시는 습관은 좋지 않아요 ㅠㅠ 아침밥 먹고 활기차게 하루를 생활해보아요";
    else if (outlier.lnch.length > 7) return "브런치보다는 아침과 점심을 따로 드시는 건 어떤가요? 하루 세 번 냠냠!";
    else if (outlier.dnr.length > 7) return "저녁도 안 드시고 주무시려구요? 든든하게 먹고 하루의 마무리도 건강하게 지내봐요!";
    else return "특별한 식사 습관이 발견되지 않았어요!";
};
export const generateToiletMessage = (id) => {
    const data = getToiletData(id);
    const summary = data.summary;
    const outlier = data.outlier;

    if (summary.score >= 90) return "아주 완벽한 배변 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";
    else if (summary.avg_count >= 5) return "화장실에 너무 자주 가시는 것 같아요! 혹시 불편한 느낌이 드시면 병원에 가보시길 추천드려요.";
    else if (summary.avg_count <= 1) return "화장실에 너무 적게 가시는 것 같아요! 혹시 불편한 느낌이 드시면 병원에 가보시길 추천드려요.";
    else if (summary.top_5.length > 0 && summary.top_5[0] >= 0 && summary.top_5[0] < 5) return "한 밤 중에 화장실을 가는 습관은 좋지 않아요 ㅠㅠ 순이와 함께 좀 더 노력해보아요!";
    else if (summary.top_5.length > 0 && Math.abs(summary.top_5[0] - 18) < 2) return "주로 저녁 무렵 화장실을 가시네요 ㅎㅎ 규칙적인 습관, 좋아요!";
    else if (summary.top_5.length > 0 && Math.abs(summary.top_5[0] - 8) < 2) return "주로 아침 무렵 화장실을 가시네요 ㅎㅎ 규칙적인 습관, 좋아요!";
    else if (outlier.length > 10) return "불규칙적으로 화장실을 가시는 것 같아요 ㅠㅠ 순이와 함께 좀 더 노력해보아요!";
    else return "특별한 배변 습관이 발견되지 않았어요!";
};
export const generateExerciseMessage = (id) => {
    const data = getExerciseData(id);
    const summary = data.summary;
    const outlier = data.outlier;

    if (summary.score >= 90) return "아주 완벽한 운동 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";
    else if (summary.avg_count >= 5) return "운동하는 건 좋지만 너무 잦은 운동은 몸에 무리가 될 수 있어요! 지친 몸을 때론 달래주어 보아요!";
    else if (summary.avg_count >= 2) return "자주 운동하시는 모습 멋져요! 순이도 함께 운동하고 싶어지는 걸요?";
    else if (summary.avg_count < 1) return "운동이 필요해보여요! 규칙적인 운동으로 삶의 활기를 더 불고 건강하게 하루를 지내보아요!";
    else if (summary.top_3.length > 0 && summary.top_3[0] >= 0 && summary.top_3[0] < 5) return "새벽 운동! 좋은데요? 하지만 잠도 훌륭한 보약이랍니다! 시간을 조금만 늦춰보아요!";
    else if (summary.top_3.length > 0 && Math.abs(summary.top_3[0] - 18) < 2) return "주로 저녁 무렵 운동하시네요! 순이도 운동하고 싶어지네요 ㅎㅎ";
    else if (summary.top_3.length > 0 && Math.abs(summary.top_3[0] - 8) < 2) return "주로 아침 무렵 운동하시네요! 순이도 운동하고 싶어지네요 ㅎㅎ";
    else if (outlier.length > 7) return "운동도 좋지만 규칙적인 운동은 더 좋답니다 ㅎㅎ 순이와 규칙적인 운동 습관을 만들어보아요!";
    else return "특별한 운동 습관이 발견되지 않았어요!";
};
export const generateMedicineMessage = (id) => {
    const data = getMedicineData(id);
    const summary = data.summary;
    const outlier = data.outlier;

    if (summary.score >= 90) return "아주 완벽한 약 복용 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";
    else if (summary.avg_count <= 1) return "앞으로도 약 없이 건강하게 생활해보아요!";
    else if (summary.avg_count >= 5) return "약을 너무 자주 드시는 것 같아요 ㅠㅠ 일반적으로 약은 식후 30분 이내에 먹어야 된답니다!";
    else if (summary.top_3.length > 0 && summary.top_3[0] >= 0 && summary.top_3[0] < 5) return "약 복용 시간은 매우 중요해요! 한 밤 중 약을 드시는 것은 좋지 않습니다 ㅠㅠ";
    else if (outlier.length > 7) return "약은 규칙적으로 복용해야 효과가 있어요! 내일부터는 정해진 시간에 약을 복용하기로 약속해요!";
    else return "특별한 약 복용 습관이 발견되지 않았어요!";
};
export const generateActivityMessage = (id) => {
    const data = getActivityData(id);
    const summary = data.summary;

    if (summary[0].ac_score >= 90) return "아주 완벽한 활동 습관을 가지고 있어요! 앞으로도 순이가 응원할게요!";

    var topActivity = -1;
    var topActivityPercent = 0;
    
    const activities = [summary[1].healing, summary[1].media, summary[1].out, summary[1].part, summary[1].study, summary[1].workout];
    activities.forEach((percent, index) => { 
        if (percent > topActivityPercent) topActivity = index;
    });

    if (topActivity === -1) return "어떠한 활동도 안 하시는 것 같아요 ㅠㅠ 꾸준한 활동을 통해 더 보람찬 하루를 보낼 수 있지 않을까요?";
    else if (topActivity === 0) return "힐링 활동을 주로 하시네요! 순이도 힐링 활동에 동참하고 싶은걸요?";
    else if (topActivity === 1) return "TV를 자주 보시네요! 앞으로도 순이와 함께 TV 시청해주실거죠?";
    else if (topActivity === 2) return "밖으로 나가 신선한 공기를 마시며 외부 활동을 즐기시는 모습, 정말 멋져요! 대신 마스크 쓰고 다니시는 건 잊으시면 안 돼요!";
    else if (topActivity === 3) return "항상 적극적으로 참여하시는 모습에 순이는 감동 먹었어요 ㅠㅠ 순이도 참여하고 싶은걸요?";
    else if (topActivity === 4) return "무언가를 배우시려고 하는 모습 정말 멋져요! 순이도 더 공부해서 더욱 행복하게 해드릴게요!";
    else if (topActivity === 5) return "운동을 즐겨하시네요! 앞으로도 순이와 함께 건강하게 운동을 해보아요!";

    return "특별한 약 복용 습관이 발견되지 않았어요!";
};