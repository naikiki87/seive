<template>
  <div id="app">
    <button onclick="test2"> test1 </button>
    <button v-on:click="test"> click </button>
    <div v-for="(post, index) in posts"> 1. {{ index }} {{ post.firstname }} {{ post.lastname }} </div>

    <div v-for="name in firstnames"> 2. {{ name }} </div>
    <div v-for="name in lastnames">3. {{ name }} </div>
    <div v-for="name in names2">4. {{ name }} </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import user from './assets/data/users.json'
import axios from 'Axios'

export default {
  name: 'app',
  data: function () {
    return {
      posts: [],
      names2 : []
    }
  },
  methods: {
    test() {

      /*
      var fs = require('fs');
      console.log("입출력 수행");

      var data = fs.readFileSync('./exam.txt', 'utf8');
      console.log('완료');
      console.log(data);
      */
      //var object = {item1 : "test1", item2 : "test2"};
      //var stringJson = JSON.stringify(object) + '\n';


    }
  },
  computed: {
    firstnames() {
      return user.users.map((item) => {
        this.names2.push(item.lastname);
        return item.firstname;
      })
    },
    lastnames() {
      return user.users.map((item) => {
        return item.lastname;
      })
    }
  },
  created() {
    //getData(){
      //const baseurl = 'https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json';
    const baseurl = 'https://naikiki87.github.io/seive/src/assets/data/users.json';

    axios
    .delete('/static/users.json')
    .then((response) => {
      console.log(response);
    });
    /*
    .get('/static/users.json')
    .then((response) => {
      this.posts = response.data.users
      console.log(response); // 객체 형태로 반환. 파싱작업 불필요
      console.log(this.posts.length);
    });
    */
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 560px;
}
</style>
