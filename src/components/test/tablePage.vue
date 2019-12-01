<template>
  <div class="tablePage">
    <m-table :table-obj="tableObj" />
    <m-pagination
      :page-obj="pageObj"
      @changePage="changePage"
    />
  </div>
</template>
<script>

import mPagination from '@/components/test/pagination'
import mTable from '@/components/test/table'

export default {
  components: { mPagination, mTable },
  props: { tableObj: {}, pageObj: {}},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    changePage() {
      this.$emit('changePage')
    }
  }
}
</script>

<style scoped lang="scss">
  .tablePage {
  }
</style>
