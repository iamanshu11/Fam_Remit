<template>
    <div class="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <!-- Confetti Canvas -->
      <canvas ref="confettiCanvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
  
      <Header />
  
      <div class="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <!-- Logo -->
        <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-28 h-28 mb-4 animate-bounce" />
  
        <!-- Animated Tick (Lottie) -->
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json"
          background="transparent"
          speed="1"
          loop="false"
          autoplay
          class="w-32 h-20 "
        ></lottie-player>
  
        <!-- Welcome Message -->
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 animate-fadeInUp">
          Thank You for Joining!
        </h1>
        <p class="text-gray-700 text-lg mb-2 animate-fadeInUp delay-200">
            We're thrilled to have you on board. You're all set for early access and exclusive benefits when we launch.
        </p>
        <p class="text-gray-700 text-lg mb-6 animate-fadeInUp delay-200">
            Keep an eye on your inbox – exciting updates are coming your way!
        </p>
  
        <!-- Countdown Timer -->
        <!-- <div class="flex items-center space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-4 mb-8 animate-fadeInUp delay-400">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-900">{{ countdown.days }}</div>
            <div class="text-sm text-gray-600">Days</div>
          </div>
          <div class="text-2xl font-bold text-blue-900">:</div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-900">{{ countdown.hours }}</div>
            <div class="text-sm text-gray-600">Hours</div>
          </div>
          <div class="text-2xl font-bold text-blue-900">:</div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-900">{{ countdown.minutes }}</div>
            <div class="text-sm text-gray-600">Minutes</div>
          </div>
          <div class="text-2xl font-bold text-blue-900">:</div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-900">{{ countdown.seconds }}</div>
            <div class="text-sm text-gray-600">Seconds</div>
          </div>
        </div> -->
  
        <!-- CTA Buttons -->
        <div class="flex space-x-4 animate-fadeInUp delay-600">
          <router-link to="/" class="bg-[#00174F] hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition">
            Back to Home
          </router-link>
          <!-- <a href="#" class="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-6 py-3 rounded-lg transition">
            Share with Friends
          </a> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Header from '../components/Header.vue'
  import confetti from 'canvas-confetti'
  
  // Countdown logic
  const targetDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  const countdown = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  
  function updateCountdown() {
    const now = new Date().getTime()
    const distance = targetDate - now
  
    if (distance < 0) return
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
    countdown.value = {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }
  
  onMounted(() => {
    // Launch confetti
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    })
  
    // Start countdown
    updateCountdown()
    setInterval(updateCountdown, 1000)
  })
  </script>
  
  <style scoped>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
  .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
  .animate-fadeInUp.delay-600 { animation-delay: 0.6s; }
  </style>