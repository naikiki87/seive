<template>
  <div>
    <div style="background : gold; font-size:14px; font-weight:bold;"> JOB 생성/관리 </div>
    <JobMngList v-bind:propsdata="jobItems" @removeJob="removeJob"></JobMngList>
    <JobMngInput v-on:addJob="addJob"></JobMngInput>
    <JobMngFooter v-on:removeAll = "clearAll"> </JobMngFooter>
  </div>
</template>

<script>
import JobMngList from './comp-job-mng/JobMngList.vue'
import JobMngInput from './comp-job-mng/JobMngInput.vue'
import JobMngFooter from './comp-job-mng/JobMngFooter.vue'

export default {
  data() {
    return {
      jobItems : []
    }
  },
  created() {
    for(var i=0; i<localStorage.length; i++) {
      var key_type = JSON.parse(localStorage.key(i));
      if(localStorage.key(i) != "loglevel:webpack-dev-server") {
        if(key_type[0] == "J") {
          var val = localStorage.getItem(localStorage.key(i));
          var arr = JSON.parse(val);
          this.jobItems.push(arr);
        }
      }
    }
    localStorage.removeItem("loglevel:webpack-dev-server");
  },
  methods: {
    addJob(todoItem) {
      var id = ["J", localStorage.length];
      localStorage.removeItem("loglevel:webpack-dev-server");
      //localStorage.setItem("J" + localStorage.length, JSON.stringify(todoItem));
      localStorage.setItem(JSON.stringify(id), JSON.stringify(todoItem));
      this.jobItems.push(todoItem);
    },
    removeJob(todoItem, index) {
      console.log("index3 : " + todoItem[0]);
      localStorage.removeItem(todoItem[0]);
      this.jobItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.jobItems = [];
    }
  },

  components: {
    'JobMngList' : JobMngList,
    'JobMngInput' : JobMngInput,
    'JobMngFooter' : JobMngFooter

  }
}
</script>

<style scoped>

</style>
