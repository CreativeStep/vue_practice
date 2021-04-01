<template>
  <div>
    <div v-for="(msg1, index) in messages" :key="index">
    {{ msg1 }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      messages: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
    if (this.messages) {
      this.messages.push('beforeCreate')
    }
  },
  created () {
    console.log('created')
    // dataが作られる
    if (this.messages) {
      this.messages.push('created')
    }
  },
  beforeMount () {
    console.log('beforeMount')
    // dataが作られる
    if (this.messages) {
      this.messages.push('beforeMount')
    }
  },
  mounted () {
    console.log('mounted')
    // dataが作られる
    if (this.messages) {
      this.messages.push('mounted')
    }
  },
  activated () {
    console.log('activated')
    if (this.messages) {
      this.messages.push('activated')
    }
  },
  deactivated () {
    console.log('deactivated')
    if (this.messages) {
      this.messages.push('deactivated')
    }
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    if (this.messages) {
      this.messages.push('beforeDestroy')
    }
  },
  destroyed () {
    console.log('mounted')
    if (this.messages) {
      this.messages.push('destroyed')
    }
  },
  errorCaptured () {
    console.log('errorCaptured')
    if (this.messages) {
      this.messages.push('errorCaptured')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
