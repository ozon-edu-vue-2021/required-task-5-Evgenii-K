<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  // components: {
  //   Form,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
h1, h2, h3, p,
#app {
  height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}

h1 {
  padding-bottom: 20px;
}
</style>
