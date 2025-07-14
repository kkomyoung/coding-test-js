function solution(array) {
    const object = array.reduce((acc, curr, index) => {
        acc[index] = curr;
        return acc;
    }, {});
    
    const max = Math.max(...Object.values(object));
    
    const [a, b] = Object.entries(object).find((item) => item[1] === max);
    return [b, Number(a)];
}