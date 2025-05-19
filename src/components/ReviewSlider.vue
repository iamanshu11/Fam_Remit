<template>
    <section class="w-full py-16 bg-white">
      <div class="container mx-auto flex flex-col items-center justify-center px-4">
        <div class="mb-2 text-center text-base font-semibold text-blue-900 tracking-widest">OUR REVIEWS</div>
        <h2 class="text-3xl md:text-4xl font-bold mb-2 text-center">
          Happy <span class="text-blue-500">Customers Trust</span>
        </h2>
        <h3 class="text-2xl md:text-3xl font-bold mb-10 text-center">Our Services</h3>
  
        <div class="relative w-full mx-auto">
          <div class="flex items-center justify-center gap-6">
            <!-- Desktop Left Arrow -->
            <button @click="prev" class="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-blue-100 text-blue-500 absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
  
            <!-- Reviews -->
            <div class="w-full flex justify-center">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div v-for="(review, idx) in visibleReviews" :key="review.name + idx" class="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-4 min-h-[200px] max-w-xl mx-auto border border-gray-100">
                  <div class="relative flex-shrink-0">
                    <span class="absolute -left-4 -top-4 w-24 h-24 bg-blue-200 rounded-full z-0"></span>
                    <img :src="review.img" alt="Customer" class="w-20 h-20 rounded-full object-cover relative z-10 border-4 border-white" />
                  </div>
                  <div class="flex-1 flex flex-col justify-center">
                    <div class="text-blue-500 font-medium mb-2">{{ review.text }}</div>
                    <div class="font-semibold text-blue-700 mb-2">{{ review.name }}</div>
                    <div class="flex items-center gap-1 mb-2">
                      <span v-for="n in 5" :key="n">
                        <svg v-if="n <= review.stars" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Desktop Right Arrow -->
            <button @click="next" class="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-blue-100 text-blue-500 absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          <!-- Mobile Arrows -->
          <div class="flex md:hidden justify-center gap-6 mt-8">
            <button @click="prev" class="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-100 text-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="next" class="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-100 text-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  // Dynamically import image
  const imgUrl = new URL('../assets/img/person-img.png', import.meta.url).href
  
  const reviews = [
    {
      img: imgUrl,
      text: 'FamRemit Money Transfer fees and exchange rate are better than the ones I have tried before.',
      name: 'Darlene Robertson',
      stars: 5,
    },
    {
      img: imgUrl,
      text: 'The app is easy to use and my money arrived instantly. Highly recommended!',
      name: 'Jacob Jones',
      stars: 5,
    },
    {
      img: imgUrl,
      text: 'Great customer support and very reliable service.',
      name: 'Leslie Alexander',
      stars: 4,
    },
    {
      img: imgUrl,
      text: 'I love the low fees and fast transfers. Will use again!',
      name: 'Kristin Watson',
      stars: 5,
    },
    {
      img: imgUrl,
      text: 'Secure and trustworthy platform for sending money abroad.',
      name: 'Cody Fisher',
      stars: 5,
    },
  ]
  
  const current = ref(0)
  
  const visibleReviews = computed(() => {
    const perPage = window.innerWidth < 768 ? 1 : 3
    const start = current.value
    const end = start + perPage
    if (end <= reviews.length) {
      return reviews.slice(start, end)
    } else {
      return [...reviews.slice(start), ...reviews.slice(0, end - reviews.length)]
    }
  })
  
  function prev() {
    const perPage = window.innerWidth < 768 ? 1 : 3
    current.value = (current.value - perPage + reviews.length) % reviews.length
  }
  function next() {
    const perPage = window.innerWidth < 768 ? 1 : 3
    current.value = (current.value + perPage) % reviews.length
  }
  
  let interval = null
  onMounted(() => {
    interval = setInterval(() => {
      next()
    }, 4000)
  })
  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })
  </script>
  