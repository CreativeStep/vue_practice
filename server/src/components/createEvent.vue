<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <span>{{ message }}</span>
    </div>
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
    }
  },
  beforeCreate () {
    console.log('beforeCreateフック開始')
    // this使えるか
    try {
      this.messages.push('beforeCreateフック: data使えます。')
      console.log('beforeCreateフック: data使えます。')
    } catch (error) {
      console.log(error)
      console.log('beforeCreateフック: data使えません。')
    }
    try {
      console.log(this.testMethod('beforeCreateフックでメソッド呼べた'))
      this.messages.push('beforeCreateフック: イベント使えます。')
    } catch (error) {
      console.log(error)
      console.log('beforeCreateフック: イベント使えません。')
    }
    console.log('beforeCreateフック完了')
  },
  created () {
    console.log('createdフック開始')
    // this使えるか
    try {
      this.messages.push('createdフック: data使えます。')
      console.log('createdフック: data使えます。')
    } catch (error) {
      console.log(error)
      console.log('createdフック: data使えません。')
    }
    try {
      console.log(this.testMethod('createdフックでメソッド呼べた'))
      this.messages.push('createdフック: イベント使えます。')
    } catch (error) {
      console.log(error)
      console.log('createdフック: イベント使えません。')
    }
    console.log('createdフック完了')
  }
}
</script>
<style scoped>
</style>
