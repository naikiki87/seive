<template>
  <div>
    <h1> Task manage </h1>
    <button v-on:click="test"> click </button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log("clicked");
      var fso=new ActiveXObject("Scripting.FileSystemObject");
      var filename="C:\\text.txt";
      var delim="\t";

      if (!fso.FileExists(filename)) {
          fso.CreateTextFile(filename,true);
      }
      var f=fso.OpenTextFile(filename,2,true);
      f.Write("Hello");
      f.Close();
    }
  }
}

</script>

<style scoped>

</style>
