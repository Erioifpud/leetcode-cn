# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

def guess(n):
    if n < 6:
        return 1
    elif n > 6:
        return -1
    else:
        return 0

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        start, end = 1, n
        while start <= end:
            mid = (start + end) // 2
            flag = guess(mid)
            if flag == 1:
                start = mid + 1
            elif flag == -1:
                end = mid
            else:
                return mid

s = Solution()
print(s.guessNumber(6))