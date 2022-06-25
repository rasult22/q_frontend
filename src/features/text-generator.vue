<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRefHistory } from '@vueuse/core'
import BaseTextField from 'src/ui/inputs/base-text-field.vue'
import BaseCard from 'src/ui/cards/base-card.vue'
import { useHeader } from 'src/composables/useHeader'
const {
  undoIt: headerUndo,
  redoIt: headerRedo,
  canRedo: headerCanRedo,
  canUndo: headerCanUndo
} = useHeader()

const texts = ref({
  text1: {
    value: 'А у нас новая услуга!',
    id: 1
  },
  text2: {
    value: 'Встречайте(наименование процедуры)! \n Время процедуры: (продолжительность процедуры)Инвентарь: (всё, что необходимо для процедуры)Мастер: (мастер процедуры) \n Цена: (цена процедуры) \n После этой процедуры вы будете сиять от удовольствия!',
    id: 2
  },
  text3: {
    value: 'Спешите записаться! У нас цены действительно ниже обычных.',
    id: 3
  }
})
const { history, redo, undo, canRedo, canUndo } = useRefHistory(texts, { deep: true, capacity: 100 })
// Linking header functionality with local refHistory
headerUndo.value = undo
headerRedo.value = redo

watch(history, () => {
  headerCanRedo.value = canRedo.value
  headerCanUndo.value = canUndo.value
}, { deep: true })

const changeText = (id: any) => {
  let target = { value: '', id: 0 }
  Object.values(texts.value).forEach(text => {
    if (text.id === id) {
      target = text
    }
  })

  if (target) {
    target.value = target.value + ' Some'
  }
}

</script>

<template>
  <BaseCard class="q-mt-md">
    <template #heading-left>
        Созданный текст
    </template>
    <template #heading-right>
        400 знаков
    </template>
    <BaseTextField v-model="texts.text1.value" @refresh="changeText(texts.text1.id)" />
    <BaseTextField v-model="texts.text2.value" @refresh="changeText(texts.text2.id)"/>
    <BaseTextField v-model="texts.text3.value" @refresh="changeText(texts.text3.id)"/>
  </BaseCard>
</template>
