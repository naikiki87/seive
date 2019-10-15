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
}
</script>
