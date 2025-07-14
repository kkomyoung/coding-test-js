function solution(cipher, code) {
    return [...cipher].filter((item, index) => (index+1) % code === 0).join('');
}