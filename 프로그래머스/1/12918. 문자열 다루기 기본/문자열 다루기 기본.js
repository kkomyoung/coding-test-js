function solution(s) {
    const array = [...s];
    
    // 문자열의 길이 체크
    if (array.length !== 4 && array.length !== 6) {
        return false
    }
    
    for (const string of array) {
        if (isNaN(string)) {
            return false
        }
    }
    

    return true;
}