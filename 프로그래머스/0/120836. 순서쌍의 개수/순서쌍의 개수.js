function solution(n) {
    let length = 0;
    
    for(let i=1; i <= n; i++) {
        // 
        if (n % i === 0) {
            length+=1;
        }
    }
    
    return length;
}
