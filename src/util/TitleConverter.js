export const convertArray = (arr) => {
    return arr.map(id => idToTitle(id));
}

const idToTitle = (id) => {
    switch (id) {
        case 0:
            return ['장튼튼', '설명'];
        case 1:
            return ['건강 지킴이', '설명'];
        case 2:
            return ['으라차차 이팔청춘', '설명'];
        case 3:
            return ['밥심의 한국인', '설명'];
        case 4:
            return ['잠이 보약이다', '설명'];
        case 5:
            return ['나도 MZ 세대', '설명'];
        case 6:
            return ['나는 가수다', '설명'];
        case 7:
            return ['장원급제', '설명'];
        case 8:
            return ['건강한 마음', '설명'];
        case 9:
            return ['음유시인', '설명'];
        case 10:
            return ['국민 MC', '설명'];
        case 11:
            return ['나마스테', '설명'];
        case 12:
            return ['열쩡!열쩡!열쩡', '설명'];
        case 13:
            return ['천하장사', '설명'];
        case 14:
            return ['멋쟁이', '설명'];
        case 15:
            return ['정1품', '설명'];
        case 16:
            return ['정2품', '설명'];
        case 17:
            return ['정3품', '설명'];
        default:
            return ['', ''];
    }
}