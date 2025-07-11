function solution(my_string) {
    var answer = [...my_string].filter(string => !isNaN(string)).reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);
    return answer;
}