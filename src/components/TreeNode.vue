<template>
    <div style="display: flex;">
        <div  v-for="(node,index) in nodes" :key="node">
            <div v-if="nodes.length-1 != index && nodes.length > 1" style="width: 100%; height: 2px; background-color: white; margin-left: 15px;"></div>
            <div v-else-if="index != 0 " style="width: 25px; height: 2px; background-color: white; margin-left: -9px;"></div>
            <div  @click="handleClickNode(node)" style="width: 25px; height: 30px;  margin-left: 5px; cursor: pointer;">

              <div style="width: 2px; height: 10px; background-color: white; margin-left: 9px;">
              </div>
              <img :class="{plus:nodeNowGlobal==node}" class="stones" width="20px" height="20px" v-if="node.move.stone == -1" src="../../public/black_point.png" alt="">
              <img :class="{plus:nodeNowGlobal==node}" class="stones" width="20px" height="20px" v-else-if="node.move.stone == 1" src="../../public/white_point.png" alt="">
              
            </div>
        <!-- 这里是横向排开的 -->
        <!-- 如果有子节点，递归调用 TreeNode -->
        <TreeNode v-if="node.children && node.children.length > 0" :nodes="node.children" :clickNode="clickNode"/>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TreeNode',
    // inject: ['nodeNowGlobal'],
    props: {
      nodes:  Array,
      clickNode:Function,
    },
    computed: {
      nodeNowGlobal() {
        return this.$globalData.nodeNowGlobal;
      }
   },
    data(){
      return{
        nowNode:null
      }
    },
    watch:{
      nodeNowGlobal(newVal){
        // console.log("全局变量", newVal)
        this.nowNode = newVal
      },
    },
    methods: {
        handleClickNode(node) {
            console.log(this.clickNode); // 检查 this.clickNode 是否定义
            this.clickNode(node);
            console.log("修改前",this.$globalData.nodeNowGlobal)
            this.$globalData.nodeNowGlobal = node
            console.log("修改后",this.$globalData.nodeNowGlobal)

        },
        handleClickNodeFund(node) {
          this.clickNode(node);
        }
    } 
  };
  </script>

<style>
.stones{

}
.stones:hover{
  transform: scale(1.3);
}
.plus{
  transform: scale(1.3);
}
</style>
  