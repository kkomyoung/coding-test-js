function solution(rsp) {
    // 가위 2
    // 바위 0
    // 보 5
    
    const reuslt = [...rsp].map(item => {
        switch(item){
            case "2":
                return "0";
            case "0":
                return "5";
            case "5":
                return "2";
        }
    });
    
    return reuslt.join('');
}