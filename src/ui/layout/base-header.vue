<script setup lang="ts">
import BackArrow from 'src/icons/back-arrow.vue'
import Undo from 'src/icons/undo.vue'
import Redo from 'src/icons/redo.vue'

import { useHeader } from 'src/composables/useHeader'
const { undo, mode, redo, title, back, canRedo, canUndo } = useHeader()

</script>
<template>
  <div v-if="mode !== 'hidden'" class="app-header">
    <div class="app-header__left">
      <BackArrow @click="back" width="20" height="20" />
    </div>
    <div class="app-header__center">
      {{ title }}
    </div>
    <div v-if="mode === 'history'" class="app-header__right">
        <Undo @click="undo" :style="`color: ${ canUndo ? '#212121' : '#BDBDBD' };`" width="24" height="24" />
        <Redo @click="redo" :style="`color: ${ canRedo ? '#212121' : '#BDBDBD' };`" width="24" height="24" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.app-header {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 8px 16px;
  justify-content: space-between;
  &__left {
    display: flex;
    align-items: center;
  }
  &__center {
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.01em;
    text-align: left;
    margin-left: 20px;
    margin-right: auto;
  }
  &__right {
    display: flex;
    align-items: center;
  }

}
</style>
