function solution(hp) {    
    let totalHp = hp;
    
    const 장군개미수 = Math.trunc(totalHp / 5);
    totalHp = totalHp % 5
    
    const 병정개미수 = Math.trunc(totalHp / 3);
    totalHp = totalHp % 3;
    
    const 일개미수 = totalHp;
    
    return 장군개미수 + 병정개미수 + 일개미수;
}