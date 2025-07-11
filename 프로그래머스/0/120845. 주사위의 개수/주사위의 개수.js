function solution(box, n) {
    let answer = 1;
    for (i of box) {
        answer*=Math.trunc(i/n);
    }
    
    return answer;
}