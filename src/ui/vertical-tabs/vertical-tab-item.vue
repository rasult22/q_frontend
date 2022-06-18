<script setup>
import ForwardArrowIcon from 'src/icons/forward-arrow.vue'
</script>
<template>
  <div class="vertical-tab-item">
    <div class="vertical-tab-item__left">
      <slot name="icon">
      </slot>
    </div>
    <div class="vertical-tab-item__center">
      <slot></slot>
    </div>
    <div class="vertical-tab-item__right">
      <ForwardArrowIcon width="16" height="16" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vertical-tab-item {
  width: 100%;
  padding: 16px;
  box-shadow: 0px 4px 10px 0px #00000012;
  border-radius: 12px;
  display: flex;
  align-items: center;
  &__left {
    display: flex;
    align-items: center;
  }
  &__center {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    height: 100%;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 16px;
    margin-right: auto;
  }
  &__right {}
}
</style>
