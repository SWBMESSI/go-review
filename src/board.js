import { Node } from "./gonode";
import app from './main.js';

export class Board {
    constructor() {
        this.board =  Array.from({ length: 19 }, () => Array(19).fill(0));
        this.influenceBoard = [
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.stoneXY=[
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
            [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0],[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0], [0,0]],
        ],
        this.stepBoard =  Array.from({ length: 19 }, () => Array(19).fill(0));
        this.step = 1;
        this.captured = [];
        this.nowPlay = -1;
        this.stoneXYType=[
            [0,0],
            [2,0],
            [-2,0],
            [0,2],
            [0,-2],
        ];
        this.stoneXYTypeSGF=[
          [0,0],
          [1,0],
          [-1,0],
          [0,1],
          [0,-1],
      ];
        this.moveHistory = []
        this.node = new Node(null)
        this.rootNode = this.node
        this.blackTerritoryThreshold = -0.33;
        this.whiteTerritoryThreshold = 0.33;
        this.blackStone = 0
        this.blackStoneCaptured = 0
        this.whiteStone = 0
        this.blackStoneCaptured = 0
        this.starPoints = [
          [3, 3], [3, 9], [3, 15],
          [9, 3], [9, 9], [9, 15],
          [15, 3], [15, 9], [15, 15]
        ];
      
        this.event = "" // 赛事名称 EV
        this.gameName = "" // 对局名称 GN
        this.playerB = "" // 黑棋玩家 PB
        this.BR = ""    // 黑棋玩家段位 BR
        this.playerW = "" // 白棋玩家 PW
        this.WR = "" // 白棋玩家段位 WR
        this.date="" // 对局日期 DT
        this.result = "" // RE
        this.sgfNode = null

    }
    // getboard(){
    //     return this.board
    // }
    // getstoneXY(){
    //     return this.stoneXY
    // }
    
