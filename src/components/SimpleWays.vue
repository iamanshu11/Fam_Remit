<template>
    <section class="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 to-blue-400">
      <!-- Background image with overlay -->
      <img src="/src/assets/img/choose-fam-1.png" alt="Background" class="absolute inset-0 w-full h-full object-cover object-left md:object-center opacity-60 z-0" />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-500/70 z-10"></div>
  
      <div class="relative z-20 container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-24 gap-8 min-h-[600px]">
        <div class="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-end justify-center min-h-[400px] mx-auto">
          <h2 class="text-white text-3xl md:text-4xl font-bold mb-8 text-center md:text-right">
            Simple Ways to<br />Receive Money
          </h2>
  
          <!-- Fixed height wrapper -->
          <div class="relative w-full max-w-md flex flex-col gap-4 h-[450px] overflow-hidden">
            <transition-group name="slide-fade" tag="div" class="h-full flex flex-col gap-4">
              <div
                v-for="(item, idx) in visibleItems"
                :key="item.title"
                class="transition-all duration-700 ease-in-out cursor-pointer flex items-center"
                :class="[
                  idx === activeRelativeIndex ? 'scale-105 shadow-2xl bg-white text-blue-900 z-20' : 'scale-95 bg-blue-100 text-blue-900/80 z-10',
                  'rounded-xl px-6 py-5 flex items-start gap-4',
                  idx === activeRelativeIndex ? 'relative' : 'relative opacity-70',
                  idx === activeRelativeIndex ? 'border-4 border-white' : '',
                  idx !== visibleItems.length - 1 ? 'mb-4' : ''
                ]"
                style="transform-origin: center;"
              >
                <div class="text-3xl mt-1 flex-shrink-0">
                  <svg v-if="item.icon === 'shield'" class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"/></svg>
                  <svg v-else-if="item.icon === 'clock'" class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <svg v-else-if="item.icon === 'transfer'" class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m4-4v16m-4-4h8"/></svg>
                  <svg v-else-if="item.icon === 'lock'" class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2zm6 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2z"/></svg>
                  <svg v-else-if="item.icon === 'support'" class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-4m0-4h.01"/></svg>
                </div>
                <div class="min-w-0">
                  <div class="font-bold text-lg mb-1 break-words" :class="idx === activeRelativeIndex ? 'text-blue-900' : 'text-blue-900/80'">{{ item.title }}</div>
                  <div class="text-sm break-words">{{ item.desc }}</div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const items = [
    {
      icon: 'shield',
      title: 'Safe and Secure',
      desc: 'We follow the highest security standards to protect your data.'
    },
    {
      icon: 'clock',
      title: '24/7 Services',
      desc: 'Our platform operates round the clock for seamless transfers.'
    },
    {
      icon: 'transfer',
      title: 'Quick Transfers',
      desc: 'Smooth and efficient money transfers without delays.'
    },
    {
      icon: 'lock',
      title: 'Fully Encrypted',
      desc: 'Your transactions are safeguarded with top security.'
    },
    {
      icon: 'support',
      title: 'Dedicated Support',
      desc: 'Our support team is always ready to help you with your needs.'
    }
  ]
  
  const activeIndex = ref(0)
  const activeRelativeIndex = 1
  const visibleItems = computed(() => {
    const result = []
    for (let i = 0; i < 4; i++) {
      result.push(items[(activeIndex.value + i) % items.length])
    }
    return result
  })
  
  let interval = null
  onMounted(() => {
    interval = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % items.length
    }, 3500)
  })
  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })
  </script>
  
  <style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(40px) scale(0.93);
  }
  .slide-fade-enter-to, .slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  </style>
  