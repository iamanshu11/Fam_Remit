<template>
  <div class="min-h-screen h-screen flex flex-col md:flex-row overflow-hidden">
    <!-- Left: Background Image -->
    <div class="hidden md:block md:w-[60%] h-screen">
      <img src="/src/assets/img/login.png" alt="Login Background" class="w-full h-full object-cover" />
    </div>
    <!-- Right: Signup Form -->
    <div class="flex-1 flex items-center justify-center bg-white h-screen overflow-y-auto">
      <div class="w-full max-w-lg mx-auto p-8">
        <div class="flex flex-col items-center mb-2">
          <img src="/src/assets/img/logo.png" alt="FamRemit Logo" class="w-20 h-16 mb-2" />
        </div>
        <h2 class="text-lg md:text-2xl font-bold mb-2 text-center">Simpler, Faster Money Transfers Are Coming!</h2>
        <div class="text-gray-400 text-sm md:text-lg text-center mb-8">Sign up and enjoy special offers and perks reserved only for our early supporters.</div>
        
        <form 
          action='https://forms.zohopublic.in/remitso263/form/FamRemit/formperma/DfMboqDLheOc56zSC-6LVuL8OJjG6rOUSN-hT2dqYMc/htmlRecords/submit' 
          name='form' 
          id='form' 
          method='POST' 
          accept-charset='UTF-8' 
          enctype='multipart/form-data'
          class="space-y-4"
          @submit="handleSubmit"
        >
          <input type="hidden" name="zf_referrer_name" value="">
          <input type="hidden" name="zf_redirect_url" value="/thank-you">
          <input type="hidden" name="zc_gad" value="">

          <!-- Name Fields Grid -->
          <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
            <!-- First Name -->
            <div>
              <label class="block text-gray-700 font-semibold mb-1">First Name</label>
              <div class="relative">
                <input 
                  type="text" 
                  maxlength="255" 
                  name="Name_First" 
                  fieldType="7" 
                  placeholder="Enter your first name" 
                  class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <!-- Last Name -->
            <div>
              <label class="block text-gray-700 font-semibold mb-1">Last Name</label>
              <div class="relative">
                <input 
                  type="text" 
                  maxlength="255" 
                  name="Name_Last" 
                  fieldType="7" 
                  placeholder="Enter your last name" 
                  class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-gray-700 font-semibold mb-1">Email <span class="text-red-500">*</span></label>
            <div class="relative">
              <input 
                type="email" 
                maxlength="255" 
                name="Email" 
                fieldType="9" 
                placeholder="example@email.com" 
                class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-gray-700 font-semibold mb-1">Phone Number <span class="text-red-500">*</span></label>
            <div class="relative">
              <input 
                type="tel" 
                compname="PhoneNumber" 
                name="PhoneNumber_countrycode" 
                phoneFormat="1" 
                isCountryCodeEnabled="false" 
                maxlength="20" 
                placeholder="Enter your phone number" 
                class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#00174F] hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-lg transition mt-4 "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = () => {
  // The form will submit to Zoho and then redirect to thank you page
  // due to the zf_redirect_url being set
}
</script> 