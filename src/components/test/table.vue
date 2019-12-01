<template>
  <div>
    <el-table
      :data="tableObj.tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="(o,i) in tableObj.tableHead"
        :key="o.id"
        :index="i"
        :prop="tableObj.tableFiled[i]"
        :label="o"
      />

      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    tableObj: Object
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: 'detail', query: {
          id: row.id
        }
      })
    }
  }

}
</script>
