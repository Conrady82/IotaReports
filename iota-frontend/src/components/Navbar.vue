<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <template v-if="user.role === 'observer' || user.role === 'both'">
        <li>
          <button class="nav-button" @click="showUpload = true">Upload Report</button>
          <Modal :visible="showUpload" @close="showUpload = false">
            <FileUpload />
          </Modal>
        </li>
        <li><router-link to="/view-events">View Events</router-link></li>
      </template>
      <template v-if="user.role === 'reviewer' || user.role === 'both'">
        <li><router-link to="/review-reports">Review Reports</router-link></li>
        <li><router-link to="/manage-events">Manage Events</router-link></li>
      </template>
      <li>{{ user.name }} ({{ user.role }})</li>
      <li><button class="nav-button" @click="logout">Logout</button></li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import Modal from './Modal.vue';
import FileUpload from './FileUpload.vue';

export default {
  components: {
    Modal,
    FileUpload
  },
  setup() {
    const authStore = useAuthStore();
    const showUpload = ref(false);

    function logout() {
      authStore.logout();
    }

    return {
      user: authStore.user,
      showUpload,
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

.nav-button {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
  border: none;
  background: none;
  /* font: inherit; */
  font-size: inherit;
}


.nav-button:hover {
  text-decoration: none;
  background-color: hsla(160, 100%, 37%, 0.2);
  cursor: pointer;
}
</style>
