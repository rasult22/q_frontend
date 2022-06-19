<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'

import RefreshIcon from 'src/icons/refresh.vue'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['refresh', 'update:modelValue'])

const text = useVModel(props, 'modelValue', emit)
const action = () => emit('refresh')
</script>

<template>
  <q-input autogrow color="accent" v-model="text">
    <template v-slot:append>
      <q-avatar>
        <RefreshIcon @click="action" />
      </q-avatar>
    </template>
  </q-input>
</template>

<style>
</style>
