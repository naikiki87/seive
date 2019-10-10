<template>
  <div>
    <h1> Svr manage </h1>
    <SvrMngList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></SvrMngList>
    <SvrMngInput v-on:addTodo="addTodo"></SvrMngInput>
    <SvrMngFooter v-on:removeAll = "clearAll"> </SvrMngFooter>
  </div>
</template>

<script>
import SvrMngList from './SvrMngList.vue'
import SvrMngInput from './SvrMngInput.vue'
import SvrMngFooter from './SvrMngFooter.vue'

export default {
  data() {
    return {
      todoItems : []
    }
  },
  created() {
    for(var i=0; i<localStorage.length; i++) {
      if(localStorage.key(i) != "loglevel:webpack-dev-server") {
        //console.log(localStorage.key(i));
        var val = localStorage.getItem(localStorage.key(i));
        var arr = JSON.parse(val);
        this.todoItems.push(arr);
      }
    }
    localStorage.removeItem("loglevel:webpack-dev-server");
  },
  methods: {
    addTodo(todoItem) {
      localStorage.removeItem("loglevel:webpack-dev-server");
      console.log("here");
      console.log(todoItem[0]);
      localStorage.setItem(localStorage.length, JSON.stringify(todoItem));
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      console.log("index3 : " + todoItem[0]);
      localStorage.removeItem(todoItem[0]);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  components: {
    'SvrMngList' : SvrMngList,
    'SvrMngInput' : SvrMngInput,
    'SvrMngFooter' : SvrMngFooter

  }
}
</script>

<style scoped>

</style>
