<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import BaseButtonList from 'src/ui/buttons/base-button-list.vue'
import LabelImage from 'src/ui/label-image/base-label-image.vue'
import RefreshIcon from 'src/icons/refresh.vue'
import EditIcon from 'src/icons/edit.vue'
const text1 = ref('Default title')
const mode = ref<'read' | 'edit'>('read')
const buttons = shallowRef([
  {
    text: 'Заменить изображение',
    icon: RefreshIcon,
    action: () => { alert(1) }
  },
  {
    text: 'Редактировать заголовок',
    icon: EditIcon,
    action: () => {
      // TODO: Refactor this shit
      mode.value = 'read'
      setTimeout(() => { mode.value = 'edit' }, 0)
    }
  }
])
</script>

<template>
  <div>
    <LabelImage :mode="mode" v-model:text="text1" />
    <BaseButtonList :buttons="buttons" />
  </div>
</template>
