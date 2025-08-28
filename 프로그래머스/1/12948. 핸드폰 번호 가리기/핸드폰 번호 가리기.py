def solution(phone_number):
    answer = ''
    
    for index in range(len(phone_number)):
        if (index < len(phone_number) - 4):
            answer += "*"
        else:
            answer += phone_number[index]
    
    return answer