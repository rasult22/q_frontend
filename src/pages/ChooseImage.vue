<script setup>
import BaseButton from 'src/ui/buttons/base-button.vue'
import ImageConstructor from 'src/features/image-constructor.vue'
import { useRouter } from 'vue-router'
import { useHeader } from 'src/composables/useHeader'
const router = useRouter()
const { title, routerBack } = useHeader()
title.value = ''
routerBack.value = () => {
  router.push('/generate-text')
}
const onClick = () => {
  // on click
  router.push('/process-finishing')
}
</script>
<template>
    <div class="full-width choose-image">
      <ImageConstructor />
       <BaseButton @click="onClick" class="choose-image__btn">
          К предпросмотру
      </BaseButton>
    </div>
</template>

<style lang="scss" scoped>
.choose-image {
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
