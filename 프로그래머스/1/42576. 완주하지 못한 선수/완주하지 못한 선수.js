function solution(participant, completion) {
    let result = ''
    const map = new Map();
    
    // participant를 키로 map 만들기
    for (const name of participant){
        // 동명이인 이라면?
        if (map.has(name)) {
            map.set(name, map.get(name) - 1)
        } else {
            map.set(name, 0)
        }
    }
    
    // 만들어진거랑 완주자랑 비교해서 있으면 값 1 올려주기
    for (const name of completion) {
        map.set(name, map.get(name) + 1)
    }
    
    for (const key of map.keys()){
        if (map.get(key) === 0) {
            result = key
        }
    }
    
    return result;
}