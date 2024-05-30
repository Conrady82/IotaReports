<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <a href="https://www.occultwatcher.net/signup" target="_blank">Sign Up</a>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Implement login logic
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for login page here */
  </style>
  