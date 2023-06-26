<template>
  <div style="background-color: white;">
    <div class="menu-operation">
      <el-button type="primary">添加</el-button>
      <el-button type="danger">删除</el-button>
      <el-button type="warning">展开所有</el-button>
    </div>
    <el-table :data="menus" style="width: 100%;margin-bottom: 20px;" row-key="id" border fit
      :default-expand-all="expanded" :tree-props="{ children: 'subMenu' }">
      <el-table-column prop="title" label="菜单">
      </el-table-column>
      <el-table-column label="图标" prop="icon" align="center" width="50px">
        <template slot="header" slot-scope="scope">
          图标
        </template>
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column label="URL" prop="url" align="center">

      </el-table-column>
      <el-table-column label="操作时间" align="center">

      </el-table-column>
      <el-table-column align="center">
        <template slot="header" slot-scope="scope">
          操作
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">更新
          </el-button>
          <el-button size="mini" type="success" @click="">新增
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Input } from "element-ui";
import Vue from "vue";
import { mapState } from "vuex";

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Input)

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    ...mapState("menu", ["menus"])
  },
}
</script>

<style>
.el-table::before {
  height: 0px;
}

.el-table--border::after {
  width: 0px;
}

.el-table--border {
  border-top: 1px solid #EBEEF5;
  border-right: none;
  border-bottom: none;
  border-left: none;
}

.el-table--border .el-table__cell {
  border-right: 0px;
}

.el-table--border th.el-table__cell:not(:last-child) {
  border-right: 1px solid #EBEEF5;
}

.el-table--border td.el-table__cell:not(:last-child) {
  border-right: 1px solid #EBEEF5;
}

.menu-operation {
  padding: 10px 10px 15px 20px;
}
</style>
