<template>
  <div style="width:95%; margin-left:2%; border : 1px solid;">
    <table style="margin:auto;">
      <tr>
        <td class="add_title"> Name </td>
        <td> <input type="text" v-model="add_job_name" placeholder="name" v-on:keyup.enter="addJob"> </td>
        <td class="add_title"> Data Schema </td>
        <td> <input type="text" v-model="add_job_schema" placeholder="schema" v-on:keyup.enter="addJob"> </td>
      </tr>
    </table>
    <button v-on:click="addJob"> 추가 </button>
    <button v-on:click="addJob"> Clear All </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add_job_name : '',
      add_job_schema : ''
    }
  },
  methods: {
    addJob() {
      if(this.add_job_name !== "") {
        var value_name = this.add_job_name && this.add_job_name.trim();
        var value_schema = this.add_job_schema && this.add_job_schema.trim();

        var value = [];

        localStorage.removeItem("loglevel:webpack-dev-server");

        value[0] = localStorage.length;
        value[1] = value_name;
        value[2] = value_schema;

        this.$emit('addJob', value);
        this.clearInput();
      }
    },
    clearInput() {
      this.add_job_name = "";
      this.add_job_schema = "";
      this.add_job_detail = "";
    }
  }
}

</script>

<style>
.add_title {
  width : 150px;
  background: #e6e6e6;
}

input:focus {
  outline : none;
}
.inputBox {
  background: white;
  height : 50px;
  line-height: 50px;
  border-radius: 5px;
}
.addContainer {
  float : right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width : 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color : white;
  vertical-align: middle;
}
</style>
