
<template>
  <v-container>
    <h1>Bem-vindo, {{ auth.user?.email }}</h1>
    <v-btn @click="auth.logout">Sair</v-btn>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
const auth = useAuthStore()
</script>
