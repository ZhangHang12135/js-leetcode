const exist = function(board, word) {
    const h = board.length, w = board[0].length;
    // 移动方向 右，左，下，上
    // 对应的就是[+x, +y]
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if(board[i][j] !== s[k]) {
            return false;
        } else if (k === s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for(const [dx, dy] of directions) {
            let newi = i + dx, newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
exist(board, word);