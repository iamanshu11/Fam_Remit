<template>
  <div class="bg-[#D9D9D9] rounded-2xl shadow-lg px-6 p-6 md:p-8 w-full max-w-md border border-blue-200 relative z-10">
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
        <button
          @click="toggleSendDropdown"
          class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-transparent rounded-lg px-2 py-1"
        >
          <img :src="selectedSendCurrency.flag" :alt="selectedSendCurrency.code" class="w-6 h-6 rounded-full" />
          <span class="font-semibold ml-1">{{ selectedSendCurrency.code }}</span>
          <!-- Dropdown icon toggles -->
          <svg
            v-if="!showSendDropdown"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 ml-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 ml-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        <div
          v-if="showSendDropdown"
          class="absolute top-12 right-0 bg-white border rounded-lg shadow-lg z-20 w-full max-h-60 overflow-auto"
        >
          <div class="p-2">
            <input
              v-model="sendSearch"
              type="text"
              placeholder="Search currency..."
              class="w-full rounded border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div
            v-for="currency in filteredSendCurrencies"
            :key="currency.code"
            @click="selectSendCurrency(currency)"
            class="flex items-center px-3 py-2 hover:bg-blue-100 cursor-pointer border-b border-gray-200 last:border-b-0"
          >
            <img :src="currency.flag" :alt="currency.code" class="w-5 h-5 rounded-full mr-2" />
            <span>{{ currency.code }} – {{ currency.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Recipient Gets</label>
      <div class="relative flex items-center">
        <input
          type="number"
          class="w-full rounded-lg bg-white border border-gray-300 px-4 py-2 pr-28 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          v-model="receiveAmount"
          min="0"
          readonly
        />
        <button
          @click="toggleReceiveDropdown"
          class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-transparent rounded-lg px-2 py-1"
        >
          <img :src="selectedReceiveCurrency.flag" :alt="selectedReceiveCurrency.code" class="w-6 h-6 rounded-full" />
          <span class="font-semibold ml-1">{{ selectedReceiveCurrency.code }}</span>
          <!-- Dropdown icon toggles -->
          <svg
            v-if="!showReceiveDropdown"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 ml-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 ml-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        <div
          v-if="showReceiveDropdown"
          class="absolute top-12 right-0 bg-white border rounded-lg shadow-lg z-20 w-full max-h-60 overflow-auto"
        >
          <div class="p-2">
            <input
              v-model="receiveSearch"
              type="text"
              placeholder="Search currency..."
              class="w-full rounded border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div
            v-for="currency in filteredReceiveCurrencies"
            :key="currency.code"
            @click="selectReceiveCurrency(currency)"
            class="flex items-center px-3 py-2 hover:bg-blue-100 cursor-pointer border-b border-gray-200 last:border-b-0"
          >
            <img :src="currency.flag" :alt="currency.code" class="w-5 h-5 rounded-full mr-2" />
            <span>{{ currency.code }} – {{ currency.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-300 my-4"></div>
    <div class="space-y-2 text-gray-700 text-sm">
      <div class="flex justify-between items-center text-[#01133F]"><span>Transaction fees</span><span>$ {{ fee.toFixed(2) }}</span></div>
      <div class="border-b border-gray-200 my-2"></div>
      <div class="flex justify-between items-center text-[#01133F]"><span>Converted amount</span><span>$ {{ convertedAmount.toFixed(2) }}</span></div>
      <div class="border-b border-gray-200 my-2"></div>
      <div class="flex justify-between items-center text-[#01133F]"><span>Exchange rate</span><span>{{ exchangeRateText }}</span></div>
      <div class="border-b border-gray-200 my-2"></div>
      <div class="flex justify-between font-bold text-[#01133F] mt-2 items-center"><span>Total Payable</span><span>$ {{ totalPayable.toFixed(2) }}</span></div>
    </div>
    <button class="w-full mt-6 bg-[#00174F] text-white font-semibold py-3 rounded-lg text-lg hover:bg-blue-800 transition">Get Started</button>
    <div class="text-xs text-gray-500 mt-2 text-center">By clicking continue, you agree to our Terms and Conditions.</div>
    <div class="flex justify-center gap-6 mt-4 opacity-60">
      <img src="/src/assets/img/form-partner-1.png" alt="Bank Transfer" class="h-5" />
      <img src="/src/assets/img/form-partner-2.png" alt="SEPA" class="h-5" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const currencies = [
  { code: 'VND', name: 'Vietnamese Dong', flag: 'https://flagcdn.com/vn.svg', rate: 0.04 },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: 'https://flagcdn.com/my.svg', rate: 0.41 },
  { code: 'USD', name: 'United States Dollar', flag: 'https://flagcdn.com/us.svg', rate: 1 },
  { code: 'INR', name: 'Indian Rupee', flag: 'https://flagcdn.com/in.svg', rate: 0.012 },
  { code: 'EUR', name: 'Euro', flag: 'https://flagcdn.com/eu.svg', rate: 1.1 },
  { code: 'NGN', name: 'Nigerian Naira', flag: 'https://flagcdn.com/ng.svg', rate: 0.001 },
  { code: 'GBP', name: 'British Pound Sterling', flag: 'https://flagcdn.com/gb.svg', rate: 1.25 },
]

const sendAmount = ref('2500')
const receiveAmount = ref('0')
const fee = ref(0)
const selectedSendCurrency = ref(currencies[0])
const selectedReceiveCurrency = ref(currencies[1])
const showSendDropdown = ref(false)
const showReceiveDropdown = ref(false)
const sendSearch = ref('')
const receiveSearch = ref('')

const handleSendAmountChange = (event) => {
  const value = event.target.value
  if (value === '') {
    sendAmount.value = ''
    receiveAmount.value = '0'
    fee.value = 0
    return
  }
  const numValue = parseFloat(value)
  if (!isNaN(numValue) && numValue >= 0) {
    sendAmount.value = value
  }
}

const exchangeRate = computed(() => {
  const amount = parseFloat(sendAmount.value) || 0
  const usd = amount * selectedSendCurrency.value.rate
  return selectedReceiveCurrency.value.rate === 0 ? 0 : usd / selectedReceiveCurrency.value.rate / amount
})

const exchangeRateText = computed(() => {
  if (!sendAmount.value) return `${selectedSendCurrency.value.code} → ${selectedReceiveCurrency.value.code}: 0.0000`
  return `${selectedSendCurrency.value.code} → ${selectedReceiveCurrency.value.code}: ${exchangeRate.value.toFixed(4)}`
})

const convertedAmount = computed(() => {
  const amount = parseFloat(sendAmount.value) || 0
  const usd = amount * selectedSendCurrency.value.rate
  return selectedReceiveCurrency.value.rate === 0 ? 0 : usd / selectedReceiveCurrency.value.rate
})

const totalPayable = computed(() => {
  const amount = parseFloat(sendAmount.value) || 0
  return amount + fee.value
})

watch([sendAmount, selectedSendCurrency, selectedReceiveCurrency], () => {
  const amount = parseFloat(sendAmount.value) || 0
  receiveAmount.value = convertedAmount.value.toFixed(2)
  fee.value = amount > 0 ? Math.max(0, 0.01 * amount) : 0
})

const filteredSendCurrencies = computed(() =>
  currencies.filter(c => c.code.toLowerCase().includes(sendSearch.value.toLowerCase()))
)
const filteredReceiveCurrencies = computed(() =>
  currencies.filter(c => c.code.toLowerCase().includes(receiveSearch.value.toLowerCase()))
)

const toggleSendDropdown = () => {
  showSendDropdown.value = !showSendDropdown.value
  if (showSendDropdown.value) showReceiveDropdown.value = false
}
const toggleReceiveDropdown = () => {
  showReceiveDropdown.value = !showReceiveDropdown.value
  if (showReceiveDropdown.value) showSendDropdown.value = false
}

const selectSendCurrency = (currency) => {
  selectedSendCurrency.value = currency
  showSendDropdown.value = false
  sendSearch.value = ''
}
const selectReceiveCurrency = (currency) => {
  selectedReceiveCurrency.value = currency
  showReceiveDropdown.value = false
  receiveSearch.value = ''
}
</script>
