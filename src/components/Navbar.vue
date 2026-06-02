
<template>
  <nav class="bg-green-700 text-white px-4 py-2 flex items-center shadow-md w-full">
    
    <img 
      src="../assets/images/logo.png" 
      class="h-8 w-8 object-cover rounded-full"
    />

    <h1 class="text-white text-lg font-bold ml-2">
      TEMBERA U'RWANDA
    </h1>

    <ul class="flex gap-5 text-sm font-medium items-center ml-20">

      <li>
        <router-link to="/" class="hover:text-yellow-300">Home</router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">About Us</router-link>
      </li>

      <li>
        <router-link to="/services" class="hover:text-yellow-300">Services</router-link>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          Gallery <span>🔽</span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-40 top-full left-0 z-50">
          <li><router-link to="/photos" class="block px-4 py-2 hover:bg-green-200">Photos</router-link></li>
          <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-200">Videos</router-link></li>
        </ul>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          Destinations <span>🔽</span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-200">Southern Province</router-link></li>
          <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-200">Northern Province</router-link></li>
          <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-200">Eastern Province</router-link></li>
          <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-200">Western Province</router-link></li>
          <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200">Kigali city</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-yellow-300"> Contact Us
        </router-link>
        </li>
        <li><router-link to="/login" class="hover:text-yellow-300">Login</router-link></li>
    
      <li>
        <router-link to="/translation" class="hover:text-yellow-300">Translation</router-link>
      </li>

    </ul>

  </nav>
</template>