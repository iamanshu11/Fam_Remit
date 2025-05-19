<template>
  <Header />
  <div class="relative overflow-hidden">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-24 gap-12 relative z-10">
      <div class="flex-1 w-full md:w-1/2">
        <HeroSection />
      </div>
      <div class="flex-1 w-full md:w-1/2 flex justify-center md:justify-end">
        <Calculator />
      </div>
    </div>
    <SimpleWays />
    <ReceiveWays />
    <SendSteps />
    <GetAppSection />
    <ReviewSlider />
    <FaqSection />
    <FooterSection />
    <img
      src="/src/assets/img/earth.png"
      alt="Rotating Earth"
      class="hidden md:block absolute right-0 top-24 w-[800px] max-w-none opacity-30 pointer-events-none z-0 earth-rotate"
    />
  </div>
</template>

<script setup>
import Header from  '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Calculator from '../components/Calculator.vue'
import SimpleWays from '../components/SimpleWays.vue'
import ReceiveWays from '../components/ReceiveWays.vue'
import SendSteps from '../components/SendSteps.vue'
import GetAppSection from '../components/GetAppSection.vue'
import ReviewSlider from '../components/ReviewSlider.vue'
import FaqSection from '../components/FaqSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
