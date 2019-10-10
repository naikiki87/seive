<template>
  <div style="width:95%; margin-left:2%; border : 1px solid;">
    <table style="margin:auto;">
      <tr>
        <td class="add_title"> IP </td>
        <td> <input type="text" v-model="add_ip" placeholder="IP" v-on:keyup.enter="addSvr"> </td>
        <td class="add_title"> Port </td>
        <td> <input type="text" v-model="add_port" placeholder="Port" v-on:keyup.enter="addSvr"> </td>
      </tr>
      <tr>
        <td class="add_title"> Root ID </td>
        <td> <input type="text" v-model="add_id" placeholder="Root ID" v-on:keyup.enter="addSvr"> </td>
        <td class="add_title"> Password </td>
        <td> <input type="text" v-model="add_pw" placeholder="Password" v-on:keyup.enter="addSvr"> </td>
      </tr>
      <tr>
        <td class="add_title"> Role </td>
        <td> <input type="text" v-model="add_role" placeholder="Role" v-on:keyup.enter="addSvr"> </td>
              <td class="add_title"> Output Comp </td>
        <td> <input type="text" v-model="add_outcom" placeholder="Output Computer" v-on:keyup.enter="addSvr"> </td>
      </tr>
      <tr>
        <td class="add_title"> Module </td>
        <td> <input type="text" v-model="add_module" placeholder="Module" v-on:keyup.enter="addSvr"> </td>
        <td class="add_title"> Description </td>
        <td> <input type="text" v-model="add_desc" placeholder="description" v-on:keyup.enter="addSvr"> </td>
      </tr>
    </table>
    <button v-on:click="addSvr"> 추가 </button>
    <button v-on:click="addSvr"> Clear All </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add_ip : '',
      add_port : '',
      add_id : '',
      add_pw : '',
      add_role : '',
      add_outcom : '',
      add_module : '',
      add_desc : ''
    }
  },
  methods: {
    addSvr() {
      if(this.add_ip !== "") {
        var value_ip = this.add_ip && this.add_ip.trim();
        var value_port = this.add_port && this.add_port.trim();
        var value_id = this.add_id && this.add_id.trim();
        var value_pw = this.add_pw && this.add_pw.trim();
        var value_role = this.add_role && this.add_role.trim();
        var value_outcom = this.add_outcom && this.add_outcom.trim();
        var value_module = this.add_module && this.add_module.trim();
        var value_desc = this.add_desc && this.add_desc.trim();

        var value = [];

        localStorage.removeItem("loglevel:webpack-dev-server");

        value[0] = localStorage.length;
        value[1] = value_ip;
        value[2] = value_port;
        value[3] = value_id;
        value[4] = value_pw;
        value[5] = value_role;
        value[6] = value_outcom;
        value[7] = value_module;
        value[8] = value_desc;

        this.$emit('addSvr', value);
        this.clearInput();
      }
    },
    clearInput() {
      this.add_ip = "";
      this.add_port = "";
      this.add_id = "";
      this.add_pw = "";
      this.add_role = "";
      this.add_outcom = "";
      this.add_module = "";
      this.add_desc = "";
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
