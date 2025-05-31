<template>
    <nav class="bg-white text-gray-900 h-20 w-full flex justify-center items-center text-center border-2 border-b-slate-200 ">
        <h1 class="text-3xl md:text-4xl uppercase text-gray-900 hidden md:inline">Zvezda Travels</h1>
        <ul class="hidden md:flex justify-around items-center text-center text-lg md:text-xl w-full">
            <li class="p-2 hover:p-3 text-gray-700 hover:bg-blue-700 hover:text-gray-200 rounded-md hover:shadow-md shadow-gray-300 transition-all duration-200">
                <RouterLink to="/">Pagina principale</RouterLink>
            </li>
            <li class="p-2 hover:p-3 text-gray-700 hover:bg-blue-700 hover:text-gray-200 rounded-md hover:shadow-md shadow-gray-300 transition-all duration-200">
                 <RouterLink to="/blog">Blog</RouterLink>
            </li>
            <li class="p-2 hover:p-3 text-gray-700 hover:bg-blue-700 hover:text-gray-200 rounded-md hover:shadow-md shadow-gray-300 transition-all duration-200">
                 <RouterLink to="/tours">I nostri pacchetti viaggio</RouterLink>
            </li>
            <li class="p-2 hover:p-3 text-gray-700 hover:bg-blue-700 hover:text-gray-200 rounded-md hover:shadow-md shadow-gray-300 transition-all duration-200">
                 <RouterLink to="/metro">Metro di Mosca</RouterLink>
            </li>
            <li class="p-2 hover:p-3 text-gray-700 hover:bg-blue-700 hover:text-gray-200 rounded-md hover:shadow-md shadow-gray-300 transition-all duration-200">
                 <RouterLink to="/contacts">Contattaci</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

