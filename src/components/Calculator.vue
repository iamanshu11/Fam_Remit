<template>
  <div class="border border-blue-200 rounded-2xl w-full max-w-lg md:px-2 md:py-2">
    <div class="bg-[#D9D9D9] rounded-2xl shadow-lg px-6 p-6 md:p-8 border border-blue-200 relative z-10">
      <!-- You Send -->
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">You Send</label>
        <div class="relative flex items-center">
          <input
            type="number"
            class="w-full rounded-lg bg-white border border-gray-300 px-4 py-2 pr-28 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            v-model="sendAmount"
            min="0"
            @input="handleSendAmountChange"
          />
          <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-transparent rounded-lg px-2 py-1">
            <img
              :src="selectedSendCurrency.flag"
              :alt="selectedSendCurrency.code"
              class="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <span class="font-semibold ml-1">{{ selectedSendCurrency.code }}</span>
          </div>
        </div>
      </div>

      <!-- Recipient Gets -->
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Recipient Gets</label>
        <div class="relative flex items-center">
          <input
            type="number"
            class="w-full rounded-lg bg-white border border-gray-300 px-4 py-2 pr-28 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            v-model="receiveAmount"
            min="0"
            @input="handleReceiveAmountChange"
          />
          <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-transparent rounded-lg px-2 py-1">
            <img
              :src="selectedReceiveCurrency.flag"
              :alt="selectedReceiveCurrency.code"
              class="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <span class="font-semibold ml-1">{{ selectedReceiveCurrency.code }}</span>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-300 my-4"></div>
      <div class="space-y-2 text-gray-700 text-md">
        <div class="flex justify-between items-center text-[#01133F]">
          <span>Transaction fees</span><span>$ {{ fee.toFixed(2) }}</span>
        </div>
        <div class="border-b border-gray-200 my-2"></div>
        <div class="flex justify-between items-center text-[#01133F]">
          <span>Converted amount</span><span>$ {{ convertedAmount.toFixed(2) }}</span>
        </div>
        <div class="border-b border-gray-200 my-2"></div>
        <div class="flex justify-between items-center text-[#01133F]">
          <span>Exchange rate</span><span>{{ exchangeRateText }}</span>
        </div>
        <div class="border-b border-gray-200 my-2"></div>
        <div class="flex justify-between font-bold text-[#01133F] mt-2 items-center">
          <span>Total Payable</span><span>$ {{ totalPayable.toFixed(2) }}</span>
        </div>
      </div>
      <button @click="showForm = true" class="cursor-pointer w-full mt-6 bg-[#00174F] text-white font-semibold py-3 rounded-lg text-lg hover:bg-blue-800 transition">
        Get Started
      </button>
      <div class="text-xs text-gray-500 mt-2 text-center">
        By clicking continue, you agree to our Terms and Conditions.
      </div>
      <div class="flex justify-center gap-6 mt-4 opacity-60">
        <img src="/src/assets/img/form-partner-1.png" alt="Bank Transfer" class="h-5" />
        <img src="/src/assets/img/form-partner-2.png" alt="SEPA" class="h-5" />
      </div>
    </div>
    <ZohoFormPopup :is-open="showForm" @close="showForm = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import ZohoFormPopup from './ZohoFormPopup.vue'

const showForm = ref(false)

const currencies = [
  { code: 'AUD', name: 'Australian Dollar', flag: 'https://flagcdn.com/au.svg', rate: 1 },
  { code: 'NGN', name: 'Nigerian Naira', flag: 'https://flagcdn.com/ng.svg', rate: 1017.41 },
]

const sendAmount = ref('2500')
const receiveAmount = ref('0')
const fee = ref(0)

const selectedSendCurrency = ref(currencies.find(c => c.code === 'AUD'))
const selectedReceiveCurrency = ref(currencies.find(c => c.code === 'NGN'))

const showSendDropdown = ref(false)
const showReceiveDropdown = ref(false)
const sendSearch = ref('')
const receiveSearch = ref('')

const filteredSendCurrencies = computed(() =>
  currencies.filter(c => c.code === 'AUD')
)
const filteredReceiveCurrencies = computed(() =>
  currencies.filter(c => c.code === 'NGN')
)

function handleSendAmountChange(e) {
  const v = e.target.value
  if (v === '') {
    sendAmount.value = ''
    receiveAmount.value = '0'
    fee.value = 0
    return
  }
  const num = parseFloat(v)
  if (!isNaN(num) && num >= 0) {
    sendAmount.value = v
    receiveAmount.value = (num * selectedReceiveCurrency.value.rate).toFixed(2)
    fee.value = num ? Math.max(0, num * 0.01) : 0
  }
}

function handleReceiveAmountChange(e) {
  const v = e.target.value
  if (v === '') {
    receiveAmount.value = ''
    sendAmount.value = '0'
    fee.value = 0
    return
  }
  const num = parseFloat(v)
  if (!isNaN(num) && num >= 0) {
    receiveAmount.value = v
    sendAmount.value = (num / selectedReceiveCurrency.value.rate).toFixed(2)
    fee.value = sendAmount.value
      ? Math.max(0, parseFloat(sendAmount.value) * 0.01)
      : 0
  }
}

function toggleSendDropdown() {
  showSendDropdown.value = false
}
function toggleReceiveDropdown() {
  showReceiveDropdown.value = false
}

function selectSendCurrency(c) {
  if (c.code === 'AUD') {
    selectedSendCurrency.value = c
    handleSendAmountChange({ target: { value: sendAmount.value } })
  }
}

function selectReceiveCurrency(c) {
  if (c.code === 'NGN') {
    selectedReceiveCurrency.value = c
    handleReceiveAmountChange({ target: { value: receiveAmount.value } })
  }
}

const convertedAmount = computed(() => parseFloat(receiveAmount.value) || 0)
const exchangeRateText = computed(() =>
  sendAmount.value
    ? `${selectedSendCurrency.value.code} → ${selectedReceiveCurrency.value.code}: ${selectedReceiveCurrency.value.rate.toFixed(4)}`
    : `${selectedSendCurrency.value.code} → ${selectedReceiveCurrency.value.code}: 0.0000`
)
const totalPayable = computed(() => {
  const num = parseFloat(sendAmount.value) || 0
  return num + fee.value
})
</script>
