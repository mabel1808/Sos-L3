<template>
    <section
    class="min-h-screen bg-cover bg-center bg-no-repeat p-10"
    style="background-image: url('/src/assets/images/Akagera.jpg');"
  >
    <div class="bg-white/80 p-8 rounded-xl">

      <h1 class="text-4xl font-bold text-green-800 mb-4">
        Kigali City
      </h1>

      <!-- Rest of your content -->

    </div>
  </section>
  <div class="p-10">

    <h1 class="text-4xl font-bold text-green-800 mb-4">
      Rwanda Tourism Videos
    </h1>

    <p class="text-gray-700 mb-8">
      Watch videos showcasing Rwanda's beauty, wildlife, culture, and tourist attractions.
    </p>

    <div class="grid md:grid-cols-2 gap-8">

      <!-- Video 1 -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <iframe
          class="w-full h-64"
          src="https://www.youtube.com/embed/8J4R7hK5KfA"
          title="Visit Rwanda"
          allowfullscreen>
        </iframe>

        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">Visit Rwanda</h2>
        </div>
      </div>

      <!-- Video 2 -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <iframe
          class="w-full h-64"
          src="https://www.youtube.com/embed/xM5lQk5mV2A"
          title="Akagera National Park"
          allowfullscreen>
        </iframe>

        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">Akagera National Park</h2>
        </div>
      </div>

      <!-- Video 3 -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <iframe
          class="w-full h-64"
          src="https://www.youtube.com/embed/6K4K3mNQz8Q"
          title="Kigali City"
          allowfullscreen>
        </iframe>

        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">Kigali City Tour</h2>
        </div>
      </div>

      <!-- Video 4 -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <iframe
          class="w-full h-64"
          src="https://www.youtube.com/embed/fL4s1sM1jX0"
          title="Nyungwe Forest"
          allowfullscreen>
        </iframe>

        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">Nyungwe Forest</h2>
        </div>
      </div>

    </div>

  </div>
</template>