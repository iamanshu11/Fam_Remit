<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative z-[10000]">
      <!-- Close button -->
      <button @click="closePopup" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
  
      <div v-if="!showSuccess">
        <h2 class="text-2xl font-bold text-[#01133F] mb-6">Join The Waitlist</h2>
  
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- First Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              v-model="formData.Name_First"
              name="Name_First"
              maxlength="255"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Last Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              v-model="formData.Name_Last"
              name="Name_Last"
              maxlength="255"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              v-model="formData.Email"
              name="Email"
              maxlength="255"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Phone <span class="text-red-500">*</span>
            </label>
            <input
              type="tel"
              v-model="formData.PhoneNumber_countrycode"
              name="PhoneNumber_countrycode"
              maxlength="20"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Hidden fields -->
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
  
          <!-- Submit button -->
          <button
            type="submit"
            class="w-full bg-[#00174F] text-white font-semibold py-3 rounded-lg text-lg hover:bg-blue-800 transition mt-6"
          >
            Submit
          </button>
        </form>
      </div>
  
      <!-- Success Animation -->
      <div v-if="showSuccess" class="flex flex-col items-center gap-6">
        <!-- Success Circle Animation -->
        <div class="relative w-24 h-24">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- Animated Circle -->
            <circle
              class="stroke-green-500"
              stroke-width="4"
              fill="none"
              cx="50"
              cy="50"
              r="45"
              stroke-dasharray="283"
              stroke-dashoffset="283"
              :style="{ animation: 'drawCircle 0.5s ease forwards' }"
            />
            <!-- Animated Check Mark -->
            <path
              class="stroke-green-500"
              stroke-width="4"
              fill="none"
              d="M30 50 L45 65 L70 35"
              stroke-dasharray="100"
              stroke-dashoffset="100"
              :style="{ animation: 'drawCheck 0.3s ease forwards 0.3s' }"
            />
          </svg>
        </div>

        <!-- Success Message -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
          <p class="text-gray-600">Your message has been sent successfully! We will get back to you soon.</p>
        </div>

        <!-- Close Button -->
        <button
          @click="closePopup"
          class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const formData = ref({
  Name_First: '',
  Name_Last: '',
  Email: '',
  PhoneNumber_countrycode: ''
})

const showSuccess = ref(false)

const closePopup = () => {
  emit('close')
}

const submitForm = async () => {
  try {
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://forms.zohopublic.in/remitso263/form/FamRemit/formperma/DfMboqDLheOc56zSC-6LVuL8OJjG6rOUSN-hT2dqYMc/htmlRecords/submit'
    form.acceptCharset = 'UTF-8'
    form.enctype = 'multipart/form-data'
  
    // Add all form fields
    Object.entries(formData.value).forEach(([name, value]) => {
      const input = document.createElement('input')
      input.type = 'text'
      input.name = name
      input.value = value
      form.appendChild(input)
    })
  
    // Add hidden fields
    const hiddenFields = [
      { name: 'zf_referrer_name', value: '' },
      { name: 'zf_redirect_url', value: '' },
      { name: 'zc_gad', value: '' }
    ]
  
    hiddenFields.forEach(({ name, value }) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    })
  
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
    showSuccess.value = true
    
    // Auto close after 1 second
    setTimeout(() => {
      closePopup()
    }, 1000)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>
  
<style scoped>
@keyframes drawCircle {
  0% {
    stroke-dashoffset: 283;
    transform: rotate(-90deg);
    transform-origin: center;
  }
  100% {
    stroke-dashoffset: 0;
    transform: rotate(0deg);
    transform-origin: center;
  }
}

@keyframes drawCheck {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

/* Add a subtle bounce effect to the container */
@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.bg-white {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style> 