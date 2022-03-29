<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
// import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar />
    <div class="pt-16">
        <RouterView />
    </div>
</template>

<style>
@import '@/assets/app.css';
</style>
