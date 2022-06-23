<script setup lang="ts">
import { useVModel, useFocusWithin } from '@vueuse/core'
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  text: string,
  imgSrc: string,
  mode: 'read' | 'edit'
}>()

const emit = defineEmits(['update:text', 'update:mode'])
const modelText = useVModel(props, 'text', emit)
const modelMode = useVModel(props, 'mode', emit)

const textInput = ref<HTMLElement | null >()
const { focused: inputIsFocused } = useFocusWithin(textInput)

const focusOnInput = () => {
  nextTick(() => {
    textInput?.value?.focus()
  })
}

watch(modelMode, val => {
  if (val === 'edit') {
    focusOnInput()
  }
})

watch(inputIsFocused, val => {
  if (!val) {
    modelMode.value = 'read'
  }
})

</script>

<template>
  <div class="label-image">
    <img class="label-image__img" :src="imgSrc" alt="" />
    <div class="label-image__text-wrapper">
      <q-input v-show="modelMode === 'edit'" ref="textInput" class="label-image__text" hide-bottom-space dense borderless autogrow v-model="modelText" />
    </div>
    <div class="label-image__text-wrapper label-image__text-wrapper--visible">
      <div class="label-image__text label-image__text--visible">
        {{ text }}
      </div>
    </div>
  </div>
  <pre>
    inputIsFocused: {{ inputIsFocused }} <br/>
    mode: {{ modelMode }}
  </pre>
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
