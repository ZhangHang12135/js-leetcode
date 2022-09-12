var findNumberIn2DArray = function(matrix, target) {
    if (!matrix[0] && !matrix[0][0]) {
        return false;
    }
    let row = matrix.length, col = matrix[0].length;
    let x = 0, y = col - 1;
    let result = false;
    while(x < row && y >=0 ) {
        if (target === matrix[x][y]) {
            result = true;
            x = row;
        } else if (target > matrix[x][y]) {
            x++;
        } else if (target < matrix[x][y]) {
            y--;
        }
    }
    return result;
};
let array = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 5;
findNumberIn2DArray(array, target);