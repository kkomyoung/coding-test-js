function solution(sizes) {
    let horizontal = [];
    let vertical = [];
    
    for (const item of sizes) {
       const [h, v] = item.sort((a, b) => b - a)
        
        horizontal.push(h);
        vertical.push(v);
    }
    
    const horizontalMax = horizontal.sort((a, b) => b - a)[0];
    const verticalMax = vertical.sort((a, b) => b - a)[0];
    

    return horizontalMax * verticalMax;
}