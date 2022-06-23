<script setup lang="ts">
import { defineComponent } from 'vue'
import DiamondIcon from 'src/icons/diamond.vue'
interface ButtonItem {
  text: string;
  icon: ReturnType<typeof defineComponent>;
  action: () => any
}
interface Props {
  buttons: ButtonItem[]
}
withDefaults(
  defineProps<Props>(),
  {
    buttons: () => [
      {
        text: 'Default text',
        icon: DiamondIcon,
        action: () => alert(1)
      },
      {
        text: 'Default text',
        icon: DiamondIcon,
        action: () => alert(1)
      },
      {
        text: 'Default text',
        icon: DiamondIcon,
        action: () => alert(1)
      },
      {
        text: 'Default text',
        icon: DiamondIcon,
        action: () => alert(1)
      }
    ]
  }
)

</script>

<template>
  <div class="button-list">
    <div v-for="({ icon, text, action }, index) in buttons" @click="action" :key="index" class="button-list__item">
        <component :is="icon" />
        <span class="button-list__item-text" >
          {{ text }}
        </span>
    </div>
  </div>
</template>

<style lang="scss">

.button-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__item {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px 24px;
    &-icon {}
    &-text {
      margin-top: 4px;
      max-width: 86px;
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
}

</style>
