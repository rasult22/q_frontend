<script setup>
import LampIcon from 'src/icons/lamp.vue'
</script>

<template>
  <div class="inline-alert">
    <div class="inline-alert__left">
      <LampIcon />
    </div>
    <div class="inline-alert__title">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .inline-alert {
    display: flex;
    padding: 16px;
    background: #FFCCBC;
    border-radius: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    &__left {}
    &__title {
      margin-left: 12px;
    }
  }
</style>
