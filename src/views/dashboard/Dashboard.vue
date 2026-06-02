<template>
    <div class="flex h-screen bg-grey-100">
         <aside class="m-68 bg-green-800 text-white flex flex-col">
            <div class="p-6 text 2xl font-bold border-b border-green-700">Dashboard</div>
            <nav class="flex-1 p-4">
                <button @click="activeMenu='overview'" :class="activeMenu==='overview'?'bg-green-700':'hover:bg-green-600'" class="w-full text-left px-4 py-3 rounded mb-2">Overview</button>
                <button @click="activeMenu='booking'" :class="activeMenu==='booking'?'bg-green-700':'hover:bg-green-600'" class="w-full text-left px-4 py-3 rounded mb-2">Booking</button>
                <button @click="activeMenu='users'" :class="activeMenu==='users'?'bg-green-700':'hover:bg-green-600'" class="w-full text-left px-4 py-3 rounded mb-2">Users</button>   
            </nav>
            <!-- button for logout  -->
             <div class="p-4 borer-t border-green-700">
                <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 text-white py-3 rounded">Logout</button>
             </div>
         </aside>
         <!-- main content -->
          <main class="flex-1 overflow-auto p-6">Main Content</main>
    </div>
</template>a