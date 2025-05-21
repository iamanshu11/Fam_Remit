<template>
  <footer class="bg-[#01416B] text-white pt-12 pb-4">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
      <!-- Logo, Description, Social -->
      <div class="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
        <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-20 h-16 mb-2" />
        <p class="mb-4 text-sm text-white/90 max-w-xs">
          FamRemit Money Transfer has become the leading provider of money remittance services in Eritrea and beyond.
        </p>
        <div class="flex gap-4 mb-4">
          <a href="#" aria-label="Facebook"><img src="/src/assets/img/facebook.png" class="w-9 h-9 rounded-full" /></a>
          <a href="#" aria-label="Twitter"><img src="/src/assets/img/twitter.png" class="w-9 h-9 rounded-full" /></a>
          <a href="#" aria-label="LinkedIn"><img src="/src/assets/img/linkdln.png" class="w-9 h-9 rounded-full" /></a>
        </div>
      </div>

      <!-- Menu -->
      <!-- <div class="flex-1 min-w-[150px]">
        <div class="font-bold mb-3">Menu</div>
        <ul class="space-y-2">
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">Home</a>
           
          </li>
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">About</a>
           
          </li>
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">Contact</a>
            
          </li>
        </ul>
      </div> -->

      <!-- Legals -->
      <div class="flex-1 min-w-[180px]">
        <div class="font-bold mb-3">Legals</div>
        <ul class="space-y-2">
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">Terms & Condition</a>
            
          </li>
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">Privacy Policy</a>
            
          </li>
          <li class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 ml-1 text-cyan-200" />
            <a href="#" class="hover:underline">Complaint Policy</a>
            
          </li>
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="flex-1 min-w-[220px]">
        <div class="font-bold mb-3">Contact Us</div>
        <div class="mb-2 flex items-start gap-2">
          <MapPinIcon class="w-5 h-5 text-cyan-200 mt-1" />
          <div>
            <span class="font-semibold">Location</span><br />
            <span class="text-sm">33 Brixton Station Road, SW9 8PB, London, United Kingdom.</span>
          </div>
        </div>
        <div class="mb-2 flex  gap-2">
          <EnvelopeIcon class="w-5 h-5 text-cyan-200" />
          <div>
            <span class="font-semibold">Email</span><br />
          <span class="text-sm ml-2">info@famremit.com</span>
          </div>
        </div>
        <div class="mb-2 flex  gap-2">
          <PhoneIcon class="w-5 h-5 text-cyan-200" />
          <div>
            <span class="font-semibold">Phone</span><br />
            <span class="text-sm ml-2">+44 (0) 12345666</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 border-t border-cyan-200/40 w-full"></div>
    <div class="text-center text-sm text-cyan-100 mt-4">&copy; {{ new Date().getFullYear() }} FamRemit. All rights reserved.</div>
  </footer>
</template>

<script setup>
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'
</script>