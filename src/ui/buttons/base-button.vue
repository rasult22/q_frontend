<script setup>
</script>

<template>
  <div class="base-button__wrapper">
    <button class="base-button">
      <slot>
      </slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .base-button {
    width: 100%;
    padding: 12px 0;
    background-color: #FF4081;
    color: white;
    border-radius: 12px;
    border: none;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    &__wrapper {
      padding: 20px 16px;
      width: 100%;
    }
    &:active, &:focus {
      border: none;
      outline: none;
    }
  }
</style>
