<template>
  <header class="w-full bg-white shadow-sm">
    <div class="container mx-auto flex items-center justify-between py-2 px-6">
      <div class="flex items-center space-x-2">
        <!-- Logo Placeholder -->
        <div class=" flex items-center justify-center">
          <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-16 h-16" />
        </div>
      </div>
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-blue-600 font-medium">Home</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
        <router-link to="/login" class="px-5 py-1 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">Login</router-link>
        <!-- <button class="px-5 py-1 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">SignUp</button> -->
      </nav>
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div v-if="menuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
      <a href="#" class="text-blue-600 font-medium">Home</a>
      <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
      <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
      <router-link to="/login" class="px-5 py-1 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">Login</router-link>
      <!-- <button class="px-5 py-1 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">SignUp</button> -->
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script> 