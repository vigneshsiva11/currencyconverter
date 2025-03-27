
num = int(input())
onum = num
rev = 0

while onum >0:
    digit = onum%10
    rev = rev * 10 + digit
    num = onum//10
if(rev==num):
    print(f"{num} is a palindrome")
else: 
    print(f"{num} is not a palindrome")
