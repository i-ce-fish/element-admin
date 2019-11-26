<template>
  <div>
    <m-table :table-obj="tableObj" ></m-table>
    <pagination
      :page-obj="pageObj"
      :layout="layout"
      @fatherMethod="getList">
    </pagination>
  </div>
</template>

<script>
import { getList } from '@/api/test'
import pagination from '@/components/test/pagination'
import mTable from '@/components/test/table'

export default {
  components: { pagination, mTable },
  data() {
    return {
      layout: 'total, prev, pager, next, sizes',
      pageObj: {
        total: 100,
        pageNumber: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 40, 50]
      },
      tableObj: {
        tableHead: ['name', 'gender', 'email', 'phone'],
        tableFiled: ['name', 'gender', 'email', 'phone', 'id'],
        tableData: []
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.tableObj.tableData = []
      const o = await getList({ page: this.pageObj.pageNumber, results: this.pageObj.pageSize })

      o.results.forEach((item) => {
        this.tableObj.tableData.push({
          name: item.name.first,
          gender: item.gender,
          email: item.email,
          phone: item.phone,
          id: item.id.value
        })
      })
    }

  }

}
</script>
