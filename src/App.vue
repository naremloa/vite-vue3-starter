<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>
    <el-button @click="jumpTo('Home')"> home click! </el-button>
    <el-button @click="jumpTo('Axios')">axios click!</el-button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, RouteRecordName } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: { HelloWorld },
  setup() {
    const router = useRouter();
    const jumpTo = (target: RouteRecordName) => router.push({ name: target });
    return {
      jumpTo,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
