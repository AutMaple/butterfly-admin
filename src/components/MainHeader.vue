<template>
  <div class="header">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="path in menuPath">
          <el-breadcrumb-item>{{ path }}</el-breadcrumb-item>
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
import { mapState } from "vuex";

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
    }
  },
  computed: {
    ...mapState("menu", ["menuPath"])
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
