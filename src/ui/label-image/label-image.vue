<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'
const props = defineProps<{
  text: string
}>()

const emit = defineEmits(['update:text'])
const modelText = useVModel(props, 'text', emit)

</script>

<template>
  <div class="label-image">
    <img class="label-image__img" src="http://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-34.jpg" alt="">
    <div class="label-image__text-wrapper">
      <q-input class="label-image__text" hide-bottom-space dense borderless autogrow v-model="modelText" />
    </div>
    <div class="label-image__text-wrapper label-image__text-wrapper--visible">
      <div class="label-image__text label-image__text--visible">
        {{ text }}
      </div>
    </div>
    {{ modelText}}
  </div>
</template>

<style lang="scss">
.label-image {
  display: flex;
  position: relative;
  &__img {
    width: 100%;
  }
  &__text-wrapper {
    position: absolute;
    z-index: 5;
    display: flex;
    justify-content: center;
    bottom: 32px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    &--visible {
      opacity: 1;
      z-index: 3;
    }
  }
  &__text {
    textarea {
      color: white !important;
      line-height: 24px !important;
      text-align: center;
    }
    &--visible {
      padding: 12px 16px;
    }
    color: white !important;
    line-height: 24px !important;
    text-align: center;
    background: rgba(224, 64, 251, 0.8);
    padding: 6px 16px 9px;
    border-radius: 12px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;
  }
}
</style>
