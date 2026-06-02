<template>
    <section
    class="min-h-screen bg-cover bg-center bg-no-repeat p-10"
    style="background-image: url('/src/assets/images/mt.gorilla.jpg');"
  >
    <div class="bg-white/80 p-8 rounded-xl">

      <h1 class="text-4xl font-bold text-green-800 mb-4">
        Kigali City
      </h1>

      <!-- Rest of your content -->

    </div>
  </section>
  <div class="p-10">

    <h1 class="text-4xl font-bold text-green-800 mb-6">
      Photo Gallery
    </h1>

    <p class="text-gray-700 mb-8">
      Explore beautiful photos from different tourist attractions in Rwanda.
    </p>

    <div class="grid md:grid-cols-3 gap-6">

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/discover.jpg"
          class="w-full h-56 object-cover"
          alt="Discover Rwanda"
        >
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/postcard.jpg"
          class="w-full h-56 object-cover"
          alt="Postcard"
        >
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/gorilla.jpg"
          class="w-full h-56 object-cover"
          alt="Gorilla"
        >
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/Muhazi.png"
          class="w-full h-56 object-cover"
          alt="Lake Muhazi"
        >
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/zebra.png"
          class="w-full h-56 object-cover"
          alt="Zebra"
        >
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/birdhouse.png"
          class="w-full h-56 object-cover"
          alt="Bird House"
        >
      </div>

    </div>

  </div>
</template>