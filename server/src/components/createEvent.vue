<template>
  <div>
    <span>this使えるイベント：</span>
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
      messages: []
    }
  },
  methods: {
    testMethod (str) {
      return str
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
    // this使えるか
    try {
      this.messages.push('beforeCreate')
    } catch (error) {
      console.log(error)
    }
    try {
      console.log(this.testMethod('beforeCreateでメソッド呼べた'))
    } catch (error) {
      console.log(error)
    }
  },
  created () {
    console.log('created')
    // this使えるか
    try {
      this.messages.push('created')
      console.log(this.testMethod('createdでメソッド呼べた'))
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>
</style>
