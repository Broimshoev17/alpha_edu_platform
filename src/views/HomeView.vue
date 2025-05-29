<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Сайдбар -->
    <Sidebar />

    <!-- Основной контент -->
    <main class="flex-1 p-6">
      <!-- Иконки в шапке -->
      <HeaderIcons />

      <!-- Герой-секция -->
      <HeroSection />

      <!-- Статистика -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatsCard
          title="73%"
          subtitle="выпускников трудоустраиваются по специальности вскоре после окончания обучения."
        />
        <StatsCard
          title="6+ лет"
          subtitle="преподаём в разных IT направлений"
          :highlight="true"
        />
        <StatsCard
          title="3000+"
          subtitle="студентов прошедших наши курсы по B2B и B2C направлениям"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar      from '@/components/Sidebar.vue'
import HeaderIcons  from '@/components/HeaderIcons.vue'
import HeroSection  from '@/components/HeroSection.vue'
import StatsCard    from '@/components/StatsCard.vue'
</script>
