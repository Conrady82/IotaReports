<template>
  <div id="app">
    <Navbar v-if="authStore.isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import { useAuthStore } from './stores/auth';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore
    };
  }
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>

