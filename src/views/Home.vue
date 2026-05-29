<script setup>
import heroImage from '../assets/images/gorilla.jpg'

const heroStyle = {
  backgroundImage: `url(${heroImage})`
}
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="heroStyle"
  >
    
    <div class="bg-black/50 absolute inset-0"></div>

    
    <div class="relative text-center px-4">
      <h1 class="text-5xl font-bold mb-4">Welcome to Rwanda</h1>

      <p class="text-xl mb-8 text-green-300">
        The Land of A Thousand Hills
      </p>

    
      <RouterLink
        to="/about"
        class="bg-green-700 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg text-lg font-bold transition"
      >
        Explore Now
      </RouterLink>
    </div>
  </section>
</template>


