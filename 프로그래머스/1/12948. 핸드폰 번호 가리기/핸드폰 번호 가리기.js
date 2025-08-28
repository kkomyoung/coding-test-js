function solution(phone_number) {
    let answer = '';
    
    for (const index in phone_number) {
       if (index < phone_number.length - 4) {
           answer += "*"
       } else {
           answer += phone_number[index]
       }
    }
    
    return answer
}