<template>
  <div class="pagination">
    <div class="pagination-container">
      <el-pagination
        background
        :layout="layout"
        :total="pageObj.total"
        :page-size="pageObj.pageSize"
        :page-sizes="pageObj.pageSizes"
        @size-change="handleSizeChange"
        @current-change="changePage"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    layout: { type: String, default: 'total, prev, pager, next, jumper, sizes' },
    pageObj: {}
  },
  data() {
    return {}
  }, computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    changePage(page) {
      this.pageObj.pageNumber = page
      this.$emit('fatherMethod')
    },
    handleSizeChange(val) {
      this.pageObj.pageSize = val
      this.$emit('fatherMethod')
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination {
  }
</style>
