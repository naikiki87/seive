<template>
  <div style="height:400px;">
    <table style=" margin : auto; ">
      <colgroup>
        <col style="width: 50px"> <!-- ID -->
      	<col style="width: 80px"> <!-- Input port -->
      	<col style="width: 80px"> <!-- root ID -->
      	<col style="width: 80px"> <!-- password -->
        <col style="width: 250px"> <!-- status -->
        <col style="width: 100px"> <!-- role -->
      	<col style="width: 100px"> <!-- outcomp -->
        <col style="width: 100px"> <!-- module -->
        <col style="width: 250px"> <!-- desc -->
        <col style="width: 70px"> <!-- delete -->
        <col style="width: 70px"> <!-- show -->
      </colgroup>
      <thead>
      	<tr>
      		<th class="svr_list_title">#</th>
      		<th class="svr_list_title">PORT</th>
      		<th class="svr_list_title">ID</th>
      		<th class="svr_list_title">PW</th>
          <th class="svr_list_title">STATUS</th>
          <th class="svr_list_title">ROLE</th>
      		<th class="svr_list_title">OUTCOMP</th>
      		<th class="svr_list_title">MODULE</th>
          <th class="svr_list_title">DESC</th>
          <th class="svr_list_title">삭제</th>
          <th class="svr_list_title">연결</th>
      	</tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in propsdata" class="shadow">
          <td>  {{ propsdata[i][1] }} </td>
          <td>  {{ propsdata[i][2] }} </td>
          <td>  {{ propsdata[i][3] }} </td>
          <td>  {{ propsdata[i][4] }} </td>
          <td> </td>
          <td>  {{ propsdata[i][5] }} </td>
          <td>  {{ propsdata[i][6] }} </td>
          <td>  {{ propsdata[i][7] }} </td>
          <td>  {{ propsdata[i][8] }} </td>
          <td>
            <span class="removeBtn" type="button" @click="removeTodo(item, i)"> Del
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
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
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
