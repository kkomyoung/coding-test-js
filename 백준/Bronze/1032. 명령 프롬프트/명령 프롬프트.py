def solution():
    N = int(input())
    files = [input() for _ in range(N)]

    # 여기서 파일 비교해서 패턴 구하기
    result = ""

    # 예시 로직
    for i in range(len(files[0])):
        chars = [file[i] for file in files]
        if all(c == chars[0] for c in chars):
            result += chars[0]
        else:
            result += '?'

    print(result)

if __name__ == "__main__":
    solution()