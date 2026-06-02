<template>
  <div class="min-h-[calc(100vh-130px)] w-full flex items-center justify-center px-4 py-8 bg-gradient-to-br from-green-50 to-emerald-50">
    <!-- Register Card -->
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-green-800 mb-2"> Register</h2>
        <p class="text-gray-600 text-sm">Join Tembera Urwanda community</p>
      </div>
      
      <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
        <!-- Full Name Input -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input 
            v-model="fullName" 
            type="text"
            placeholder="John Doe" 
            required 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <!-- Email Input -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input 
            v-model="email" 
            type="email"
            placeholder="your@email.com" 
            required 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <!-- Phone Number Input -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input 
            v-model="phoneNumber" 
            type="tel"
            placeholder="+250 (0) 700 000 000" 
            required 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <!-- Password Input -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input 
            v-model="password" 
            type="password"
            placeholder="••••••••" 
            required 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <!-- Gender Select -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
          <select 
            v-model="gender" 
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white text-gray-700"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <!-- Age Input -->
        <div class="relative">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Age</label>
          <input 
            v-model="age" 
            type="number"
            placeholder="18"
            min="13"
            max="120"
            required 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-200 placeholder-gray-400"
          />
        </div>
        
        <!-- Terms Agreement -->
        <div class="flex items-start gap-3">
          <input 
            v-model="termsAgreed" 
            type="checkbox"
            id="terms"
            required 
            class="mt-1 w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-green-600 accent-green-600 cursor-pointer"
          />
          <label for="terms" class="text-sm text-gray-600 cursor-pointer">
            I agree to the <span class="text-green-700 font-semibold hover:underline">terms and conditions</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg mt-2 text-lg"
        >
          Create Account
        </button>
      </form>
      
      <!-- Login Link Section -->
      <div class="text-center mt-6 pt-6 border-t border-gray-200">
        <p class="text-gray-600 text-sm mb-2">Already have an account?</p>
        <RouterLink 
          to="/login" 
          class="inline-block text-green-700 font-semibold hover:text-green-800 hover:underline transition-colors duration-200"
        >
          Sign in here
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const fullName = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')
const gender = ref('')
const age = ref('')
const termsAgreed = ref(false)

const handleRegister = () => {
  // TODO: Add registration logic here
  console.log('Registration attempt:', {
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    password: password.value,
    gender: gender.value,
    age: age.value,
    termsAgreed: termsAgreed.value
  })
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
