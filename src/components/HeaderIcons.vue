<template>
  <div class="flex justify-end items-center space-x-4 mb-6">
    <button class="p-2 bg-white rounded-lg shadow">
      <MenuIcon class="w-5 h-5"/>
    </button>
    <button class="relative p-2 bg-white rounded-lg shadow">
      <BellIcon class="w-5 h-5"/>
      <span class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">1</span>
    </button>
  </div>
</template>

<script setup>
import MenuIcon from '@/components/icons/MenuIcon.vue'
import BellIcon from '@/components/icons/BellIcon.vue'
</script>
