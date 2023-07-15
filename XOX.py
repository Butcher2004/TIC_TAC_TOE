import numpy as np
import random as rrr
arr = np.array([["-"]*3]*3)
print(arr)
num = 3
x_num = 0
O_num = 0

def check(i,j,sym):
    res = 0
    if j==0:
        for t in range(1,3):
            if(arr[i][j+t]==sym):
                res = res+1
        if(res==2):
            return True
        else:
            res=0
    if j==1:
        if(arr[i,j-1]==sym and arr[i,j+1]==sym):
            return True
    if j==2:
        for t in range(1,3):
            if(arr[i][j-t]==sym):
                res = res+1
        if(res==2):
            return True
        else:
            res=0
    if i==0:
        for t in range(1,3):
            if(arr[i+t][j]==sym):
                res = res+1
        if(res==2):
            return True
        else:
            res=0
    if i==1:
        if(arr[i-1,j]==sym and arr[i+1,j]==sym):
            return True
    if i==2:
        for t in range(1,3):
            if(arr[i-t][j]==sym):
                res = res+1
        if(res==2):
            return True
    if i==0 and j==0:
        if(arr[1,1]==sym and arr[2,2]==sym):
            return True
    if i==0 and j==2:
        if (arr[1, 1] == sym and arr[2, 0] == sym):
            return True
    if i==2 and j==0:
        if(arr[1,1]==sym and arr[0,2]==sym):
            return True
    if i==2 and j==2:
        if (arr[1, 1] == sym and arr[0, 0] == sym):
            return True
    if i==1 and j==1:
        if(arr[0,0]==sym and arr[2,2]==sym):
            return True
        if (arr[0, 2] == sym and arr[2, 0] == sym):
            return True
    return False


ite = 0
while ite<4:
    x,y = list(map(int,input().split()))
    if arr[x,y]=="-":
        arr[x, y] = "X"
        if ite == 0:
            a, b = np.where(arr == "-")
            x1, y1 = rrr.choice(list(zip(a, b)))
            arr[x1, y1] = "O"
        else:
            a, b = np.where(arr == "-")
            lis = list(zip(a, b))
            dec = 0
            for i in lis:
                p = i[0]
                q = i[1]
                if (check(p, q, "O")):
                    arr[p, q] = "O"
                    dec = 1
                    break
            if dec == 0:
                for i in lis:
                    p = i[0]
                    q = i[1]
                    if (check(p, q, "X")):
                        arr[p, q] = "O"
                        dec = 1
                        break
            if dec == 0:
                a, b = np.where(arr == "-")
                x1, y1 = rrr.choice(list(zip(a, b)))
                arr[x1, y1] = "O"
        print(arr)
        a, b = np.where(arr == "X")
        for i in list(zip(a, b)):
            p = i[0]
            q = i[1]
            if (check(p, q, "X")):
                x_num = 1
                break
        a, b = np.where(arr == "O")
        for i in list(zip(a, b)):
            p = i[0]
            q = i[1]
            if (check(p, q, "O")):
                O_num = 1
                break
        if (x_num == 1 or O_num == 1):
            break
        ite = ite+1
    else:
        print("Choose the valid Block")
        print(arr)
        
   
if x_num==1:
    print("\nX is the winner")
else:
    if O_num==1:
        print("\nO is the winner")
    else:
        print("\nTIE")


