<template>
   <!-- <main> -->
    <div class="boardSide">
    <div ref="myDiv" :style="{backgroundImage:`url(${boardWood[boardWoodChose-1]})`}" class="board">
        <div v-if="isLoading" style="z-index:10;position: absolute; width: 100%; height: 100%; border-radius: 20px; background-color: #FFFFFF9e;">
          <div style="font-family: 'qigong'; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%)">
            <div>
              <img  src="../public/loading.gif" width="100px" alt="">
            </div>
            棋局加载中。。。。。
          </div>
        </div>
        <div class="board-line" v-for="(item, index) in board.board"  :key="index"> 
          <div @click="luozi(index,index1)" class="box" v-for="(items, index1) in item" :key="index1"> 
            
            <div v-if="index==0" class="lineYinBox" style="height: 50%; transform: translate(-50%,100%);"> </div>
            <div v-else-if="index==18" class="lineYinBox" style=" height: 50%;"></div>
            <div v-else class="lineYinBox"></div>
         
            <div v-if="index1==0" class="lineXinBox" style=" width: 50%; transform: translate(100%,50%);"> </div>
            <div v-else-if="index1==18" class="lineXinBox" style=" width: 50%;"></div>
            <div v-else class="lineXinBox"></div>
            
            <div v-if="(index==3&&index1==3)||(index==3&&index1==15)||(index==9&&index1==9)||(index==15&&index1==3)||(index==15&&index1==15)" class="star"></div>    
            
            <img width="50px" height="50px" :class="{stoneTransition:stoneTransitionOpen}" style="position: absolute; z-index: 2;" :style="{ left: board.stoneXY[index][index1][0] + 'px', top: board.stoneXY[index][index1][1] + 'px' }" v-if="items == -1" :src="stone[stoneChose-1][0]" alt="">
            <img width="50px" height="50px" :class="{stoneTransition:stoneTransitionOpen}" style="position: absolute; z-index: 2;" :style="{ left: board.stoneXY[index][index1][0] + 'px', top: board.stoneXY[index][index1][1] + 'px' }" v-else-if="items == 1" :src="stone[stoneChose-1][1]" alt="">
            <div style="position: absolute; z-index: 3; text-align: center; width: 33px; height: 33px; line-height: 33px;" :style="{ left: board.stoneXY[index][index1][0] + 'px', top: board.stoneXY[index][index1][1] + 'px' , color: 'white',fontSize:board.stepBoard[index][index1]>99? 10+'px' : 15+'px'}" v-if="items == -1 && ( setpShow == 3 || (setpShow==2 && nowX == index&& nowY == index1))">
              {{board.stepBoard[index][index1]}}
            </div>
            <div style="position: absolute; z-index: 3; text-align: center; width: 33px; height: 33px; line-height: 33px;" :style="{ left: board.stoneXY[index][index1][0] + 'px', top: board.stoneXY[index][index1][1] + 'px' , color: 'black',fontSize:board.stepBoard[index][index1]>99? 10+'px' : 15+'px'}" v-if="items == 1 && ( setpShow == 3 || (setpShow==2 && nowX == index&& nowY == index1))">
              {{board.stepBoard[index][index1]}}
            </div>
            <div  style="position: absolute; z-index: 3; text-align: center; font-weight: 600; width: 20px; height: 20px;   line-height: 20px;" :style="{ left: 6.5 + 'px', top:6.5 + 'px' , color: 'black',fontSize:board.stepBoard[index][index1]>99? 10+'px' : 15+'px', backgroundImage:`url(${boardWood[boardWoodChose-1]})`}" v-if="items == 0 &&board.stepBoard[index][index1] != 0&&( setpShow == 3 || (setpShow==2 && nowX == index&& nowY == index1))">
              {{board.stepBoard[index][index1]}}
            </div>
            <div v-if="board.influenceBoard[index][index1] >= board.whiteTerritoryThreshold && items == 0" class="diWhite">
            </div>
            <div v-if="board.influenceBoard[index][index1] <= board.blackTerritoryThreshold && items == 0 " class="diBlack">              
            </div>
            <div v-if="items == 0" class="handPointover"><div class="handPoint" :style="{backgroundColor: (board.nowPlay == -1 || items == -1)&&items != 1? 'black' : 'white'}"></div></div>
            <div v-if="index ==18 && index1 == 0"  class="coordinate" >A</div>
            <div v-if="index ==18 && index1 == 1"  class="coordinate" >B</div>
            <div v-if="index ==18 && index1 == 2"  class="coordinate" >C</div>
            <div v-if="index ==18 && index1 == 3"  class="coordinate" >D</div>
            <div v-if="index ==18 && index1 == 4"  class="coordinate" >E</div>
            <div v-if="index ==18 && index1 == 5"  class="coordinate" >F</div>
            <div v-if="index ==18 && index1 == 6"  class="coordinate" >G</div>
            <div v-if="index ==18 && index1 == 7"  class="coordinate" >H</div>
            <div v-if="index ==18 && index1 == 8"  class="coordinate" >I</div>
            <div v-if="index ==18 && index1 == 9"  class="coordinate" >J</div>
            <div v-if="index ==18 && index1 == 10"  class="coordinate" >K</div>
            <div v-if="index ==18 && index1 == 11"  class="coordinate" >L</div>
            <div v-if="index ==18 && index1 == 12"  class="coordinate" >M</div>
            <div v-if="index ==18 && index1 == 13"  class="coordinate" >N</div>
            <div v-if="index ==18 && index1 == 14"  class="coordinate" >O</div>
            <div v-if="index ==18 && index1 == 15"  class="coordinate" >P</div>
            <div v-if="index ==18 && index1 == 16"  class="coordinate" >Q</div>
            <div v-if="index ==18 && index1 == 17"  class="coordinate" >R</div>
            <div v-if="index ==18 && index1 == 18"  class="coordinate" >S</div>


            <div v-if="index ==0  && index1 == 0 "  class="coordinateLeft" >19</div>
            <div v-if="index ==1  && index1 == 0 "  class="coordinateLeft" >18</div>
            <div v-if="index ==2  && index1 == 0 "  class="coordinateLeft" >17</div>
            <div v-if="index ==3  && index1 == 0 "  class="coordinateLeft" >16</div>
            <div v-if="index ==4  && index1 == 0 "  class="coordinateLeft" >15</div>
            <div v-if="index ==5  && index1 == 0 "  class="coordinateLeft" >14</div>
            <div v-if="index ==6  && index1 == 0 "  class="coordinateLeft" >13</div>
            <div v-if="index ==7  && index1 == 0 "  class="coordinateLeft" >12</div>
            <div v-if="index ==8  && index1 == 0 "  class="coordinateLeft" >11</div>
            <div v-if="index ==9  && index1 == 0 "  class="coordinateLeft" >10</div>
            <div v-if="index ==10 && index1 == 0 "  class="coordinateLeft" >9</div>
            <div v-if="index ==11 && index1 == 0 "  class="coordinateLeft" >8</div>
            <div v-if="index ==12 && index1 == 0 "  class="coordinateLeft" >7</div>
            <div v-if="index ==13 && index1 == 0 "  class="coordinateLeft" >6</div>
            <div v-if="index ==14 && index1 == 0 "  class="coordinateLeft" >5</div>
            <div v-if="index ==15 && index1 == 0 "  class="coordinateLeft" >4</div>
            <div v-if="index ==16 && index1 == 0 "  class="coordinateLeft" >3</div>
            <div v-if="index ==17 && index1 == 0 "  class="coordinateLeft" >2</div>
            <div v-if="index ==18 && index1 == 0 "  class="coordinateLeft" >1</div>
            <!-- <div v-if="index1 == 18" style="position: absolute; z-index: 5;" >A</div> -->

            <!-- <img style="position: absolute; z-index: 2; " v-if="items == -1" src="../public/glass_white.png" alt="">
            <img style="position: absolute; z-index: 2; " v-else-if="items == 1" src="../public/glass_black.png" alt=""> -->
          </div>          
        </div>
    </div>
    <div class="bottonLine" style="display: flex;"> 
      <div @click="huiqi" class="opBotton">
        上一手
      </div>
      <div @click="nextSetp" class="opBotton">
        下一手
      </div>
      <div @click="kongzhuo" class="opBotton">
        停一手
      </div>
      <div @click="newgame" class="opBotton">
        新局
      </div>
      <div @click="showSetp" class="opBotton">
        步数{{setpShow}}
      </div>
      <div @click="calculateInfluence" class="opBotton">
        局势分析
      </div>
      <div @click="triggerFileUpload" class="opBotton">
        上传棋局
      </div>
      <div @click="boardWoodChoseFunc" class="opBotton">
        棋盘{{boardWoodChose}}
      </div>
      <div @click="stoneChoseFunc" class="opBotton">
        棋子{{stoneChose}}
      </div>
      <input  ref="fileInput"  type="file" @change="handleFileUpload" accept=".sgf"       style="display: none;"       />

    </div>
  </div>
    <div class="clock">
      <div style="position: absolute; z-index: 5; right:-40px; width: 350px; height: 50px; background-color: aliceblue; box-shadow: 5px 5px 10px gray; background-image: url(../public/wood2.png); background-size: 100% 100%;transform: rotate(20deg);">
      </div>
      <div  style="font-family: 'qigong'; font-size: 20px; line-height: 30px; margin-top: 30px; width: 50%; color: black;">
        <div v-if="board.event != '' ">赛事：{{board.event}}</div>
        <div>对局：{{board.gameName}}</div>
        <div v-if="board.date != '' ">日期：{{board.date}}</div>
        <div >黑棋：{{board.playerB}}{{board.BR}}</div>
        <div > 白棋：{{board.playerW}}{{board.WR}}</div>
        <div v-if="board.result != '' ">结局：{{board.result}}</div>
      </div>
      <div ref="scrollContainer"  class="treeBox">
        <div ref="contentDiv" class="treeBoxIn" >
          <img width="45px" style="position: relative; left: -8px;" src="../public/start.png" alt="">
          <TreeNode  :nodes="rootNode.children" :clickNode = "clickNodeFunc"/>
        </div>
      </div>
      <div>
        <div style="display: flex; ">
          <img src="../public/jilu.png" width="45px" height="30px" alt="">
          <div  v-if="nodeNowGlobal != null" style="font-family: 'qigong'; font-size: 20px; line-height: 30px;">
            第{{nodeNowGlobal.move.step}}手 {{nodeNowGlobal.move.record}}
          </div>
        </div>
        <textarea  name="" id="" style="margin-left: 9px; font-family: 'qigong'; font-size: 20px; font-weight: 500; letter-spacing: 3px; width: 90%; height: 50px; background-color:unset;resize:none; border:none; outline: none"></textarea>    
      </div>
      <!-- <div style="display: flex;">
        <div style="width: 20px; height: 20px; background-color: white;">{{rootNode.move}}</div>
      </div>
      <div  style="width: 2px; height: 10px; background-color: white; margin-left: 9px;"> </div>
      <div style="display: flex;">
        
        <div v-for="item in rootNode.children" :key="item" style="width: 20px; height: 20px; background-color: white; ">  {{item.move}} </div>
        <div style="width: 20px; height: 2px; background-color: white; margin-top:18px; margin-bottom: 0px; " class="treeLine">   </div>
        <div style="width: 30px; height: 2px; background-color: white;  margin-top:18px; margin-bottom: 0px;  "  class="treeLine">   </div>
        <div style="width: 30px; height: 2px; background-color: white;  margin-top:18px; margin-bottom: 0px;  " class="treeLine">   </div>

      </div>
      <div style="display: flex;"> 
        <div style="width: 2px; height: 10px; background-color: white; margin-left: 9px;">   </div>
        <div style="width: 2px; height: 10px; background-color: white; margin-left: calc(18px + 10px);">   </div>
        <div style="width: 2px; height: 10px; background-color: white; margin-left: calc(18px + 10px);">   </div>
        <div style="width: 2px; height: 10px; background-color: white; margin-left: calc(18px + 10px);">   </div>


      </div>
      <div style="display: flex;">
        <div style="width: 20px; height: 20px; background-color: white; border-radius: 100%;">   </div>

        <div style="width: 20px; height: 20px; background-color: white; margin-left: 10px;">   </div>

        <div style="width: 20px; height: 20px; background-color: white; margin-left: 10px;">   </div>

        <div style="width: 20px; height: 20px; background-color: white; margin-left: 10px;">   </div>
      </div> -->
      <!-- {{ moveHistory }} -->
    </div>
  <!-- </main> -->
