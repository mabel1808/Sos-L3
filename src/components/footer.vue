<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">
 <div class="flex flex-wrap justify-between gap-8">   
<div>
<h3 class="text-yellow-300 font-bold text-1g mb-3">TEMBERA U'RWANDA</h3>
<p class="text-sm text-green-200">Discover the Beauty of Rwanda</p>

</div>
<!--Quicklinks-->
<div> 
 <h3 class="text-yellow-300 font-bold text-1g mb-3">QuickLinks</h3>
 <ul class="space y-2 text-sm">
    <li>
        <RouterLink to ="/"class="hover:text-yellow-300 font-bold text-1g mb-3">Home</RouterLink>
    </li>
     <li>
        <RouterLink to ="/About"class="hover:text-yellow-300 font-bold text-1g mb-3">About</RouterLink>
    </li>
      <li>
        <RouterLink to ="/Services"class="hover:text-yellow-300 font-bold text-1g mb-3">Services</RouterLink>
    </li>
      <li>
        <RouterLink to ="/Contact"class="hover:text-yellow-300 font-bold text-1g mb-3">Contact</RouterLink>
    </li>
</ul>
</div>

  <!--Destinations-->  
  <div> 
 <h3 class="text-yellow-300 font-bold text-1g mb-3">Destinations</h3>
 <ul class="space y-2 text-sm">
    <li>
        <RouterLink to ="/North" class="hover:text-yellow-300 font-bold text-1g mb-3">North</RouterLink>
        </li>
        <li>
        <RouterLink to ="/South" class="hover:text-yellow-300 font-bold text-1g mb-3">South</RouterLink>
        </li>
        <li>
        <RouterLink to ="/East" class="hover:text-yellow-300 font-bold text-1g mb-3">East</RouterLink>
        </li>
        <li>
        <RouterLink to ="/West" class="hover:text-yellow-300 font-bold text-1g mb-3">West</RouterLink>
        </li>
        <li>
        <RouterLink to ="/Kigali " class="hover:text-yellow-300 font-bold text-1g mb-3">Kigali city</RouterLink>
    </li>
    </ul>
    </div>
    <!--Contact Info-->
 <div> 
 <h3 class="text-yellow-300 font-bold text-1g mb-3">Contact Us</h3>
 <ul class="space y-2 text-sm">
    <li>
        <RouterLink to ="/" class="hover:text-yellow-300 font-bold text-1g mb-3"> Number; +250 788 262 287</RouterLink>
        </li>
         <li>
        <RouterLink to ="/" class="hover:text-yellow-300 font-bold text-1g mb-3"> Email; tember@gmail.com</RouterLink>
        </li>
        <li>
        <RouterLink to ="/" class="hover:text-yellow-300 font-bold text-1g mb-3"> Kagugu-Kigali-Rwanda</RouterLink>
        </li>
        
        
    </ul>
     </div> 
    </div>
    <!--place for copy right-->
    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300"> 
        <p class="text-center">©️  2025 TEMBERA U'RWANDA All Rights Reserved.Done by MUGASA💓</p>
 
    </div>
    
</footer>
</template>