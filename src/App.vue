<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <menu-tree :menus="menus" />
      </el-aside>
      <el-main>
        <main-header />
        <menu-manage />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {
  Main,
  Aside,
  Container
} from "element-ui";
import Vue from "vue";
import MenuTree from "@/components/MenuTree.vue";
import MainHeader from "@/components/MainHeader.vue";
import MenuManage from "@/components/MenuManage.vue";
import { mapActions, mapState } from "vuex";


Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    MenuManage,
    Main,
    Aside,
    Container,
    MenuTree,
    MainHeader
  },
  methods: {
    ...mapActions("menu", ["loadMenus"]),
  },
  computed: {
    ...mapState("menu", ["menus"])
  },
  created() {
    this.loadMenus()
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.el-aside,
el-container {
  height: 100vh;
  overflow: hidden;
}

.el-aside {
  background-color: #304156;
}

.el-main {
  background-color: #f3f4f4;
}
</style>
