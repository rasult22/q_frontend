<template>
  <q-page class="row justify-evenly">
    <div class="full-width q-px-md">
      <Alert>
        Вы можете редактировать или обновить созданный текст
      </Alert>
      <VerticalTabItem class="q-mt-md" v-for="(niche, index) in Niches" :key="index">
        <template #icon>
            <component :is="niche.icon" width="24" height="24" />
        </template>
        {{ niche.title }}
      </VerticalTabItem>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Alert from 'src/ui/alerts/inline-alert.vue'
import DiamondIcon from 'src/icons/diamond.vue'
import CoctailIcon from 'src/icons/coctail.vue'
import MassageIcon from 'src/icons/massage.vue'
import TrophyIcon from 'src/icons/trophy.vue'
// import BaseButton from 'src/ui/buttons/base-button.vue'
import VerticalTabItem from 'src/ui/vertical-tabs/vertical-tab-item.vue'

const Niches = ref([
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
</script>
