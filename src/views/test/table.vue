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
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="100"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>

<script>
import { getList } from '@/api/test'

export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const o = await getList({ page: this.currentPage, results: this.pagesize })
      this.tableData = o.results
      this.listLoading = false
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getList()
    },
    handleClick(row) {
      this.$router.push({
        path: 'detail', query: {
          id: row.id.value
        }
      })
    }
  }

}
</script>
