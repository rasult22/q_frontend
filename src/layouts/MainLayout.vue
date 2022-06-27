<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader/>
    <q-page-container>
      <q-page class="row justify-evenly">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from 'src/ui/layout/base-header.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
