<template>
  <div>
    <template v-if="root">
      <el-menu background-color="#304156"
               text-color="#bfcbd9"
               @open="handleOpen"
               @close="handleClose">
        <template v-for="menu in menus">
          <el-submenu v-if="menu.subMenu && menu.subMenu.length > 0" :index="uuid()">
            <template slot="title">
              <i v-if="menu.icon" :class="menu.icon"></i>
              {{ menu.title }}
            </template>
            <menu-tree :menus="menu.subMenu" :root="false"/>
          </el-submenu>
          <el-menu-item v-else :index="uuid()">
            <i v-if="menu.icon" :class="menu.icon"></i>
            {{ menu.title }}
          </el-menu-item>
        </template>
      </el-menu>
    </template>
    <template v-else>
      <template v-for="menu in menus">
        <el-submenu v-if="menu.subMenu && menu.subMenu.length > 0" :index="uuid()">
          <template slot="title">
            <i v-if="menu.icon" :class="menu.icon"></i>
            {{ menu.title }}
          </template>
          <menu-tree :menus="menu.subMenu" :root="false"/>
        </el-submenu>
        <el-menu-item v-else :index="uuid()">
          <i v-if="menu.icon" :class="menu.icon"></i>
          {{ menu.title }}
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import {Menu, Submenu, MenuItem} from "element-ui";
import {v4 as uuid} from "uuid";

export default {
  name: "MenuTree",
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem
  },
  props: {
    root: {
      type: Boolean,
      default: true,
    },
    menus: {
      type: Array,
      required: true,
    }
  },
  methods: {
    uuid() {
      return uuid()
    },
    handleOpen(key, keyPath) {
      console.log(keyPath);
      console.log(keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  }
}
</script>

<style scoped>
</style>
