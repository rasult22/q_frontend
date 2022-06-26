<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader/>
    <q-page-container>
      <q-page class="row justify-evenly">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from 'src/ui/layout/base-header.vue'
</script>
