<script setup>
import Alert from 'src/ui/alerts/inline-alert.vue'
import { shallowRef } from 'vue'
import { useHeader } from 'src/composables/useHeader'
import { useRouter } from 'vue-router'
// icones
import DiamondIcon from 'src/icons/diamond.vue'
import CoctailIcon from 'src/icons/coctail.vue'
import MassageIcon from 'src/icons/massage.vue'
import TrophyIcon from 'src/icons/trophy.vue'

import VerticalTabItem from 'src/ui/vertical-tabs/vertical-tab-item.vue'

const router = useRouter()
const { mode: headerMode } = useHeader()
headerMode.value = 'hidden'

const niches = shallowRef([
  {
    icon: DiamondIcon,
    title: 'Beauty'
  },
  {
    icon: CoctailIcon,
    title: 'Пищевые товары'
  },
  {
    icon: MassageIcon,
    title: 'Массаж'
  },
  {
    icon: TrophyIcon,
    title: 'Фитнес'
  }
])

const onClick = () => {
  // TODO: write saving logic
  router.push('/choose-contents')
}
</script>
<template>
  <div class="full-width q-px-md">
    <div class="niches__title">
      Выберите нишу
    </div>
    <Alert>
      Контент будет подстраиваться под вашу нишу
    </Alert>
    <VerticalTabItem @click="onClick" class="q-mt-md" v-for="(niche, index) in niches" :key="index">
      <template #icon>
          <component :is="niche.icon" width="24" height="24" />
      </template>
      {{ niche.title }}
    </VerticalTabItem>
  </div>
</template>

<style lang="scss">
.niches {
  &__title {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.01em;
    text-align: left;
    margin: 24px 0;
  }
}
</style>
