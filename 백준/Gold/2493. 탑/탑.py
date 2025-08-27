import sys
input = sys.stdin.readline

N = int(input().strip())
heights = list(map(int, input().split()))

answer = [0]*N
stack = []  # 인덱스만 저장 (0-based)

for i, h in enumerate(heights):
    # 현재 탑보다 낮거나 같은 탑은 신호 수신 불가 → 제거
    while stack and heights[stack[-1]] <= h:
        stack.pop()
    # 스택 top이 왼쪽의 가장 가까운 더 높은 탑
    answer[i] = stack[-1] + 1 if stack else 0
    stack.append(i)

print(*answer)
