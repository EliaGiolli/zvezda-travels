<template>
  <div class="min-h-screen bg-slate-50 text-gray-900">
    <Navbar />
        <slot />
    <Footer />
  </div>
</template>


<script setup lang="ts">
import Navbar from '../components/shared/Navbar.vue';
import Footer from '../components/shared/Footer.vue';
</script>

