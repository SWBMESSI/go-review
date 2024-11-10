export function parseSGF(sgf) {
    return new Promise((resolve) => {
      const gameTree = { properties: {}, moves: [] };
      const stack = [gameTree];
      let currentNode = gameTree;
  
      // 正则表达式匹配 SGF 格式
      const propRegex = /([A-Z]+)\[([^\]]*)\]/g;
      const nodes = sgf.match(/\(|\)|;[^;()]*/g) || [];
  
      nodes.forEach(node => {
        if (node === "(") {
          const newNode = { properties: {}, moves: [] };
          currentNode.moves.push(newNode);
          stack.push(currentNode);
          currentNode = newNode;
        } else if (node === ")") {
          currentNode = stack.pop();
        } else if (node.startsWith(";")) {
          // 解析属性
          const properties = {};
          let match;
          while ((match = propRegex.exec(node)) !== null) {
            const [_, key, value] = match;
            if (!properties[key]) {
              properties[key] = [];
            }
            properties[key].push(value);
          }
  
          // 识别落子或游戏信息
          if (properties.B || properties.W) {
            currentNode.moves.push(properties);
          } else {
            Object.assign(currentNode.properties, properties);
          }
        }
      });
      resolve(gameTree);  // 完成后 resolve 解析后的 gameTree
    });
  }
  