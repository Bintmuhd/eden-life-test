<template>
  <div class="main-div">
  <Home />
    <router-view/>
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background: var(--sec);
}

:root {
  --main: #003F7F; 
  --sec:  #ECF0F3;
}

body {
  margin: 0;
}

.main-div {
  padding: 2rem;
}
</style>
