<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <template v-if="user.role === 'observer' || user.role === 'both'">
        <li><router-link to="/upload-report">Upload Report</router-link></li>
        <li><router-link to="/view-events">View Events</router-link></li>
      </template>
      <template v-if="user.role === 'reviewer' || user.role === 'both'">
        <li><router-link to="/review-reports">Review Reports</router-link></li>
        <li><router-link to="/manage-events">Manage Events</router-link></li>
      </template>
      <li>{{ user.name }} ({{ user.role }})</li>
      <li><button @click="logout">Logout</button></li>
    </ul>
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  setup() {
    const authStore = useAuthStore();

    function logout() {
      authStore.logout();
    }

    return {
      user: authStore.user,
      logout
    };
  }
};
</script>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

nav ul li {
  display: inline;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: blue;
  text-decoration: underline;
}
</style>
