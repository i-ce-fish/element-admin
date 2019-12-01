<template>
  <div>
    <m-table-page
      :table-obj="tableObj"
      :page-obj="pageObj"
      @changePage="getList"
    />
  </div>
</template>

<script>
import { getList } from '@/api/test'
import mTablePage from '@/components/test/tablePage'

export default {
  components: { mTablePage },
  data() {
    return {
      pageObj: {
        layout: 'total, prev, pager, next, sizes',
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
