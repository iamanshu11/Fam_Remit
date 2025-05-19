<template>
  <section class="relative w-full py-16 bg-white overflow-hidden">
    <div class="absolute top-20">
                <img src="/src/assets/img/send-money-easy/left-bg.png" class="w-full h-full">
            </div>
            <div class="absolute bottom-12 right-0">
                <img src="/src/assets/img/send-money-easy/right-bg.png" class="w-full h-full">
            </div>
    <!-- Decorative backgrounds -->
    <div class="hidden md:block absolute left-0 top-0 w-[450px] h-[450px] bg-blue-100 rounded-3xl -z-10" style="border-top-left-radius: 60px; border-bottom-right-radius: 60px;"></div>
    <div class="hidden md:block absolute right-0 bottom-0  bg-gray-200 rounded-3xl -z-10" style="border-top-left-radius: 60px; border-bottom-right-radius: 60px;"></div>
    <div class="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-14 text-center">
        <span class="text-blue-500">Send Money</span> in Just 4<br class="hidden md:inline" /> Easy <span class="text-blue-500">Steps!</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4  w-full max-w-6xl mx-auto">
        <div v-for="(step, idx) in steps" :key="step.title" class="relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 pt-10 w-full mx-auto">
          <!-- Step number in background -->
          <span class="absolute top-4 right-6 text-[60px] font-bold text-blue-100 select-none pointer-events-none z-0">{{ step.num }}</span>
          <div class="relative z-10 flex flex-col items-center">
            <div class="mb-4">
              <img :src="step.img" :alt="step.title" class="w-24 h-24 object-contain mx-auto" />
            </div>
            <div class="text-lg font-semibold text-center text-gray-900">{{ step.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    img: '/src/assets/img/send-money-easy/img-1.png',
    title: 'Create Account',
    num: '01',
  },
  {
    img: '/src/assets/img/send-money-easy/img-2.png',
    title: 'Set up a transfer',
    num: '02',
  },
  {
    img: '/src/assets/img/send-money-easy/img-3.png',
    title: 'Pay securely',
    num: '03',
  },
  {
    img: '/src/assets/img/send-money-easy/img-4.png',
    title: `That's it!`,
    num: '04',
  },
]
</script> 