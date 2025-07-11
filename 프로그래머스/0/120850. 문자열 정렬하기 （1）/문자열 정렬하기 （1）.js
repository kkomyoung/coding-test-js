function solution(my_string) {
    const reulst = [...my_string].filter(string => !isNaN(string)).sort().map(number => +number);    
    return reulst;
}