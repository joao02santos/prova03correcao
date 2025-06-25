
<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field label="Email" v-model="email" />
      <v-text-field label="Senha" v-model="password" type="password" />
      <v-btn type="submit">Entrar</v-btn>
      <p>Ainda não tem conta? <router-link to="/register">Cadastre-se</router-link></p>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const login = async () => {
  const success = await auth.login(email.value, password.value)
  if (success) router.push('/dashboard')
}
</script>
