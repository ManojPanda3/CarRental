class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        def isValid(board, cord, num):
            for i in range(9):
                if num == board[cord[0]][i] or num == board[i][cord[1]]:
                    return False
                if num == board[cord[0]//3*3 + i//3][cord[1]//3*3 + i%3]:
                    return False
            return True

        def solver(data, cord=(0, 0)):
            if cord[1] == 9:
                return True
            if cord[0] == 9:
                return solver(data, (0, cord[1] + 1))
            if data[cord[1]][cord[0]] != '.':
                return solver(data, (cord[0] + 1, cord[1]))
            for i in range(1, 10):
                if isValid(board, cord, str(i)):
                    data[cord[1]][cord[0]] = str(i)
                    if solver(data, (cord[0] + 1, cord[1])):
                        return True
                    data[cord[1]][cord[0]] = '.'
            return False

        solver(board)