    luozi(x,y) {
        this.captured = []
        if (this.board[x][y] == 0) {
          // 落子之前会对进行检查
          
          var randomInt = Math.floor(Math.random() * 4);
          if (randomInt === 0) {
            randomInt  = 1
          }
          this.board[x][y] = this.nowPlay
  
  
          //碰撞问题xy 周围棋子的位置是否被影响
          const directions = [ 
            [-1, 0], // 上
            [1, 0],  // 下
            [0, -1], // 左
            [0, 1],  // 右
          ];
  
          let moveX  = 0;
          let moveY = 0;
          for (let index in directions) {
            
            let nx = x + directions[index][0]; // 计算新位置的 x 坐标
            let ny = y + directions[index][1]; // 计算新位置的 y 坐标
            if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;
            if (this.board[nx][ny] != 0) {
              // 存在
              let nowXy =  this.stoneXY[nx][ny]
              switch (randomInt) {
                case 0:
                  console.log(`没有棋子需要动`) 
                  break;
                case 1: // 偏右
                  // (-2,0)或者(2,0)
                  if (index == 3) {
                    if(nowXy[0] == -2){
                      // this.stoneXY[nx][ny] = [0,0]
                      console.log(`这个棋子需要动动 ${nx},${ny}`)
                      moveX = nx
                      moveY = ny
                    }
                  }
                  break;
                case 2:// 偏左
                  if (index == 2) {
                    if(nowXy[0] == 2){
                      console.log(`这个棋子需要动动 ${nx},${ny}`)
                      moveX = nx
                      moveY = ny
                    }
                  }
                  // (-2,0)或者(2,0)
                  break;
                case 3:
                  // (0,-2)或者(0,2)
                  if (index == 1) {
                    if(nowXy[1] == -2){
                      console.log(`这个棋子需要动动 ${nx},${ny}`)
                      moveX = nx
                      moveY = ny
                     }
                  }
                  break;
                case 4:
                  // (0,-2)或者(0,2)
                  if (index == 0) {
                    if(nowXy[1] == 2){
                      console.log(`这个棋子需要动动 ${nx},${ny}`)
                      moveX = nx
                      moveY = ny
                    }
                  }
                  break;
                default:
                  console.log(`应该是出错了`) 
                  break;
              }
            }
          }
          setTimeout(() => {    
            console.log(moveX,moveY)
            console.log(this.stoneXY[moveX][moveY])
            this.stoneXY[moveX][moveY] = this.stoneXYType[0]
            this.stoneXY[x][y] = this.stoneXYType[randomInt]
          }, 30); // 2秒后改变消息
          if (this.checkQi(x,y) == 0) { // 如果自己的气为0
            // 提走自己的棋子
            this.board[x][y] = 0
            return false
          }
          
          // 记录下来 落子历史
          // 提子历史
          this.moveHistory.push({
            x:x,
            y:y,
            stone:this.nowPlay,
            captured: this.captured
          })
          let newNode = new Node({
            step:this.step,
            x:x,
            y:y,
            stone:this.nowPlay,
            captured: this.captured,
            record:this.checkMoveType(x,y,this.nowPlay)
          });
          this.node.addChild(newNode);
          this.node = newNode;
          this.stepBoard[x][y] = this.step;
          this.step +=1;
          app.config.globalProperties.$globalData.nodeNowGlobal = this.node
          // console.log(this.moveHistory) 
          var randomIntSound = Math.floor(Math.random() * 4);
          if (randomIntSound == 1) {
            randomIntSound = 0
          }
          this.playSound(`data_${randomIntSound}.mp3`)
          this.nowPlay = 0 - this.nowPlay  
        }else{
          return false
        }
        return true
    }
    luoziSGF(x,y,stone) {
      this.captured = []
      if (this.board[x][y] == 0) {
        // 落子之前会对进行检查
        
        var randomInt = Math.floor(Math.random() * 4);
        if (randomInt === 0) {
          randomInt  = 1
        }
        this.board[x][y] = stone


        //碰撞问题xy 周围棋子的位置是否被影响
        const directions = [ 
          [-1, 0], // 上
          [1, 0],  // 下
          [0, -1], // 左
          [0, 1],  // 右
        ];

        let moveX  = 0;
        let moveY = 0;
        for (let index in directions) {
          
          let nx = x + directions[index][0]; // 计算新位置的 x 坐标
          let ny = y + directions[index][1]; // 计算新位置的 y 坐标
          if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;
          if (this.board[nx][ny] != 0) {
            // 存在
            let nowXy =  this.stoneXY[nx][ny]
            switch (randomInt) {
              case 0:
                console.log(`没有棋子需要动`) 
                break;
              case 1: // 偏右
                // (-2,0)或者(2,0)
                if (index == 3) {
                  if(nowXy[0] == -2){
                    // this.stoneXY[nx][ny] = [0,0]
                    console.log(`这个棋子需要动动 ${nx},${ny}`)
                    moveX = nx
                    moveY = ny
                  }
                }
                break;
              case 2:// 偏左
                if (index == 2) {
                  if(nowXy[0] == 2){
                    console.log(`这个棋子需要动动 ${nx},${ny}`)
                    moveX = nx
                    moveY = ny
                  }
                }
                // (-2,0)或者(2,0)
                break;
              case 3:
                // (0,-2)或者(0,2)
                if (index == 1) {
                  if(nowXy[1] == -2){
                    console.log(`这个棋子需要动动 ${nx},${ny}`)
                    moveX = nx
                    moveY = ny
                   }
                }
                break;
              case 4:
                // (0,-2)或者(0,2)
                if (index == 0) {
                  if(nowXy[1] == 2){
                    console.log(`这个棋子需要动动 ${nx},${ny}`)
                    moveX = nx
                    moveY = ny
                  }
                }
                break;
              default:
                console.log(`应该是出错了`) 
                break;
            }
          }
        }
        
        this.stoneXY[moveX][moveY] = this.stoneXYType[0]
        this.stoneXY[x][y] = this.stoneXYType[randomInt]
        if (this.checkQiSGF(x,y) == 0) { // 如果自己的气为0
          // 提走自己的棋子
          this.board[x][y] = 0
          return false
        }
        
        // 记录下来 落子历史
        // 提子历史

        let newNode = new Node({
          step:this.step,
          x:x,
          y:y,
          stone:stone,
          captured: this.captured,
          record:this.checkMoveType(x,y,stone)
        });
        this.node.addChild(newNode);
        this.node = newNode;
        this.stepBoard[x][y] = this.step;
        this.step +=1;
        app.config.globalProperties.$globalData.nodeNowGlobal = this.node
        // console.log(this.moveHistory) 
        var randomIntSound = Math.floor(Math.random() * 4);
        if (randomIntSound == 1) {
          randomIntSound = 0
        }
        // this.playSound(`data_${randomIntSound}.mp3`)
        this.nowPlay = 0 - stone 
      }else{
        return false
      }
      return true
  }


