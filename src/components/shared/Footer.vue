<template>
   <footer class="bg-white text-gray-900 flex flex-col items-center text-center w-full border-2 border-t-slate-200 p-8">
         <div class="flex flex-col justify-center items-center text-center w-full gap-2">
            <div class="flex justify-center items-center text-center">
               <h1 class="text-2xl font-bold uppercase text-gray-900"> © {{ currentYear }} Zvezda Travels.</h1>
            </div>
            <ul class="flex justify-around items-center text-center list-none gap-2 w-full p-4 my-10">
                <li><RouterLink to="/" class="text-gray-900 text-sm md:text-md hover:bg-blue-500 hover:text-gray-200 p-2 md:p-3 rounded-md transition-all duration-200">
                    Pagina principale
                </RouterLink></li>
                <li><RouterLink to="/blog" class="text-gray-900 text-sm md:text-md hover:bg-blue-500 hover:text-gray-200 p-2 md:p-3 rounded-md transition-all duration-200">
                    Blog
                </RouterLink></li>
                <li><RouterLink to="/tours" class="text-gray-900 text-sm md:text-md hover:bg-blue-500 hover:text-gray-200 p-2 md:p-3 rounded-md transition-all duration-200">
                    I nostri tour
                </RouterLink></li>
                <li><RouterLink to="/metro" class="text-gray-900 text-sm md:text-md hover:bg-blue-500 hover:text-gray-200 p-2 md:p-3 rounded-md transition-all duration-200">
                    Metro di Mosca
                </RouterLink></li>
                <li><RouterLink to="/contacts" class="text-gray-900 text-sm md:text-md hover:bg-blue-500 hover:text-gray-200 p-2 md:p-3 rounded-md transition-all duration-200">
                    Contattaci
                </RouterLink></li>
            </ul>
        </div>
   </footer>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    const currentYear = new Date().getFullYear();
</script>