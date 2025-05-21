<template>
  <section class="w-full py-16 bg-white">
    <div class="container mx-auto max-w-6xl flex flex-col md:flex-row bg-blue-200 rounded-2xl items-center justify-between gap-12 px-4 py-4 md:px-8 md:py-10">
      <!-- Left: Text, QR, Badges -->
      <div class="flex-1 flex flex-col items-center md:items-start">
        <h2 class="text-3xl md:text-4xl font-bold text-black  px-4 py-2 mb-4 text-center md:text-left">
          Get the <span class="text-[#0579D8]">FamRemit app</span> 
        </h2>
        <div class="text-lg text-black  px-4 py-2 mb-8 text-center md:text-left max-w-md">
          Send money on the go with our secure and easy-to-use mobile app.<br />Available for iOS and Android devices.
        </div>
        <div class="p-2 rounded-2xl text-center border border-blue-600 mb-6">
          <img src="/src/assets/img/qr.png" alt="QR Code" class="w-28 h-28" />
        </div>
        
        <div class="flex gap-4">
      <a href="#" class="block"><img src="/src/assets/img/appstore.png" alt="App Store" class="h-12 bg-black p-2 rounded-xl" /></a>
      <a href="#" class="block"><img src="/src/assets/img/googleplay.png" alt="Google Play" class="h-12 bg-black p-2 rounded-xl" /></a>
    </div>
      </div>
      <!-- Right: Phone Mockup -->
      <div class="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
        <img src="/src/assets/img/phone.png" alt="FamRemit App Mockup" class="max-w-xs md:max-w-md w-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>  