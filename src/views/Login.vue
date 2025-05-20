<template>
  <div class="min-h-screen h-screen flex flex-col md:flex-row overflow-hidden">
    <!-- Left: Background Image -->
    <div class="hidden md:block md:w-[60%] h-screen">
      <img src="/src/assets/img/login.png" alt="Login Background" class="w-full h-full object-cover" />
    </div>
    <!-- Right: Login Form -->
    <div class="flex-1 flex items-center justify-center bg-white h-screen">
      <div class="w-full max-w-lg mx-auto p-8">
        <div class="flex flex-col items-center mb-8">
          <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-28 h-28 mb-2" />
        </div>
        <h2 class="text-2xl font-bold mb-2 text-center">Love to see you again</h2>
        <div class="text-gray-400 text-center mb-8">Send your money transfer easy and Fun!</div>
        <form @submit.prevent>
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-1">Email</label>
            <div class="relative">
              <input type="email" placeholder="example@email.com" class="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8"/></svg>
              </span>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-1">Password</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" placeholder="********" class="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.293 5.95M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18"/></svg>
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-gray-700">
              <input type="checkbox" class="mr-2 rounded" /> Remember me
            </label>
            <a href="#" class="text-blue-600 hover:underline text-sm font-medium">Forgot password?</a>
          </div>
          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-lg transition mb-4">Continue</button>
        </form>
        <!-- <div class="text-center text-gray-500 mt-4">
          Don't have an account? <a href="#" class="text-blue-600 hover:underline font-medium">Sign up instead</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showPassword = ref(false)
</script> 