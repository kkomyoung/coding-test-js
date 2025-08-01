def solution(sizes):
    # 모든 명함을 넣을 수 있는 가장 작은 크기의 명함집
    # 가로 세로를 돌려서 넣을 수 있다...
    
    horizontals = []
    verticals = []
    
    # 모든 명함의 포맷을 가로*세로로 통일시킨다
    for index in range(len(sizes)):
        if sizes[index][0] < sizes[index][1]:
            sizes[index] = [sizes[index][1], sizes[index][0]]
            
    for el in sizes:
        horizontals.append(el[0]);
        verticals.append(el[1]);
    
    answer = max(horizontals) * max(verticals)
    return answer