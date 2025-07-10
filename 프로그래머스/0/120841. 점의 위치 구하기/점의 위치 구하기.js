function solution(dot) {
    // 구조분해 할당
    const [x, y] = dot;
    
    // 두개 다 양수면 1
    if (x > 0 && y > 0) return 1;
    // 두개 다 음수면 3
    if (x < 0 && y < 0) return 3;
     // 첫번째가 음수이고 두번째가 양수면 2
    if (x < 0 && y > 0) return 2;
    // 첫번째가 양수이고 두번쨰가 음수면 4
    if (x > 0 && y < 0) return 4;
    
}