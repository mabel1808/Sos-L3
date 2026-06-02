<template>
  <div class="min-h-[calc(100vh-130px)] w-full flex items-center justify-center px-4 py-8 bg-gradient-to-br from-green-50 to-emerald-50">
    <!-- Login Card -->
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-green-800 mb-2">Login</h2>
        <p class="text-gray-600 text-sm">Welcome back to Tembera Urwanda</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
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
        
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg mt-2 text-lg"
        >
          Sign in
        </button>
      </form>
      
      <!-- Register Link Section -->
      <div class="text-center mt-6 pt-6 border-t border-gray-200">
        <p class="text-gray-600 text-sm mb-2">Don't have an account?</p>
        <RouterLink 
          to="/register" 
          class="inline-block text-green-700 font-semibold hover:text-green-800 hover:underline transition-colors duration-200"
        >
          Create an account
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // TODO: Add login logic here
  console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>