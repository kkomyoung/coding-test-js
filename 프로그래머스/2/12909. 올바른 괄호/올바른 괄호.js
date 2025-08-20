// 꺼낸게 만약 ) 이거야 그러면 이전꺼를 체크해
    // 이전께 없어 => false

// 꺼낸게 만약 ( 이거야 그러면 빼서 새로운 배열에 추가해 ["("]
// 그다음께 또 ( 이거야 그러면 또 빼서 추가해 ["(", "("]
// 그다음은 ) 이거야 그러면 배열에서 마지막꺼를 제외해 ["("]

// 반복이 끝났을 때 배열이 비어있으면 성공!

function solution(s){
    // 문자를 배열로 쪼개기
    const stringArray = [...s]
    // 임시공간
    const temp = []
    
    // 첫번째 요소 체크
    if (stringArray[0] === ")") {
        return false
    }
    
    for (const string of stringArray) {
        if (string === "(") {
            temp.push("(")
        } else {
            temp.pop()
        }
    }

    return temp.length === 0 ? true : false;
}