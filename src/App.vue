<template>
  <div>
    <h3>商品管理</h3>
    <hr />

    <!-- 引入表格组件 -->
    <Table :data="goodslist">
      <!-- 表格标题 -->
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- 商品表格 -->
      <template v-slot:body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>{{ row.tags.join('，') }}</td>
        <td>
          <button type="button" class="btn-danger btn-sm">删除</button>
        </td>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from './components/Table.vue'
export default {
  name: 'App',
  data() {
    return {
      // 商品列表数据
      goodslist: []
    }
  },
  components: {
    Table
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/get')
      if (res.status !== 0) return console.log('商品获取失败')
      this.goodslist = res.data
    }
  },
  created() {
    // 发起请求
    this.getGoodsList()
  }
}
</script>

<style lang="less" scoped></style>
