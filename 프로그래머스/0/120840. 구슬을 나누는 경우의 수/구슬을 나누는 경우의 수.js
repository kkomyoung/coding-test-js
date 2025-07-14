function solution(balls, share) {
    // 팩토리얼 함수
    const factorial = (number) => {
        let result = 1;
        for (let i=1; i <= number; i++) {
            result = result * i;
        }
        // 반올림
        return Math.round(result);
    }
    
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}