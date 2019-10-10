<template>
  <div>
    <div style="background : gold; font-size:14px; font-weight:bold;"> 연산서버 관리 </div>
    <SvrMngList v-bind:propsdata="SvrItems" @removeSvr="removeSvr"></SvrMngList>
    <SvrMngInput v-on:addSvr="addSvr"></SvrMngInput>
    <SvrMngFooter v-on:removeAll = "clearAll"> </SvrMngFooter>
  </div>
</template>

<script>
import SvrMngList from './comp-svr-mng/SvrMngList.vue'
import SvrMngInput from './comp-svr-mng/SvrMngInput.vue'
import SvrMngFooter from './comp-svr-mng/SvrMngFooter.vue'

export default {
  data() {
    return {
      SvrItems : []
    }
  },
  created() {
    for(var i=0; i<localStorage.length; i++) {
      var key_type = JSON.parse(localStorage.key(i));
      if(localStorage.key(i) != "loglevel:webpack-dev-server") {
        if(key_type[0] == "S") {
          var val = localStorage.getItem(localStorage.key(i));
          var arr = JSON.parse(val);
          this.SvrItems.push(arr);
        }
      }
    }
    localStorage.removeItem("loglevel:webpack-dev-server");
  },
  methods: {
    addSvr(todoItem) {
      var id = ["S", localStorage.length];
      localStorage.removeItem("loglevel:webpack-dev-server");
      console.log("here");
      console.log(todoItem[0]);
      localStorage.setItem(JSON.stringify(id), JSON.stringify(todoItem));
      this.SvrItems.push(todoItem);
    },
    removeSvr(todoItem, index) {
      console.log("index3 : " + todoItem[0]);
      localStorage.removeItem(todoItem[0]);
      this.SvrItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.SvrItems = [];
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