</template>

<script>
import { Board } from './board';
import TreeNode from './components/TreeNode.vue';
import { parseSGF } from './sgf';
// import jschardet from "jschardet";

export default {
  inject: ['nodeNowGlobal'],
  components:{
    TreeNode,
  },
  computed: {
      nodeNowGlobal() {
        return this.$globalData.nodeNowGlobal;
      }
  },
  
  data() {
    return {
      isLoading:false,
      stoneTransitionOpen:true,
      board:new(Board),
      resizeObserver:null,
      contentDiv: null, // 内容区域的引用
      setpShow:1, // 1 不显示 2只显示最新一手 3显示
      nowX:-1,
      nowY:-1,
      InfluenceStatus:false,
      topline:[[0,1][0,2]],
      parsedData:null,
      fileContent:null,
      boardWood:['../public/board.png','../public/board2.png','../public/board3.png','../public/board4.png'],
      boardWoodChose:1,
      stone:[['../public/stone_-1.svg','../public/stone_1.svg'],['../public/stone2_-1.png','../public/stone2_1.png'],['../public/stone3_-1.png','../public/stone3_1.png'],['../public/stone4_-1.png','../public/stone4_1.png']],
      stoneChose:1,
      lineColor:'black'
    }
  },
  beforeMount(){
     this.rootNode =  this.board.node
  },
  mounted() {
    // this.board.node
    this.scrollContainer = this.$refs.scrollContainer; // 获取 DOM 引用
    this.contentDiv = this.$refs.contentDiv; // 获取 DOM 引用

    this.resizeObserver = new ResizeObserver(() => {
      this.scrollToBottom();
    });

    // 开始监测
    this.resizeObserver.observe(this.contentDiv); // 监测内容区域
  },
  beforeUnmount() {
    // 在组件销毁前停止观察
    this.resizeObserver.disconnect();
  },
  watch: {
    items() {
      this.scrollToBottom(); // 如果 items 改变，则滚动到最底部
    },
    board: {
      handler() {
        this.updateRootNode
      },
      deep: true  // 深度监听
    },
    rootNode:{

      deep: true  // 深度监听

    }
  },
  methods:{
    boardWoodChoseFunc(){
      
      if (this.boardWoodChose == 4) {
        this.boardWoodChose = 1
      }else{
        this.boardWoodChose = this.boardWoodChose +1
      }
    },
    stoneChoseFunc(){
      
      if (this.stoneChose == 4) {
        this.stoneChose = 1
      }else{
        this.stoneChose = this.stoneChose +1
      }
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    scrollToBottom() {
      // 自动滚动到最底部
      console.log("触发滚动")
      this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
    },
    showSetp(){
      if (this.setpShow == 3) {
        this.setpShow = 1
      }else{
        this.setpShow = this.setpShow +1
      }
    },
    showAllSetp(){
        console.log("显示步骤了")
        this.setpShow = 3
    },
    updateRootNode(){
      console.log("落子完成")
      this.rootNode =  this.board.rootNode
    },
    newgame(){
      this.board.newgame()
      this.rootNode =  this.board.node
    },
    kongzhuo(){ //空着
      this.board.kongzhuo()
    },
    huiqi(){ // 悔棋
      this.board.huiqi()
    },
    nextSetp(){ // 悔棋
      this.board.nextStep()
    },
    luozi(x,y) {
      if (this.board.luozi(x,y)){
        this.nowX = x
        this.nowY = y
        if (this.InfluenceStatus) {
          this.board.influenceBoard =  Array.from({ length: 19 }, () => Array(19).fill(0));  
          this.InfluenceStatus = !this.InfluenceStatus
        }
      }
      

    },
    clickNodeFunc(node){
      this.board.choseNode(node)      
    },
    calculateInfluence(){
      if (this.InfluenceStatus) {
        this.board.influenceBoard =  Array.from({ length: 19 }, () => Array(19).fill(0));  
      }else{
        this.board.calculateInfluence()
      }
      this.InfluenceStatus = !this.InfluenceStatus
    },
    async handleFileUpload(event) {
      this.isLoading = true
      const file = event.target.files[0];
      // let fileContent = ""
      if (file) {
        const reader = new FileReader();

         reader.onload =  async (e) => {
          const arrayBuffer = e.target.result;
          // 检测编码
          // const uint8Array = new Uint8Array(arrayBuffer);

          // const encodingDetected = jschardet.detect(Array.from(uint8Array));
          // const encoding = encodingDetected.encoding || "utf-8"; // 默认使用 utf-8

          // 使用 TextDecoder 以检测到的编码解码
          const decoder = new TextDecoder("utf-8");
          
          const fileContent1 = decoder.decode(arrayBuffer);
          try {
            // 使用 sgfparser 库解析 SGF 文件内容
            // const parsed = await parseSGF(fileContent);

            this.fileContent  = fileContent1
            this.parseSGFFunc()
          } catch (error) {
            console.error("文件解析失败:", error);
            this.parsedData = "文件解析失败，请检查文件格式是否正确。";
          }
        };

       

        reader.readAsArrayBuffer(file); // 以文本方式读取文件内容
      }
    },
    async parseSGFFunc(){
        const parsed = await parseSGF(this.fileContent);
        console.log("解析完成")
        this.parsedData = JSON.stringify(parsed, null, 2); // 格式化 JSON 输出
        console.log("数据计算出来吧",this.parsedData)
        await this.board.newgameSGF()
        this.updateRootNode()
        await this.board.parseSGF2Board(parsed);
        // this.updateRootNode()
        this.isLoading = false
        this.showAllSetp();
        
    }
}
}


</script>

<style scoped>
.bottonLine{
  width: 700px;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */
}
.opBotton{
  width: 60px;
  height: 30px; 
  background-color: white; 
  box-shadow: 0px 0px 15px gray; 
  cursor: pointer; 
  margin-left: 10px;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  border-radius: 5px;
  color: black;
  /* color: white; */
}
.boardSide{
}
.diWhite{
  position: absolute;
  z-index: 4; 
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.663);
  left:7px;top:7px;
  border-radius: 5px;
  transition: all 0.3s;
}
.diBlack{
  position: absolute;
  z-index: 4; 
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.601);
  left:7px;top:7px;
  border-radius: 5px;
  transition: all 0.3s;
}
header {
  line-height: 1.5;
}
.my-div {
  display: none;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}
