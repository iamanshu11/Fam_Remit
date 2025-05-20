<template>
  <section class="w-full py-16 bg-white">
    <div class="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span class="text-[#0579D8]">Frequently</span> Asked<br />Questions
      </h2>
      <div class="w-full max-w-3xl mx-auto flex flex-col gap-6">
        <div v-for="(faq, idx) in faqs" :key="faq.q" class="bg-white rounded-xl shadow-md px-6 py-5 flex items-center justify-between cursor-pointer transition hover:shadow-lg" @click="toggle(idx)">
          <div class="flex-1">
            <div class="font-semibold text-lg">{{ faq.q }}</div>
            <transition name="fade">
              <div v-if="openIndex === idx" class="mt-3 text-gray-700 text-base">
                {{ faq.a }}
              </div>
            </transition>
          </div>
          <div class="ml-4 flex-shrink-0">
            <span v-if="openIndex !== idx" class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </span>
            <span v-else class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Where can I send money?',
    a: 'You can send money to a wide range of countries and regions supported by FamRemit. Please check our supported countries list for more details.'
  },
  {
    q: 'Can I change the displayed currency?',
    a: 'Yes, you can select your preferred currency from the currency dropdown on the calculator.'
  },
  {
    q: 'What is the limit of sending money?',
    a: 'The sending limit depends on your verification status and destination country. Please refer to our terms or contact support for more information.'
  },
  {
    q: 'How secure is my transaction?',
    a: 'All transactions are encrypted and processed through secure channels to ensure your money and data are safe.'
  },
]

const openIndex = ref(null)
function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style> 