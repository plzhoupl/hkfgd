<style scoped>
  #menu{
    /*position: absolute;*/
    /*width: 1000px;*/
    line-height: 60px;
    z-index: 999;
    /*color: white;*/
    cursor: pointer;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    background: white;
  }
  .item{
    background: transparent;
  }
  .menu:hover{
    color: #E74C3C;
    font-weight: bold;
    text-decoration: underline;
  }
  .menu{
    display: block;
    margin-top: 65px;
    line-height: 50px;
    width: 80px;
    /*padding: 10px 20px 10px 20px;*/
  }
  .logo{
    margin-top: 20px;
  }
</style>

<template>
    <el-row id="menu">
      <el-col class="logo" :span="6"><img src="../../assets/logo.png" width="220px"/></el-col>
      <el-col class="list" v-for="menu in menus" :span="2" > <span v-on:click="selectMenu(menu)"  :class="selectMenus==menu ?
       'select-item menu' :'item menu'" >{{menu}}</span> </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'title',
    props:["menus","selectMenus"],
    methods: {
      selectMenu(menu) {
        this.$emit("selectMenus",menu)
      }
    }
  }

</script>
