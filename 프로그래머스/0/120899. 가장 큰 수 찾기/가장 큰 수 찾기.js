function solution(array) {
    // 가장 큰 수 찾기
    const max = Math.max(...array);
    // 배열에서 가장 큰 수의 인덱스 번호 찾기
    const index = array.indexOf(max);
    // 조합해서 반환
    return [max, index];
}