function solution(numbers) {
    
    // 문자열로 변환 후 정렬
    numbers.sort((a, b) => (b.toString().repeat(3)).localeCompare(a.toString().repeat(3)));
    

    // 배열에 0만 있을 경우
    if (numbers[0].toString() === "0") {
        return "0"
    }
    
    return numbers.join('');
}