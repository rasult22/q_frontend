<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import BaseButtonList from 'src/ui/buttons/base-button-list.vue'
import LabelImage from 'src/ui/label-image/base-label-image.vue'
import RefreshIcon from 'src/icons/refresh.vue'
import EditIcon from 'src/icons/edit.vue'
const text1 = ref('Default title')
const mode = ref<'read' | 'edit'>('read')
const imgSrc = ref('http://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-34.jpg')
const buttons = shallowRef([
  {
    text: 'Заменить изображение',
    icon: RefreshIcon,
    action: () => {
      imgSrc.value = 'https://miro.medium.com/max/1400/1*xg4ZkSYAKYoJ5TV_vrEVug.png'
    }
  },
  {
    text: 'Редактировать заголовок',
    icon: EditIcon,
    action: () => {
      mode.value = 'edit'
    }
  }
])
</script>

<template>
  <div>
    <LabelImage v-model:mode="mode" :imgSrc="imgSrc" v-model:text="text1" />
    <BaseButtonList :buttons="buttons" />
  </div>
</template>
