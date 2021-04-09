<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <span>{{ message }}</span>
    </div>
    <button v-on:click="back">戻る</button>
  </div>
</template>

<script>
export default {
  name: 'create',
  data () {
    return {
      messages: ['createフックの確認：']
    }
  },
  methods: {
    testMethod (str) {
      return str
    },
    back () {
      // オブジェクト
      console.log('go back')
      this.$router.push('/')
    }
  },
  beforeCreate () {
    console.log('beforeCreateフック開始')
    alert('beforeCreate')
    console.log('beforeCreateフック完了')
  },
  created () {
    console.log('createdフック開始')
    alert('created')
    console.log('createdフック完了')
  },
  beforeMount () {
    console.log('beforeMountフック開始')
    alert('beforeMount')
    console.log('createdフック完了')
  },
  mounted () {
    console.log('mountedフック開始')
    alert('mounted')
    console.log('mountedフック完了')
  },
  beforeUpdate () {
    console.log('beforeUpdateフック開始')
    alert('beforeUpdate')
    console.log('beforeUpdateフック完了')
  },
  updated () {
    console.log('updatedフック開始')
    alert('updated')
    console.log('updatedフック完了')
  },
  beforeDestroy () {
    console.log('beforeDestroyフック開始')
    alert('beforeDestroy')
    console.log('beforeDestroyフック完了')
  },
  destroyed () {
    console.log('destroyedフック開始')
    alert('destroyed')
    console.log('destroyedフック完了')
  }
}
</script>
<style scoped>
</style>
