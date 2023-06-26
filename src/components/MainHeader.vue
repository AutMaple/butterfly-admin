<template>
  <div class="header">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="crumb in crumbs">
          <el-breadcrumb-item v-if="crumb.url && crumb.url.length > 0" :to="{ path: crumb.url }">
            {{ crumb.content }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else>
            {{ crumb.content }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="tags">
      <el-tag v-for="tag in tags" :type="tag.type" :key="tag.name" size="small" closable>
        {{ tag.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem, Tag } from "element-ui";
import Vue from "vue";

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
export default {
  name: "MainHeader",
  components: {
    [BreadcrumbItem.name]: BreadcrumbItem,
    [Breadcrumb.name]: Breadcrumb,
    [Tag.name]: Tag
  },
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
      crumbs: [
        { content: "首页" },
        { content: "系统管理" },
        { content: "菜单管理" },
      ]
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 10px;
}

.el-tag {
  margin-left: 10px;
}

.el-tag:first-child {
  margin-left: 0px;
}

.header {
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
