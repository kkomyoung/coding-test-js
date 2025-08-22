def solution(array, commands):
    answer = []
    
    for command in commands:
        i = command[0]
        j = command[1]
        k = command[2]
        
        sliceArray = array[i-1:j]
        sliceArray.sort()
        
        answer.append(sliceArray[k-1])  
        
    return answer