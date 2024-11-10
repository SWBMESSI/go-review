export class Node {
    constructor(move) {
        this.move = move;  // 保存当前步的落子信息，例如 { x, y, stone, captured }
        this.children = [];  // 子节点，代表不同分支
        this.parent = null;  // 父节点，方便回溯
    }

    addChild(node) {
        node.parent = this;
        this.children.push(node);
    }

    restoreBoard(node) {
        let board = Array.from({ length: 19 }, () => Array(19).fill(0));  // 空棋盘
        let stepBoard =  Array.from({ length: 19 }, () => Array(19).fill(0));

        let tempNode = node;
    
        // 从根节点开始回溯并应用每一步落子
        let allmove = [];
        while (tempNode.move !== null) {            
            allmove.unshift(tempNode.move)
            tempNode = tempNode.parent;  // 回溯
        }

        for (const move of allmove) {
            const {step, x, y, stone, captured,_ } = move;
            board[x][y] = stone;  // 落子
            stepBoard[x][y] = step;
            captured.forEach(([cx, cy]) => {
                board[cx][cy] = 0;  // 提掉的棋子
            });
        }
    
        return [board,stepBoard];
    }
    removeBoard(node) {
        let tempNode = node;
    
        // 从根节点开始回溯并应用每一步落子
        while (tempNode.move !== null) {
            let tempNodeEmpty = tempNode
            tempNode = tempNode.parent;  // 回溯
            // tempNodeEmpty.move = null
            tempNodeEmpty.children = null
            tempNodeEmpty.parent = null
            tempNodeEmpty = null
        }
    
        return tempNode;
    }
}




// 通过历史记录还原棋盘


// // 示例：开始下棋
// makeMove(3, 3, "black");
// makeMove(3, 4, "white");

// // 还原当前棋盘
// let restoredBoard = restoreBoard(currentNode);
// console.log(restoredBoard);

// export default restoreBoard;