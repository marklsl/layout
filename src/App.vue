<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
    import login from './components/HelloWorld' // 引入login.vue组件
    export default {
        name: 'App',
        components: {
            'login': login
        }
    }
</script>

<style>
</style>