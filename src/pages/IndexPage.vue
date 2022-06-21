<template>
  <q-page class="row justify-evenly">
    <div class="full-width">
      <LabelImage v-model:text="text1" />
      <BaseTextField v-model="text1" @refresh="alertStuff(text1)" />

    </div>
    <div v-if="false" class="full-width q-px-md">
      <Alert>
        Вы можете редактировать или обновить созданный текст
      </Alert>
      <VerticalTabItem class="q-mt-md" v-for="(niche, index) in Niches" :key="index">
        <template #icon>
            <component :is="niche.icon" width="24" height="24" />
        </template>
        {{ niche.title }}
      </VerticalTabItem>
      <BaseCard class="q-mt-md">
          <template #heading-left>
              Созданный текст
          </template>
          <template #heading-right>
              400 знаков
          </template>
          <BaseTextField v-model="text1" @refresh="alertStuff(text1)" />
          <BaseTextField v-model="text2" @refresh="alertStuff(text2)"/>
          <BaseTextField v-model="text3" @refresh="alertStuff(text3)"/>
      </BaseCard>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import LabelImage from 'src/ui/label-image/label-image.vue'
import { shallowRef, ref } from 'vue'
import BaseTextField from 'src/ui/inputs/base-text-field.vue'
import BaseCard from 'src/ui/cards/base-card.vue'
import Alert from 'src/ui/alerts/inline-alert.vue'
import DiamondIcon from 'src/icons/diamond.vue'
import CoctailIcon from 'src/icons/coctail.vue'
import MassageIcon from 'src/icons/massage.vue'
import TrophyIcon from 'src/icons/trophy.vue'
// import BaseButton from 'src/ui/buttons/base-button.vue'
import VerticalTabItem from 'src/ui/vertical-tabs/vertical-tab-item.vue'

const text1 = ref('А у нас новая услуга!')
const text2 = ref('Встречайте(наименование процедуры)! \n Время процедуры: (продолжительность процедуры)Инвентарь: (всё, что необходимо для процедуры)Мастер: (мастер процедуры) \n Цена: (цена процедуры) \n После этой процедуры вы будете сиять от удовольствия!')
const text3 = ref('Спешите записаться! У нас цены действительно ниже обычных.')
const Niches = shallowRef([
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
const alertStuff = (stuff: string) => alert(stuff)
</script>
