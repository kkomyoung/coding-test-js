import sys

def solution():
    lines = sys.stdin.read().splitlines()

    for line in lines:
        result = [0, 0, 0, 0]  # 소문자, 대문자, 숫자, 공백
        for i in line:
            if i.islower():
                result[0] += 1
            elif i.isupper():
                result[1] += 1
            elif i.isdigit():
                result[2] += 1
            elif i == ' ':
                result[3] += 1
        print(" ".join(map(str, result)))


if __name__ == "__main__":
    solution()
