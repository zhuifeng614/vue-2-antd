<template>
  <div>
    <a-menu
      :selected-keys="[pitchKey]"
      :open-keys="[]"
      mode="inline"
      theme="light"
      class="menus"
    >
    <template v-for="item in menusList">
      <a-menu-item v-if="!item.children" :key="item.name">
        <router-link :to="item.path">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </router-link>
      </a-menu-item>
      <!-- <a-sub-menu v-else :key="item.name">
        <span slot="title"><a-icon :type="item.icon" /><span>{{item.title}}</span></span>
        <a-menu-item v-for="subItem in item.children" :key="subItem.name">
          <router-link :to="subItem.path">
            <a-icon :type="subItem.icon" />
            <span>{{subItem.title}}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu> -->
    </template>
    </a-menu>
  </div>
</template>

<script>
import menusArr from "@/assets/navconfig.js"
export default {
  name: "Menus",
  data() {
    return {
      menusList:[], //menus数据
      pitchKey:'',
    };
  },
  watch:{
    $route:{
      handler(val){
        const {path} = val
        this.pitchKey = path.split("/").reverse()[0]
      },
      deep: true
    }
  },
  created(){
    this.menusList = menusArr
    const {path} = this.$route
    this.pitchKey = path.split("/").reverse()[0]
  },
};
</script>

<style lang="less" scoped>
.menus{
  height: 100%;
}
</style>