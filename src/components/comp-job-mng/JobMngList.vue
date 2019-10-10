<template>
  <div style="height:400px; overflow:auto;">
    <table style=" margin : auto; ">
      <colgroup>
        <col style="width: 50px">
      	<col style="width: 180px">
      	<col style="width: 180px">
      	<col style="width: 300px">
        <col style="width: 50px">
      </colgroup>
      <thead>
      	<tr>
      		<th class="svr_list_title">#</th>
      		<th class="svr_list_title">JOB NAME</th>
      		<th class="svr_list_title">DATA SCHEMA</th>
      		<th class="svr_list_title">JOB DETAIL</th>
          <th class="svr_list_title">DEL</th>
      	</tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in propsdata" class="shadow">
          <td>  {{ propsdata[i][0] }} </td>
          <td>  {{ propsdata[i][1] }} </td>
          <td>  {{ propsdata[i][2] }} </td>
          <td>  {{ propsdata[i][3] }} </td>
          <td>
            <span class="removeBtn" type="button" @click="removeJob(item, i)"> Del
            </span>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeJob(todoItem, index) {
      this.$emit('removeJob', todoItem, index);
    }
  }
}

</script>

<style>
th, td {
  height : 25px;
  padding : 0px;
  border : 0.1px solid #d8d8d8;
  background : #fafafa

}
table {
  font-size : 14px;
  border : 1px solid;
}
</style>
