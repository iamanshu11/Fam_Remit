<template>
  <section class="relative w-full py-16 bg-white overflow-hidden">
    <!-- Decorative background images -->
    <div class="hidden md:block absolute top-20">
      <img :src="leftBg" class="w-full h-full" />
    </div>
    <div class="absolute bottom-12 right-0">
      <img :src="rightBg" class="w-full h-full" />
    </div>

    <!-- Background circles (desktop only) -->
    
    <div
      class="hidden md:block absolute right-0 bottom-0 bg-gray-200 rounded-3xl"
      style="border-top-left-radius: 60px; border-bottom-right-radius: 60px;"
    ></div>

    <!-- Main content -->
    <div class="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-14 text-center">
        <span class="text-[#0579D8]">Send Money</span> in Just 4<br class="hidden md:inline" />
        Easy <span class="text-[#0579D8]">Steps!</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
        <div
          v-for="(step, idx) in steps"
          :key="step.title"
          class="relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 pt-10 w-full mx-auto"
        >
          <!-- Step number -->
          <span class="absolute top-4 right-6 text-[60px] font-bold text-blue-100 select-none pointer-events-none">
            {{ step.num }}
          </span>

          <div class="relative flex flex-col items-center">
            <div class="mb-4">
              <img :src="step.img" :alt="step.title" class="object-contain mx-auto w-full h-auto" />
            </div>
            <div class="text-lg font-semibold text-center text-gray-900">{{ step.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import leftBg from '../assets/img/send-money-easy/left-bg.png'
import rightBg from '../assets/img/send-money-easy/right-bg.png'
import img1 from '../assets/img/send-money-easy/img-1.png'
import img2 from '../assets/img/send-money-easy/img-2.png'
import img3 from '../assets/img/send-money-easy/img-3.png'
import img4 from '../assets/img/send-money-easy/img-4.png'

const steps = [
  { img: img1, title: 'Create Account', num: '01' },
  { img: img2, title: 'Set up a transfer', num: '02' },
  { img: img3, title: 'Pay securely', num: '03' },
  { img: img4, title: `That's it!`, num: '04' },
]
</script>
