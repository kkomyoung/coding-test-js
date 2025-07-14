function solution(numbers) {
    // 가장 큰거 두개 곱하기, 가장 작은 거 두개 곱하기
    numbers.sort((a, b) => a - b);
    
    const x = numbers[0] * numbers[1];
    const y = numbers[numbers.length - 2] * numbers[numbers.length - 1];

    return Math.max(x, y);
}