<script setup>
import VerticalTabItem from 'src/ui/vertical-tabs/vertical-tab-item.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useHeader } from 'src/composables/useHeader'
const router = useRouter()
const { title, routerBack, mode: headerMode } = useHeader()

title.value = 'Рубрики'
headerMode.value = 'default'
routerBack.value = () => {
  router.push('/choose-contents')
}
const onClick = () => {
  router.push('/generate-text')
}
const rubrics = ref([
  {
    title: 'Интервью/отзывы/фотоотчеты'
  },
  {
    title: 'Обзоры новинок/товаров/услуг'
  },
  {
    title: 'Инфоповоды/памятные даты'
  },
  {
    title: 'Совместимость товаров/доп товар'
  }
])
</script>
<template>
  <div class="full-width q-px-md">
  <VerticalTabItem @click="onClick" class="q-mt-md" v-for="({ title }, index) in rubrics" :key="index">
    {{ title }}
  </VerticalTabItem>
  </div>
</template>

<style>
</style>
