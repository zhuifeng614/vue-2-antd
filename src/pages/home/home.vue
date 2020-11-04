<template>
    <a-layout class="layout">
      <a-layout-header class="header"> <Header/> </a-layout-header>
      <a-layout>
        <a-layout-sider class="sider"> <Menus/> </a-layout-sider>
        <a-layout-content class="content">
          <div class="crumbs"> <Crumb /> </div>
          <a-card class="mainCard">
            <Router-view />
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
import Menus from "@/components/menus/menus.vue"
import Header from "@/components/header/header.vue"
import Crumb from "@/components/crumbs/crumb.vue"
export default {
  name: 'Home',
  components:{ Menus, Header, Crumb }
}
</script>

<style lang="less" scoped>
.layout{
    width: 100%;
    height: 100vh;
    .header{
      height: 60px;
      background-color: #206AFF;
      color: #fff;
    }
    .sider{
      background-color: #fff;
      color: #686E7E;
    }
    .content{
      color: #ECECEC;
      padding: 10px;
      .crumbs{
        height: 60px;
        margin: -10px -10px 20px -10px;
        background-color:#FFFFFF;
        line-height: 60px;
        padding: 0 10px;
        color: #838A9D;
      }
      .mainCard{
        width: 100%;
        height: calc(100% - 8px);
      }
    }
}
</style>