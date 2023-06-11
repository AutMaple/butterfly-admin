<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <menu-tree :menus="menus"/>
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

const menus = [
  {
    "title": "首页",
    "icon": "el-icon-menu"
  },
  {
    "title": "系统管理",
    "icon": "el-icon-s-tools",
    "subMenu": [
      {
        "title": "用户管理"
      },
      {
        "title": "角色管理"
      },
      {
        "title": "菜单管理"
      },
      {
        "title": "部门管理"
      },
      {
        "title": "岗位管理"
      },
      {
        "title": "字典管理"
      },
      {
        "title": "参数设置"
      },
      {
        "title": "通知公告"
      },
      {
        "title": "日志管理",
        "subMenu": [
          {
            "title": "操作日志"
          },
          {
            "title": "登录日志"
          }
        ]
      },
    ]
  },
  {
    "title": "系统监控",
    "icon": "el-icon-cpu",
    "subMenu": [
      {
        "title": "在线用户"
      },
      {
        "title": "定时任务"
      },
      {
        "title": "数据监控"
      },
      {
        "title": "服务监控"
      },
      {
        "title": "缓存监控"
      },
      {
        "title": "缓存列表"
      }
    ]
  },
  {
    "title": "系统工具",
    "icon": "el-icon-monitor",
    "subMenu": [
      {
        "title": "表单构建"
      },
      {
        "title": "代码生成"
      },
      {
        "title": "系统接口"
      }
    ]
  }
]

Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)

export default {
  name: 'App',
  data() {
    return {
      menus: menus,
    }
  },
  components: {
    Main,
    Aside,
    Container,
    MenuTree
  },
  methods: {}
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.el-aside, el-container {
  height: 100vh;
  overflow: hidden;
}

.el-aside {
  background-color: red;
}

.el-main {
  background-color: skyblue;
}

#app {

}
</style>
