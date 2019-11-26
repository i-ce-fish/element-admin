<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="name.first"
        label="name"
      />
      <el-table-column
        prop="gender"
        label="gender"
      />
      <el-table-column
        prop="email"
        label="email"
      />
      <el-table-column
        prop="phone"
        label="phone"
      />

      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :page-obj="pageObj"
      :layout="layout"
      @fatherMethod="getList"
    />
  </div>
</template>

<script>
import { getList } from '@/api/test'
import pagination from '@/components/test/pagination'

export default {
  components: { pagination },
  data() {
    return {
      tableData: [],
      layout: 'total, prev, pager, next, sizes',
      pageObj: {
        total: 100,
        pageNumber: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 40, 50]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const o = await getList({ page: this.pageObj.pageNumber, results: this.pageObj.pageSize })
      this.tableData = o.results
      this.listLoading = false
    }

  }

}
</script>
