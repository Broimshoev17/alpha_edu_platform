<template>
  <div :class="['rounded-3xl p-6 text-center', highlight ? 'bg-blue-100' : 'bg-white']">
    <h2 :class="[
        'text-4xl font-bold',
        highlight ? 'text-blue-500' : 'text-purple-600'
      ]">
      {{ title }}
    </h2>
    <p class="mt-3 text-gray-600">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title:     { type: String, required: true },
  subtitle:  { type: String, required: true },
  highlight: { type: Boolean, default: false }
})
</script>
