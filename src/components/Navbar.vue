
<template>
  <nav class="bg-green-700 text-white px-4 py-2 flex items-center justify-between shadow-md w-full">
    
    <img 
      src="../assets/🌚The moon 🌙 is the most beautiful thing to me_ I….jpg" 
      class="h-8 w-8 rounded-full object-cover"
    />

    <ul class="flex gap-5 text-sm font-medium items-center">

      <li>
        <router-link to="/" class="hover:text-yellow-300">
          Home
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About Us
        </router-link>
      </li>

    
        <li> <a href="/services" class="hover:text-yellow-300">
          Services
        </a>
      </li>
  <li class="relative group">
    <a href="#" class="hover: text-yellow-300">Gallery<span>🔽</span></a>
    <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green">Photos</a></li>
        <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green">Videos</a></li>
        </ul>
</li>
<li class="relative group">
    <a href="#" class="hover: text-yellow-300">Destinations<span>🔽</span></a>
    <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><a href="/south" class="block px-4 py-2 hover:bg-green-200 text-green">Southern Province</a></li>
        <li><a href="/north" class="block px-4 py-2 hover:bg-green-200 text-green">Northern Province</a></li>
        <li><a href="/east" class="block px-4 py-2 hover:bg-green-200 text-green">Eastern Province</a></li>
        <li><a href="/west" class="block px-4 py-2 hover:bg-green-200 text-green">Western Province</a></li>
        <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green">Kigali city</a></li>
        


        </ul>
</li>
      

      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          Contact Us
        </router-link>
      </li>

    </ul>

  </nav>
</template>