
<template>
  <v-container>
    <v-form @submit.prevent="register">
      <v-text-field label="Email" v-model="email" />
      <v-text-field label="Senha" v-model="password" type="password" />
      <v-btn type="submit">Cadastrar</v-btn>
      <p>Já tem conta? <router-link to="/">Entrar</router-link></p>
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

const register = async () => {
  const success = await auth.register(email.value, password.value)
  if (success) {
        alert('Cadastro realizado com sucesso! Faça login para continuar.')
    router.push('/')
  }
}
</script>
