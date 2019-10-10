<template>
  <div id = "app">
    <JsonTest></JsonTest>
    <Header> </Header>
    <div id="tab-list" style="background : #0a1b2a; height : 50px; padding : 0px; margin:8px; margin-bottom : 20px;">
      <div id="tb_1" class="tabmenu" v-on:click="tabChange('tb_1', 'svrManage')"> 연산서버 관리 </div>
      <div id="tb_2" class="tabmenu" v-on:click="tabChange('tb_2', 'schemaManage')"> 데이터스키마 </div>
      <div id="tb_3" class="tabmenu" v-on:click="tabChange('tb_3', 'jobManage')"> JOB 생성/관리 </div>
      <div id="tb_4" class="tabmenu" v-on:click="tabChange('tb_4', 'taskManage')"> TASK 등록/관리 </div>
    </div>
    <div id="svrManage" class="tabcontent" style="width:95%; margin-left:2%; border : 1px solid; display : none;">
      <SvrManage> </SvrManage>
    </div>
    <div id="schemaManage" class="tabcontent" style="width:95%; height: 400px; margin-left:2%; border : 1px solid; display:none;">
      <SchemaManage> </SchemaManage>
    </div>
    <div id="jobManage" class="tabcontent" style="width:95%; height: 400px; margin-left:2%; border : 1px solid; display:none;">
      <JobManage> </JobManage>
    </div>
    <div id="taskManage" class="tabcontent" style="width:95%; height: 400px; margin-left:2%; border : 1px solid; display:none;">
      <TaskManage> </TaskManage>
    </div>
   </div>
</template>

<script>
import JsonTest from './components/JsonTest.vue'
import Header from './components/Header.vue'
import SvrManage from './components/SvrManage.vue'
import SchemaManage from './components/SchemaManage.vue'
import JobManage from './components/JobManage.vue'
import TaskManage from './components/TaskManage.vue'

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
    tabChange(tab_id, tab_content) {
      /*
      console.log("fnc op");
      var x = document.getElementsByClassName("temptest");
      console.log(x.length);
      x[0].style.display = 'none';
      */

      var x = document.getElementsByClassName("tabcontent");
      var i;
      console.log("len : " + x.length);


      for (i = 0; i < x.length; i++) {
          x[i].style.display = 'none';
      }

      document.getElementById(tab_content).style.display = 'block';

      var x = document.getElementsByClassName("tabmenu");
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].className = 'tabmenu';
      }
      document.getElementById(tab_id).className = 'tabmenu active';
    },
    addTodo(todoItem) {
      //console.log("len : " + localStorage.length);
      localStorage.removeItem("loglevel:webpack-dev-server");
      localStorage.setItem(localStorage.length, JSON.stringify(todoItem));
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      //console.log("Hello");
      //console.log("index : " + index);
      //console.log("index1 : " + todoItem[0]);
      //console.log("index1 : " + index);
      //console.log("index2 : " + localStorage.getItem(0));
      console.log("index3 : " + todoItem[0]);
      localStorage.removeItem(todoItem[0]);
      this.todoItems.splice(index, 1);
      //localStorage.removeItem(localStorage.key(index));
      //localStorage.removeItem("loglevel:webpack-dev-server");
      //this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    'JsonTest' : JsonTest,
    'Header' : Header,
    'SvrManage' : SvrManage,
    'SchemaManage' : SchemaManage,
    'JobManage' : JobManage,
    'TaskManage' : TaskManage
  }
}

</script>

<style>
body {
  text-align : center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width : 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}

.tabmenu {
  float : left;
  padding : 0px;
  height : 48px;
  width : 105px;
  padding-top : 14px;
  color : white;
  font-size : 13px;
}
.active {
  font-size : 14px;
  font-weight:bold;
  color : gold;
}
p {
  color : white;
  font-weight : bold;

}
</style>
