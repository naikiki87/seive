<template>
  <div>
    <h1>사용자</h1>
    <ul v-for="tmp in jsonFile">
  <li>{{tmp}}</li>
</ul>
  </div>
</template>

<script>
import userList from "../assets/data/users.json";

export default {
  data() {
    return {
      jsonFile : userList
    }
  }
  /*
  name: "UserList",
  computed: {
    users() { // #1
      return userList.users.map((items) => { // #2
        // #3
          let c = new Date(items["created_date"]);
          let created_date = c.getHours()+"시 "+c.getMinutes()+"분";

          items["created_date"] = created_date;

        return items;
      })
    }
    */
}
</script>