.coordinate{
  position: absolute;
  z-index: 5;
  top:30px;
  left: 15px;
  font-size: 12px;
  color: black;
}
.coordinateLeft{
  position: absolute;
  z-index: 5;
  /* top:30px; */
  left: -15px;
  top: 8px;
  font-size: 12px;
  text-align: right;
  color: black;
}
.handPointover{
  width: 33px;
  height: 33px;
  cursor: pointer;
  position: absolute;
  z-index: 5;
}
.handPoint{
  position: absolute;
  z-index: 6;
  width: 0px;
  height: 0px;
  border-radius: 5px;
  top:10px;
  left:10px;
  background-color: white;
  transition: all 0.1s;
  /* opacity: 0; */
  cursor: pointer;
}
.handPointover:hover .handPoint{
  width: 15px;
  height: 15px;
  /* opacity: 1; */
}
@media (min-width: 1024px) {
  .treeLine1{

  }
  .treeLine2{
    
  }
  .clock{
    width: 400px;
    height: 85vh;
    background-color: rgb(231, 231, 231);
    border-radius: 5px;    
    padding: 20px;
    /* overflow: auto; */
    background-image: url(../public/xuanzhi.jpg);
    /* background-size: auto; */
    background-size:100% 100%;
    position: relative;

  }
  .treeBox{
    margin-top: 50px;
    margin-left: 0px;
    width: 100%;
    height: 55%;
    /* background-color: aliceblue; */
    overflow: scroll;
    user-select: none;
  }
  .treeBoxIn{
    height: auto;
    width: 100%;
    /* background-color: aqua; */
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  
  }



  .board {
    display: none;
    padding: 20px;
    /* background-image: url(../public/wood.jpg); */
    display: grid;
    grid-template-rows: repeat(19, 1fr);    /* 19 行 */
    width: 700px;  /* 棋盘宽度 */
    height: 700px; /* 棋盘高度 */
    margin: 50px;
    /* border: 1px solid black; 棋盘外边框 */
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 0px 20px gray;
    margin-left: 0px;
  }


  .board-line{
    display: grid;
    grid-template-columns: repeat(19, 1fr); /* 19 列 */
    width: 100%;  /* 棋盘宽度 */
    height: 100%; /* 棋盘高度 */
    /* margin: 50px; */
    /* border: 1px solid black; 棋盘外边框 */
    position: relative;
  }
  .board .box{
    position: relative;
    cursor: pointer;
    /* border: 1px solid gainsboro; */
  }
  .board .box img{
    width: 32px;
    height: 32px;
    user-select: none;
    -webkit-user-drag: none;
    opacity: 1;
    /* transition: all 0.2s; */
    filter: drop-shadow(rgba(0, 0, 0, 0.599) 3px 3px 5px);
  }
  .stoneTransition{
    transition: all 0.2s;
  }
  .lineYinBox{
    position: absolute;
    z-index: 1;
    width: 1px;
    height: 100%;
    background-color: rgb(55, 55, 55);
    border: none;
    left: 50%;
    transform: translate(-50%);
  }
  .lineXinBox{
    position: absolute;
    width: 100%;    
    height: 1px;
    background-color: rgb(55, 55, 55);
    border: none;
    bottom:  50%;
    transform: translate(0,50%);
  }

  .star {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: black;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    grid-column: span 1;
    grid-row: span 1;
    justify-self: center;
    align-self: center;
  }



  .bord{
    background-image: url(../public/board.png);
  }
  .bordLine{
    margin-left: 40px;
    display: flex;
  }
  .lineX{
    height: 40px;
    width: 1px;
    margin-right: 40px;
    background-color: black;
  }
  .lineY{
    margin-left: 40px;
    height: 1px;
    width: 739px;
    background-color: black;
  }
}
</style>
