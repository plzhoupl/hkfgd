<style scoped>
  #menu{
    position: absolute;
    width: 1000px;
    margin-left: 15%;
    line-height: 120px;
    z-index: 999;
    color: white;
    cursor: pointer;
  }
  .item{
    background: transparent;

  }
  .select-item{
    background: deepskyblue;
    border-radius: 5px;
  }
  .menu{
    margin-top: 40px;
    line-height: 50px;
    width: 80px;
    padding: 10px 20px 10px 20px;
  }
  .logo{
    margin-top: 20px;
  }
</style>

<template>
    <el-row id="menu">
      <el-col class="logo" :span="3"><img src="../../assets/logo.png" width="150px"/></el-col>
      <el-col v-for="menu in menus":span="3" > <span v-on:click="selectMenu(menu)"  :class="selectMenus==menu ?
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
