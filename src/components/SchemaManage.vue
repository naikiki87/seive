<template>
  <div>
    <div style="background : gold; font-size:14px; font-weight:bold;"> 데이터스키마 관리 </div>
    <div style="float:left; margin-left : 13px; margin-right : 20px;">
      <SchemaMngList v-bind:propsdata="schemaItems" @removeSchema="removeSchema"></SchemaMngList>
    </div>
    <div style="height : 200px; float:left; border : 1px blue;">
      <!--<SchemaMngSubView></SchemaMngSubView>-->
    </div>
    <SchemaMngInput v-on:addSchema="addSchema"></SchemaMngInput>
    <SchemaMngFooter v-on:removeAll = "clearAll"> </SchemaMngFooter>
  </div>
</template>

<script>
import SchemaMngList from './comp-schema-mng/SchemaMngList.vue'
import SchemaMngInput from './comp-schema-mng/SchemaMngInput.vue'
import SchemaMngFooter from './comp-schema-mng/SchemaMngFooter.vue'
import SchemaMngSubView from './comp-schema-mng/SchemaMngSubView.vue'

export default {
  data() {
    return {
      schemaItems : []
    }
  },
  methods: {
    addSchema(todoItem) {
      localStorage.removeItem("loglevel:webpack-dev-server");
      console.log("here");
      console.log(todoItem[0]);
      localStorage.setItem(localStorage.length, JSON.stringify(todoItem));
      this.todoItems.push(todoItem);
    },
    removeSchema(todoItem, index) {
      console.log("index3 : " + todoItem[0]);
      localStorage.removeItem(todoItem[0]);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components : {
    'SchemaMngList' : SchemaMngList,
    'SchemaMngInput' : SchemaMngInput,
    'SchemaMngSubView' : SchemaMngSubView,
    'SchemaMngFooter' : SchemaMngFooter
  }
}

</script>

<style scoped>

</style>
