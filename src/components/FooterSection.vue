<template>
  <footer class="bg-[#01416B] text-white pt-12 pb-4">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
      <!-- Logo, Description, Social -->
      <div class="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
        <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-16 h-16 mb-2" />
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
      <div class="flex-1 min-w-[150px]">
        <div class="font-bold mb-3">Menu</div>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>
      <!-- Legals -->
      <div class="flex-1 min-w-[180px]">
        <div class="font-bold mb-3">Legals</div>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Terms & Condition</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Complaint Policy</a></li>
        </ul>
      </div>
      <!-- Contact Us -->
      <div class="flex-1 min-w-[220px]">
        <div class="font-bold mb-3">Contact Us</div>
        <div class="mb-2 flex items-start gap-2">
          <svg class="w-5 h-5 mt-1 text-cyan-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <div>
            <span class="font-semibold">Location</span><br />
            <span class="text-sm">33 Brixton Station Road, SW9 8PB, London, United Kingdom.</span>
          </div>
        </div>
        <div class="mb-2 flex items-center gap-2">
          <svg class="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8"/></svg>
          <span class="font-semibold">Email</span> <span class="text-sm ml-2">info@famremit.com</span>
        </div>
        <div class="mb-2 flex items-center gap-2">
          <svg class="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45h12.2a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"/></svg>
          <span class="font-semibold">Phone</span> <span class="text-sm ml-2">+44 (0) 12345666</span>
        </div>
      </div>
    </div>
    <div class="mt-8 border-t border-cyan-200/40 w-full"></div>
    <div class="text-center text-sm text-cyan-100 mt-4">&copy; {{ new Date().getFullYear() }} FamRemit. All rights reserved.</div>
  </footer>
</template>

<script setup>
// No script needed
</script> 