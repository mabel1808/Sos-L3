<template>
    <section
    class="min-h-screen bg-cover bg-center bg-no-repeat p-10"
    style="background-image: url('/src/assets/images/Muhazi.png');"
  >
    <div class="bg-white/80 p-8 rounded-xl">

      <h1 class="text-4xl font-bold text-green-800 mb-4">
        Western Province
      </h1> 
      <div class="p-10">
    <p class="text-gray-700 mb-8">
      Western Province is known for Lake Kivu, beautiful beaches, rolling hills,
      islands, and breathtaking views that attract many tourists every year.
    </p>
    </div>
    </div>

      <!-- Rest of your content -->

    <!-- Images -->
    <div class="grid md:grid-cols-3 gap-6">

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/kivyl.jpg"
          alt="Lake Kivu"
          class="w-full h-56 object-cover"
        >
        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">
            Lake Kivu
          </h2>
        </div>
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/gisenyi.jpg"
          alt="Western Beaches"
          class="w-full h-56 object-cover"
        >
        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">
            Beautiful Beaches
          </h2>
        </div>
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src="../assets/images/scenic.jpg"
          alt="Western Hills"
          class="w-full h-56 object-cover"
        >
        <div class="p-4">
          <h2 class="text-xl font-bold text-green-800">
            Scenic Hills
          </h2>
        </div>
      </div>

    </div>

    <!-- Information -->
    <div class="mt-10 bg-green-700 text-white rounded-xl p-6">
      <h2 class="text-2xl font-bold mb-3">
        Why Visit Western Province?
      </h2>

      <p>
        Western Province offers relaxing lakeside experiences, water activities,
        beautiful landscapes, and some of the most spectacular views in Rwanda.
      </p>
    </div>

</section>
</template>