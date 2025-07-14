function solution(emergency) {
    // 얕은 복사
    const sortedArray = [...emergency].sort((a, b) => b - a);
    return emergency.map(item => sortedArray.indexOf(item) + 1);;
}