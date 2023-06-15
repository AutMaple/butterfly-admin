<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <menu-tree :menus="menus" />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import {
  Main,
  Aside,
  Container
} from "element-ui";
import MenuTree from "@/components/MenuTree.vue";
import Vue from "vue";
import axios from "axios";


Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)

export default {
  name: 'App',
  data() {
    return {
      menus: [],
    }
  },
  components: {
    Main,
    Aside,
    Container,
    MenuTree
  },
  methods: {},
  created() {
    axios.get("http://localhost:8080/menu")
      .then((res) => {
        this.menus = res.data
        console.log(this.menus)
      })
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
  background-color: skyblue;
}
</style>
