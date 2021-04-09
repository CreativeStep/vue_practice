<template>
  <div>
    <div>
    {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckEventOrder',
  data () {
    return {
      msg: 'order of events'
    }
  },
  beforeCreate () {
    console.log('beforeCreate: ここはAt this point, events and lifecycle have been initialized.')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    alert('beforeDestroy')
  },
  destroyed () {
    alert('destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
