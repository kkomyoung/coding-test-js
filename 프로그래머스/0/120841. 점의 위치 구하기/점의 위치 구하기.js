function solution(dot) {
    // 배열의 첫번째 숫자
    const firstNumber = dot[0];
    // 배열의 두번째 숫자
    const secondNumber = dot[1];
    
    // 두개 다 양수면 1
    if (firstNumber > 0 && secondNumber > 0) {
        return 1;
    } 
    // 두개 다 음수면 3
    else if (firstNumber < 0 && secondNumber < 0) {
         return 3;
    }
     // 첫번째가 음수이고 두번째가 양수면 2
    else if (firstNumber < 0 && secondNumber > 0) {
         return 2;
    }
    // 첫번째가 양수이고 두번쨰가 음수면 4
    else if (firstNumber > 0 && secondNumber < 0) {
         return 4;
    }
    
}