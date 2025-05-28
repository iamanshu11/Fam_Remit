<template>
  <header class="w-full bg-white shadow-sm">
    <div class="container mx-auto flex items-center justify-between py-2 px-6">
      <div class="flex items-center space-x-2">
        <router-link to="/">
          <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-20 h-16" />
        </router-link>
      </div>
      <nav class="hidden md:flex items-center space-x-8">
        <router-link to="/" class="text-[#0579D8]  font-medium">Home</router-link>
        <!-- <router-link to="" class="text-gray-600 hover:text-blue-600">About</router-link>
        <router-link to="" class="text-gray-600 hover:text-blue-600">Contact</router-link> -->
        <!-- <router-link to="/signup" class="px-5 py-1 rounded-full border border-[#0579D8] text-[#0579D8] font-medium hover:bg-blue-50 transition">Sign up</router-link> -->
        <button @click="showForm = true" class="cursor-pointer px-5 py-1 rounded-full border border-[#0579D8] text-[#0579D8] font-medium hover:bg-blue-50 transition">
          Join The Waitlist
                </button>

      </nav>
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
      <router-link to="/" class="text-[#0579D8] font-medium">Home</router-link>
      <!-- <router-link to="" class="text-gray-600 hover:text-blue-600">About</router-link>
      <router-link to="" class="text-gray-600 hover:text-blue-600">Contact</router-link> -->
      <button @click="showForm = true" class="cursor-pointer px-5 py-1 rounded-full border border-[#0579D8] text-[#0579D8] font-medium hover:bg-blue-50 transition">
        Join The Waitlist
                </button>
    </div>

    <ZohoFormPopup :is-open="showForm" @close="showForm = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'


import ZohoFormPopup from './ZohoFormPopup.vue'

const showForm = ref(false)

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.router-link-active {
  color: #0579D8; /* blue-600 */
  font-weight: 500;
}
</style>
