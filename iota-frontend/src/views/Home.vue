<template>
    <h1>HOME VIEW</h1>
    <div class="home-container">
      <h2>Welcome, {{ user.name }}</h2>
      <div v-if="user.role === 'observer' || user.role === 'both'">
        <h3>Observer Functions</h3>
        <ul>
          <li><RouterLink to="/upload-report">Upload Report</RouterLink></li>
          <li><RouterLink to="/view-events">View Events</RouterLink></li>
        </ul>
      </div>
      <div v-if="user.role === 'reviewer' || user.role === 'both'">
        <h3>Reviewer Functions</h3>
        <ul>
          <li><RouterLink to="/review-reports">Review Reports</RouterLink></li>
          <li><RouterLink to="/manage-events">Manage Events</RouterLink></li>
        </ul>
      </div>
    </div>
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
  