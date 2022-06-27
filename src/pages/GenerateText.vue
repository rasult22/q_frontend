<script setup>
import TextGenerator from 'src/features/text-generator.vue'
import Alert from 'src/ui/alerts/inline-alert.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import { useRouter } from 'vue-router'
import { useHeader } from 'src/composables/useHeader'
const router = useRouter()
const { title, routerBack } = useHeader()
title.value = ''
routerBack.value = () => {
  router.push('/choose-rubrics')
}
const onClick = () => {
  router.push('/choose-image')
}
</script>

<template>
  <div class="full-width q-px-md generate-text">
    <Alert class="q-mt-sm">
        Вы можете редактировать или обновить созданный текст
    </Alert>
    <TextGenerator />
    <BaseButton @click="onClick" class="generate-text__btn">
      Подобрать изображение
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
  .generate-text {
    position: relative;
    &__btn {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>
