function solution(my_string) {
    const upperCaseArray = [...my_string].map(item => item.toUpperCase());
    
    console.log('upperCaseArray', upperCaseArray);
    

    return [...my_string].map((item, index) => {
        if (item === upperCaseArray[index]) {
            return item.toLowerCase();
        } else {
            return item.toUpperCase();
        }
    }).join('');
}