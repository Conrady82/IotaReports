<template>
    <h1>HELLO HOME VIEW</h1>
    <!-- <div class="home-container">
      <h2>Welcome, {{ user.name }}</h2>
      <div v-if="user.role === 'observer' || user.role === 'both'">
        <h3>Observer Functions</h3>
        <ul>
          <li><router-link to="/upload-report">Upload Report</router-link></li>
          <li><router-link to="/view-events">View Events</router-link></li>
        </ul>
      </div>
      <div v-if="user.role === 'reviewer' || user.role === 'both'">
        <h3>Reviewer Functions</h3>
        <ul>
          <li><router-link to="/review-reports">Review Reports</router-link></li>
          <li><router-link to="/manage-events">Manage Events</router-link></li>
        </ul>
      </div>
    </div> -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'User Name',
          role: 'both' // This should be dynamically set based on the logged-in user
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for home page here */
  </style>
  