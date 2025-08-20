function solution(s){
    const stack = [];
    
    for (const ch of s) {
        if (ch === "(") {
            stack.push("(");
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length === 0;
}
