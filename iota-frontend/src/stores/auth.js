import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: 'silly willy',
      role: 'both'
    }
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = {
        name: '',
        role: ''
      }
    }
  }
})
