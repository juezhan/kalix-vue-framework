<template lang="pug">
  div.hello
    h1
      | {{msg}}
    div
      el-button Button
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your kalix-vue-framework App'
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="stylus">
  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983

</style>
