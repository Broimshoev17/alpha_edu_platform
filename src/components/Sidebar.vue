<template>
  <aside class="w-20 bg-gray-900 text-white flex flex-col items-center py-6">
    <!-- Логотип -->
    <router-link to="/" class="mb-8">
      <img src="@/assets/logo.png" alt="Logo" class="w-10 h-10"/>
    </router-link>

    <!-- Навигация -->
    <nav class="flex-1 flex flex-col items-center space-y-6">
      <router-link to="/students" class="hover:text-blue-400">
        <UserIcon class="w-6 h-6"/>
      </router-link>
      <router-link to="/flows" class="hover:text-blue-400">
        <GroupIcon class="w-6 h-6"/>
      </router-link>
      <router-link to="/finance" class="hover:text-blue-400">
        <ChartIcon class="w-6 h-6"/>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
// Здесь можно импортировать ваши SVG-компоненты или иконки
import UserIcon  from '@/components/icons/UserIcon.vue'
import GroupIcon from '@/components/icons/GroupIcon.vue'
import ChartIcon from '@/components/icons/ChartIcon.vue'
</script>

