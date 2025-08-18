# 낮은 숫자부터 직접 해보고 규칙을 찾아낸다.
# n=1 -> 1번
# n=2 -> 3번
# n=3 -> 7번

# 2(n-1)+1



def solution(n):
    answer = []
    
    def hanoi(n):
        if n == 1:
            return 1
        return 2 * hanoi(n-1) + 1
    
    def hanoi_root(n, start, temp, end):
        if n == 1:
            answer.append([start, end])
            return
        
        hanoi_root(n-1, start, end, temp)
        answer.append([start, end])
        hanoi_root(n-1, temp, start, end)
        

    print(hanoi_root(n, 1, 2, 3))
    
    return answer