<template>
  <div class="test">
    <div class="container">
      <div class="title">
        <div>
          <span class="text">name</span>
        </div>
        <div>
          <el-input v-model="o.name.first" placeholder="请输入内容" />
        </div>
      </div>
      <div class="title">
        <div><span class="text">phone</span></div>
        <div>
          <el-input v-model="o.phone" placeholder="请输入内容" />
        </div>
      </div>

      <div class="title">
        <div><span class="text">email</span></div>

        <div>
          <el-input v-model="o.email" placeholder="请输入内容" />
        </div>
      </div>

      <div class="title">
        <div><span class="text">cell</span></div>

        <div>
          <el-input v-model="o.cell" placeholder="请输入内容" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getList } from '@/api/test'

export default {
  data() {
    return {
      o: { name: {}}
    }
  },
  created() {
    this.get()
  },
  methods: {
    async get() {
      const id = this.$route.query.id
      const o = await getList({ id })
      this.o = o.results[0]
      console.log(this.o)
    }
  }

}
</script>
<style lang='scss'>
  .test {
    .container {
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        margin: 10px 10px;

        input {
          width: 300px;
          margin: 10px
        }
      }
    }
  }

</style>