    checkQi(x,y){
        const visited = new Set(); // 用于存储已访问的位置，避免重复检查
        const queue = [[x, y]]; // 初始化队列，开始位置为新放置的棋子
        let qi = 0; // 气的数量
  
        // 棋子的四个方向
        const directions = [ 
          [-1, 0], // 上
          [1, 0],  // 下
          [0, -1], // 左
          [0, 1],  // 右
        ];
  
        while(queue.length > 0){
          const [cx, cy] = queue.shift(); // 从队列中取出当前坐标
         
          if (visited.has(`${cx},${cy}`)) continue; // 如果当前位置已经访问过，跳过
          visited.add(`${cx},${cy}`); // 标记当前位置为已访问
          for (const [dx, dy] of directions) {
              const nx = cx + dx; // 计算新位置的 x 坐标
              const ny = cy + dy; // 计算新位置的 y 坐标
  
              // 边界检查
              if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;
  
              if (this.board[nx][ny] === 0) {
                  qi++; // 找到一个气，气数加一
              } else if (this.board[nx][ny] === this.nowPlay) {
                  // 如果是同色棋子，继续检查其周围的气
                  queue.push([nx, ny]); // 将同色棋子加入队列
              } else if (this.board[nx][ny] === -this.nowPlay){
                if (this.checkOpponentQi(nx,ny)) {
                  // 有气
                  continue;
                }else{
                  // 无气提子
                  this.removeNoQiStones(nx,ny)
                  this.playSound('data_capture1.mp3')
                  qi++
                }
              }
              // 如果是对方棋子，则不做处理，继续检查下一个方向
          }
        }
        return qi; // 返回气的数量
    }
    checkQiSGF(x,y){
      const visited = new Set(); // 用于存储已访问的位置，避免重复检查
      const queue = [[x, y]]; // 初始化队列，开始位置为新放置的棋子
      let qi = 0; // 气的数量

      // 棋子的四个方向
      const directions = [ 
        [-1, 0], // 上
        [1, 0],  // 下
        [0, -1], // 左
        [0, 1],  // 右
      ];

      while(queue.length > 0){
        const [cx, cy] = queue.shift(); // 从队列中取出当前坐标
       
        if (visited.has(`${cx},${cy}`)) continue; // 如果当前位置已经访问过，跳过
        visited.add(`${cx},${cy}`); // 标记当前位置为已访问
        for (const [dx, dy] of directions) {
            const nx = cx + dx; // 计算新位置的 x 坐标
            const ny = cy + dy; // 计算新位置的 y 坐标

            // 边界检查
            if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;

            if (this.board[nx][ny] === 0) {
                qi++; // 找到一个气，气数加一
            } else if (this.board[nx][ny] === this.nowPlay) {
                // 如果是同色棋子，继续检查其周围的气
                queue.push([nx, ny]); // 将同色棋子加入队列
            } else if (this.board[nx][ny] === -this.nowPlay){
              if (this.checkOpponentQi(nx,ny)) {
                // 有气
                continue;
              }else{
                // 无气提子
                this.removeNoQiStones(nx,ny)
                // this.playSound('data_capture1.mp3')
                qi++
              }
            }
            // 如果是对方棋子，则不做处理，继续检查下一个方向
        }
      }
      return qi; // 返回气的数量
  }
    checkOpponentQi(x, y) {
        const visited = new Set();
        const queue = [[x, y]];
        const opponentColor = this.board[x][y];
        let qi = 0;

        const directions = [
            [-1, 0], // 上
            [1, 0],  // 下
            [0, -1], // 左
            [0, 1],  // 右
        ];

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            if (visited.has(`${cx},${cy}`)) continue;
            visited.add(`${cx},${cy}`);

            // 检查四个方向
            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                // 边界检查
                if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;

                if (this.board[nx][ny] === 0) {
                    qi++; // 找到一个气
                } else if (this.board[nx][ny] === opponentColor) {
                    queue.push([nx, ny]); // 继续检查同色棋子
                }
            }
        }
        return qi > 0; // 如果有气，返回 true
    }
    removeNoQiStones(x, y) {
        const noQiColor = this.board[x][y];
        const visited = new Set();
        const queue = [[x, y]];
        let removeCount = 0;

        const directions = [
            [-1, 0], // 上
            [1, 0],  // 下
            [0, -1], // 左
            [0, 1],  // 右
        ];

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            if (visited.has(`${cx},${cy}`)) continue;
            visited.add(`${cx},${cy}`);

            if (this.board[cx][cy] === noQiColor) {
                this.board[cx][cy] = 0; // 移除棋子
                this.captured.push([cx,cy])
                removeCount ++;
                // 检查四个方向
                for (const [dx, dy] of directions) {
                    const nx = cx + dx;
                    const ny = cy + dy;

                    // 边界检查
                    if (nx < 0 || nx >= 19 || ny < 0 || ny >= 19) continue;

                    if (this.board[nx][ny] === noQiColor) {
                        queue.push([nx, ny]); // 继续检查同色棋子
                    }
                }
            }
        }
        if(removeCount == 1){
          // 记录打劫位置
        }
    }

    newgame(){
        this.board =  [
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        this.moveHistory = []
        this.playSound(`data_newgame.mp3`)
        this.nowPlay=-1
        this.node.removeBoard(this.node)
        console.log(this.node)
        this.node = new Node(null)
        this.rootNode = this.node
        this.influenceBoard = Array.from({ length: 19 }, () => Array(19).fill(0));
        this.stepBoard = Array.from({ length: 19 }, () => Array(19).fill(0));
        this.step = 1
        this.event = "" // 赛事名称 EV
        this.gameName = "" // 对局名称 GN
        this.playerB = "" // 黑棋玩家 PB
        this.BR = ""    // 黑棋玩家段位 BR
        this.playerW = "" // 白棋玩家 PW
        this.WR = "" // 白棋玩家段位 WR
        this.date="" // 对局日期 DT
        this.result = "" // RE
      }
      newgameSGF(){
        return new Promise((resolve) => {

        this.board =  [
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        this.moveHistory = []
        // this.playSound(`data_newgame.mp3`)
        this.nowPlay=-1
        this.node.removeBoard(this.node)
        console.log(this.node)
        this.node = new Node(null)
        this.rootNode = this.node
        this.influenceBoard = Array.from({ length: 19 }, () => Array(19).fill(0));
        this.stepBoard = Array.from({ length: 19 }, () => Array(19).fill(0));
        this.step = 1
        this.event = "" // 赛事名称 EV
        this.gameName = "" // 对局名称 GN
        this.playerB = "" // 黑棋玩家 PB
        this.BR = ""    // 黑棋玩家段位 BR
        this.playerW = "" // 白棋玩家 PW
        this.WR = "" // 白棋玩家段位 WR
        this.date="" // 对局日期 DT
        this.result = "" // RE
        resolve();
        });
      }
    kongzhuo(){ //空着
    this.playSound(`data_pass.mp3`)
    this.nowPlay = -this.nowPlay
    }
    huiqi(){ // 悔棋
    // 取消掉上一步的操作
    // 操作历史的最后一位进行读取并操作
        // const last = this.moveHistory.pop()
        // this.board[last.x][last.y] = 0
        // for (const [rx,ry] of last.captured) {
        //     this.board[rx][ry] = -last.stone
        // }
        // this.nowPlay = -this.nowPlay
        // this.playSound(`data_1.mp3`)
        // this.node = this.node.parent
        this.choseNode(this.node.parent)
    }
    nextStep(){ // 悔棋
      // 取消掉上一步的操作
      // 操作历史的最后一位进行读取并操作
          // const last = this.moveHistory.pop()
          // this.board[last.x][last.y] = 0
          // for (const [rx,ry] of last.captured) {
          //     this.board[rx][ry] = -last.stone
          // }
          // this.nowPlay = -this.nowPlay
          // this.playSound(`data_1.mp3`)
          // this.node = this.node.parent
          if (this.node.children.length != 0) {
            this.choseNode(this.node.children[0])            
          }
      }
    choseNode(nodeNow){
        [this.board,this.stepBoard] = this.node.restoreBoard(nodeNow)
        this.node = nodeNow
        this.playSound(`data_1.mp3`)
        this.nowPlay = -this.node.move.stone
        this.step = this.node.move.step
        app.config.globalProperties.$globalData.nodeNowGlobal = this.node
    }
    choseNodeSGF(nodeNow){
      [this.board,this.stepBoard] = this.node.restoreBoard(nodeNow)
      this.node = nodeNow
      // this.playSound(`data_1.mp3`)
      this.nowPlay = -this.node.move.stone
      this.step = this.node.move.step
      // app.config.globalProperties.$globalData.nodeNowGlobal = this.node
  }

    calculateInfluence() {
      // this.influenceBoard =  influence.map(this.board)
      // this.influenceBoard =  influence.areaMap(this.board)
      
      const boardSize = 19;
      const influenceMap = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
      
      // 高斯函数参数
      const A = 1;  // 最大影响力
      const sigma = 1.8;  // 标准差，控制衰减速率
      
      // 放置黑棋和白棋，1 表示黑棋，-1 表示白棋
      const blackPositions = [];
      const whitePositions = [];
      // const board = this.board

      for (let y = 0; y < this.board.length; y++) {
        for (let x = 0; x < this.board[y].length; x++) {
            if (this.board[y][x] === -1) {
                blackPositions.push([x, y]); // 黑棋坐标
            } else if (this.board[y][x] === 1) {
                whitePositions.push([x, y]); // 白棋坐标
            }
        }
    }
      function gaussianInfluence(d, A, sigma) {
          return A * Math.exp(-Math.pow(d, 2) / (2 * Math.pow(sigma, 2)));
      }
      
      // 加权邻接检查
      function applyInfluenceWithWeight(positions, color) {
        const weightFactor = 1
        // = color === -1 ? 1.01 : 0.99; // 黑棋影响力增加，白棋减少
        for (const [px, py] of positions) {
            for (let x = 0; x < boardSize; x++) {
                for (let y = 0; y < boardSize; y++) {
                    const distance = Math.sqrt(Math.pow(px - x, 2) + Math.pow(py - y, 2));
                    const influence = gaussianInfluence(distance, A, sigma) * color * weightFactor;     
             
                      influenceMap[y][x] += influence 
             
                    
                }
            }
        }

      }
      function applyInfluenceWithWeightBian(positions) {
        const weightFactor = 1
        // = color === -1 ? 1.01 : 0.99; // 黑棋影响力增加，白棋减少
        for (const [px, py] of positions) {
            
            for (let x = 0; x < boardSize ; x++) {
                for (let y = 0; y < boardSize ; y++) {
                  const distance = Math.sqrt(Math.pow(px - x, 2) + Math.pow(py - y, 2));
                  const influenceMapValue = influenceMap[py][px]
                  let influence = 0;
                  if (influenceMapValue <= -0.2) {
                      influence = gaussianInfluence(distance,1, 0.55  ) * -1 * weightFactor;                    

                  }else if (influenceMapValue >= 0.2) {
                    
                      influence = gaussianInfluence(distance,1, 0.55 ) * 1 * weightFactor;                    
                  }else{
                    continue
                  }
                    influenceMap[y][x] += influence
                }
            }
        }

      }
    
      const bian = [
        [0,0],
        [0,18],
        [18,0],
        [18,18],

        [0,1],
        [0,2],
        [0,3],
        [0,4],
        [0,5],
        [0,6],
        [0,7],
        [0,8],
        [0,9],
        [0,10],
        [0,11],
        [0,12],
        [0,13],
        [0,14],
        [0,15],
        [0,16],
        [0,17],

        [1,0], 
        [2,0], 
        [3,0], 
        [4,0], 
        [5,0], 
        [6,0], 
        [7,0], 
        [8,0], 
        [9,0], 
        [10,0], 
        [11,0], 
        [12,0], 
        [13,0], 
        [14,0], 
        [15,0], 
        [16,0], 
        [17,0], 

        [18,1],
        [18,2],
        [18,3],
        [18,4],
        [18,5],
        [18,6],
        [18,7],
        [18,8],
        [18,9],
        [18,10],
        [18,11],
        [18,12],
        [18,13],
        [18,14],
        [18,15],
        [18,16],
        [18,17],

        [1,18], 
        [2,18], 
        [3,18], 
        [4,18], 
        [5,18], 
        [6,18], 
        [7,18], 
        [8,18], 
        [9,18], 
        [10,18], 
        [11,18], 
        [12,18], 
        [13,18], 
        [14,18], 
        [15,18], 
        [16,18], 
        [17,18], 
      ]
    
      // 应用黑棋和白棋的影响力
      applyInfluenceWithWeight(blackPositions, -1);
      applyInfluenceWithWeight(whitePositions, 1);
      applyInfluenceWithWeightBian(bian);

      console.log("势力范围地图：", influenceMap);
      this.influenceBoard = influenceMap

      //边角坐标计算 边角坐标为黑棋白棋计算影响力


      // this.findDenseRegions(this.board,3,3)
      // const flattenMap = influenceMap.flat();
      // const mean = flattenMap.reduce((sum, val) => sum + val, 0) / flattenMap.length;
      // const stdDev = Math.sqrt(flattenMap.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / flattenMap.length);

      // // 设置阈值，例如大于 mean + stdDev 属于黑棋地盘，小于 mean - stdDev 属于白棋地盘
      // this.whiteTerritoryThreshold = mean + stdDev;
      // this.blackTerritoryThreshold = mean - stdDev;


      // console.log(`黑棋地盘阈值：${this.blackTerritoryThreshold}`);
      // console.log(`白棋地盘阈值：${this.whiteTerritoryThreshold}`);
    }

    isStarPoint(x, y) {
      return this.starPoints.some(point => point[0] === x && point[1] === y);
    }
    checkMoveType(x, y,color) {
      if (this.isStarPoint(x, y)) return "星位";
    
      // 判断小飞、大飞、虎、尖等
      if (
        (this.board[x]?.[y - 1] === color) ||
        (this.board[x]?.[y + 1] === color) ||
        (this.board[x + 1]?.[y] === color) ||
        (this.board[x - 1]?.[y] === color)
      ) {
        // 拐的棋形
        if (this.board[x]?.[y - 1] === color && (this.board[x+1]?.[y - 1] === color||this.board[x-1]?.[y - 1] === color) ||
        (this.board[x]?.[y + 1] === color) &&(this.board[x+1]?.[y + 1] === color||this.board[x-1]?.[y + 1] === color) ||
        (this.board[x + 1]?.[y] === color) &&(this.board[x+1]?.[y - 1] === color||this.board[x+1]?.[y + 1] === color) ||
        (this.board[x - 1]?.[y] === color) &&(this.board[x-1]?.[y - 1] === color||this.board[x-1]?.[y + 1] === color) ) {
          return "弯";
        }
        return "长";
      }
      if (
        (this.board[x - 1]?.[y + 2] ) ||
        (this.board[x + 1]?.[y - 2] ) ||
        (this.board[x - 1]?.[y - 2] ) ||
        (this.board[x + 1]?.[y + 2] ) ||
        (this.board[x - 2]?.[y + 1] ) ||
        (this.board[x + 2]?.[y - 1] ) ||
        (this.board[x - 2]?.[y - 1] ) ||
        (this.board[x + 2]?.[y + 1] )
      ) {
        return "小飞";
      }
    
      // 判断大飞：相对±2, ±2位置上是否有相同颜色棋子
      if (
        (this.board[x - 1]?.[y + 3] === color) ||
        (this.board[x + 1]?.[y - 3] === color) ||
        (this.board[x - 1]?.[y - 3] === color) ||
        (this.board[x + 1]?.[y + 3] === color) ||

        (this.board[x - 1]?.[y + 3] === color) ||
        (this.board[x + 1]?.[y - 3] === color) ||
        (this.board[x - 1]?.[y - 3] === color) ||
        (this.board[x + 1]?.[y + 3] === color)
      ) {
        return "大飞";
      }
    
      // // 判断虎：直线方向上±1位置是否有相同颜色棋子
      // if (
      //   (this.board[x]?.[y + 1] === color) ||
      //   (this.board[x]?.[y - 1] === color) ||
      //   (this.board[x + 1]?.[y] === color) ||
      //   (this.board[x - 1]?.[y] === color)
      // ) {
      //   return "虎";
      // }
    
      // 判断尖：对角方向上±1位置是否有相同颜色棋子
      if (
        (this.board[x - 1]?.[y - 1] === color) ||
        (this.board[x + 1]?.[y + 1] === color) ||
        (this.board[x + 1]?.[y - 1] === color) ||
        (this.board[x - 1]?.[y + 1] === color)
      ) {
        return "尖";
      }
      // 更多棋形规则判断可以继续添加...
    
      return `${y+1} - ${Math.abs(x - 19)}`;
    }
    parseSGF2Board(parsedData){
      return new Promise((resolve) => {
      // FF4  下一级是落子 同一级是分支
      // 检查下一级的下一级
      const datas = parsedData.moves
        this.loopmoves(datas)
      // for (const data of datas) {
      //   // console.log("什么情况",data)


        
      //   for (const element of data.moves) {
          
      //     if (element.B) {
      //       const[nx,ny] =   this.sgfToXY(element.B[0])
      //       this.luoziSGF(nx,ny,-1)
      //     }else if (element.W){
      //       const[nx,ny] =   this.sgfToXY(element.W[0])
      //       this.luoziSGF(nx,ny,1)
      //     }
      //   }        
      // }

      resolve();
    });
    }
    sgfToXY(coord) {
      const x = coord.charCodeAt(0) - 'a'.charCodeAt(0); // 横坐标
      const y = coord.charCodeAt(1) - 'a'.charCodeAt(0); // 纵坐标
      return [y, x];
    }
    playSound(data) {
        console.log(data)
        const audio = new Audio(`public/${data}`); // 替换为音效文件的路径
        audio.play();
    }
    loopmoves(moves){
      if (moves.length == 0) {
        return
      }
            
      for (const move of moves) {

        if (move.properties) {
          console.log("什么情况",move.properties)
          if (move.properties.EV) {
            console.log(move.properties.EV)
            this.event = move.properties.EV[0]
          }
          if (move.properties.PB) {
            console.log(move.properties.PB)
            this.playerB = move.properties.PB[0]
          }
          if (move.properties.BR) {
            console.log(move.properties.BR)
            this.BR = move.properties.BR[0]
          }
          if (move.properties.PW) {
            console.log(move.properties.PW)
            this.playerW = move.properties.PW[0]
          }
          if (move.properties.WR) {
            console.log(move.properties.WR)
            this.WR = move.properties.WR[0]
          }
          if (move.properties.RE) {
            console.log(move.properties.RE)
            this.result = move.properties.RE[0]
          }
          if (move.properties.DT) {
            console.log(move.properties.DT)
            this.date = move.properties.DT[0]
          }
          if (move.properties.GN) {
            console.log(move.properties.GN)
            this.gameName = move.properties.GN[0]
          }
        }
        if (move.W) { //落子
          // console.log(move.W)
          const[nx,ny] =   this.sgfToXY(move.W[0])
          this.luoziSGF(nx,ny,1)
          this.sgfNode = this.node
        } 
        if (move.B) {
            // console.log(move.B)
            const[nx,ny] =   this.sgfToXY(move.B[0])
            this.luoziSGF(nx,ny,-1)
            this.sgfNode = this.node
        }
        if (move.moves) { // 下一个循环
          if (move.moves.length > 3) {
            // 
            if (this.sgfNode) {
              if (this.sgfNode.parent) {
                this.choseNodeSGF(this.sgfNode.parent)
                this.sgfNode = this.sgfNode.parent
              }    
            }
          
            for (const mov of move.moves) {
              if (mov.W) { //落子
                // console.log(move.W)
                const[nx,ny] =   this.sgfToXY(mov.W[0])
                this.luoziSGF(nx,ny,1)
              } 
              if (mov.B) {
                  // console.log(move.B)
                  const[nx,ny] =   this.sgfToXY(mov.B[0])
                  this.luoziSGF(nx,ny,-1)
              }
            }
          }else{
            this.loopmoves(move.moves)
          }
          
        }
      }
      if(this.sgfNode){
        if (this.sgfNode.parent != null &&this.sgfNode.parent != this.rootNode ) {
          this.choseNodeSGF(this.sgfNode.parent)
        }
      }
    }
}