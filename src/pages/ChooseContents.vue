<script setup>
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { useHeader } from 'src/composables/useHeader'
import VerticalTabItem from 'src/ui/vertical-tabs/vertical-tab-item.vue'

// icons
import BagIcon from 'src/icons/bag.vue'
import InteractiveIcon from 'src/icons/interactive.vue'
import InfoIcon from 'src/icons/info.vue'
import QuestionIcon from 'src/icons/question.vue'
import GamepadIcon from 'src/icons/Gamepad.vue'
import ChatIcon from 'src/icons/chat.vue'
const router = useRouter()
const { title, routerBack } = useHeader()
const contents = shallowRef([
  {
    icon: BagIcon,
    title: 'Продающий'
  },
  {
    icon: InteractiveIcon,
    title: 'Интерактивный'
  },
  {
    icon: InfoIcon,
    title: 'Информативные'
  },
  {
    icon: QuestionIcon,
    title: 'Вовлекающие'
  },
  {
    icon: GamepadIcon,
    title: 'Развлекательные'
  },
  {
    icon: ChatIcon,
    title: 'Пост-знакомство'
  }
])
title.value = 'Тип контента'
routerBack.value = () => {
  router.push('/choose-niches')
}
const onClick = () => {
  router.push('/choose-rubrics')
}

</script>
<template>
  <div class="full-width q-px-md">
    <VerticalTabItem @click="onClick" class="q-mt-md" v-for="(content, index) in contents" :key="index">
      <template #icon>
            <component :is="content.icon" width="24" height="24" />
        </template>
        {{ content.title }}
    </VerticalTabItem>
  </div>
</template>

<style>
</style>
