# 낮은 숫자부터 직접 해보고 규칙을 찾아낸다.
# n=1 -> 1번
# n=2 -> 3번
# n=3 -> 7번

# 2(n-1)+1

def solution(n):
    answer = []
    
    # 횟수만 찾아낼 떄
    def hanoi_count(n):
        if n == 1:
            return 1
        return 2 * hanoi_count(n-1) + 1
    
    # 경로를 알아낼 때
    def hanoi_root(n, start, temp, end):
        if n == 1:
            answer.append([start, end])
            return
        
        hanoi_root(n-1, start, end, temp)
        answer.append([start, end])
        hanoi_root(n-1, temp, start, end)
        
    hanoi_root(n, 1, 2, 3)
    
    return answer