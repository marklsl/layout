<template>
  <div class="hello">
    <h1 @click="changePageFun(1)">elementUi布局</h1>
    <h1 @click="changePageFun(2)">flex布局</h1>
    <h1 @click="changePageFun(3)">float布局</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
      changePageFun:function(code){
          if(code==1){
              this.$router.push("elementUi");
          }else if(code==2){
              this.$router.push("float");
          }else if(code==3){
              this.$router.push("box");
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
