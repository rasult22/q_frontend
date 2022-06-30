<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'
import BaseButtonList from 'src/ui/buttons/base-button-list.vue'
import LabelImage from 'src/ui/label-image/base-label-image.vue'
import RefreshIcon from 'src/icons/refresh.vue'
import EditIcon from 'src/icons/edit.vue'
import { useHeader } from 'src/composables/useHeader'
const {
  undoIt: headerUndo,
  redoIt: headerRedo,
  canRedo: headerCanRedo,
  canUndo: headerCanUndo
} = useHeader()
withDefaults(defineProps<{
  imageMode: 'edit' | 'read'
 }>(), {
  imageMode: 'edit'
})

const labelImageData = ref({
  text1: 'Default Title',
  imgSrc: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'
})

const { history, redo, undo, canRedo, canUndo } = useDebouncedRefHistory(labelImageData, { deep: true, capacity: 100, debounce: 500 })
// Linking header functionality with local refHistory
headerUndo.value = undo
headerRedo.value = redo

watch(history, () => {
  headerCanRedo.value = canRedo.value
  headerCanUndo.value = canUndo.value
}, { deep: true, immediate: true })

const mode = ref<'read' | 'edit'>('read')

const buttons = shallowRef([
  {
    text: 'Заменить изображение',
    icon: RefreshIcon,
    action: () => {
      labelImageData.value.imgSrc = 'https://images.unsplash.com/photo-1656227915939-d4ec7ed52688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
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
    <LabelImage v-model:mode="mode" :imgSrc="labelImageData.imgSrc" v-model:text="labelImageData.text1" />
    <BaseButtonList v-show="imageMode === 'edit'" :buttons="buttons" />
  </div>
</template>
