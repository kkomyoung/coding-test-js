function solution(my_string, num1, num2) {
    const array = [...my_string];
    
    const temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    
    return array.join('');
}