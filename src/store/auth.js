
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        this.user = res.user
        return true
      } catch (err) {
        alert('Erro ao fazer login')
        return false
      }
    },
    async register(email, password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        this.user = res.user
        return true
      } catch (err) {
        console.error("Erro ao cadastrar:", err.message)
        alert("Erro ao cadastrar: " + err.message)  
        return false
      }
    },
    async logout() {
      await signOut(auth)
      this.user = null
      window.location.href = '/'
    }
  }
})
